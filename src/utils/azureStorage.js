import { BlobServiceClient } from '@azure/storage-blob'

const baseUrl = "https://mjmpictures.blob.core.windows.net"

// Fetch JSON file for data
export const getJSONData = async (filename, container = 'config') => {
    const url = `${baseUrl}/${container}/${filename}`;
    var jsonData;
    await fetch(url)
        .then(response => {
            if (response.ok) {
                jsonData = [true, response.json()]
            }
            else {
                jsonData = [false, response]
            }
        })
    if (jsonData[0]) {
        await jsonData[1].then((data) => jsonData[1] = data)
    }
    console.log("func ret: %o", jsonData)
    return jsonData
}

export const overWriteJSON = async (payload, filename, token, container = 'config') => {
    var previous = await getJSONData(filename)
    if (previous[0]) {
        var d = new Date();
        var s = (d.getFullYear() + "|" + (d.getMonth() + 1) + "|" + d.getDate() + "  " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds()).toString();
        uploadNewJsonFile(previous[1], 'backups/' + filename + "   " + s, token, container)
    }
    uploadNewJsonFile(payload, filename, token, container)
}

export const getJSONDataOLD = async (filename, container = 'config') => {
    const url = `${baseUrl}/${container}/${filename}`;
    var jsonData;
    await fetch(url)
        .then(response => response.json())
        .then(data => jsonData = data)
    console.log("func ret: %o", jsonData)
    return jsonData
}

// Upload new content
export const uploadNewJsonFile = async (jsonData, blobName, token, container = 'config') => {
    const strRep = JSON.stringify(jsonData)
    // 🐄 go moo 
    const blobServiceClient = new BlobServiceClient(`${baseUrl}/${token}`);
    const containerClient = blobServiceClient.getContainerClient(container);

    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadBlobResponse = await blockBlobClient.upload(strRep, strRep.length)
    .then( res => {return res})
    .catch( err => console.error("failed to upload to storage with: %o",err));
    console.log("Written with response of: %o", uploadBlobResponse)
    return uploadBlobResponse
}


const createBlobInContainer = async (containerClient, file) => {

    // create blobClient for container
    const blobClient = containerClient.getBlockBlobClient(file.name);

    // set mimetype as determined from browser with file upload control
    const options = { blobHTTPHeaders: { blobContentType: file.type } };

    // upload file
    await blobClient.uploadBrowserData(file, options);
}

// export const uploadFileToBlob = async (file) => {
//     if (!file) return [];

//     const containerClient = blobServiceClient.getContainerClient("pics");

//     const blockBlobClient = containerClient.getBlockBlobClient(file.name);
//     const uploadBlobResponse = await blockBlobClient.upload(file, file.size);
//     console.log("Written with response of: %o", uploadBlobResponse)
// };

export const uploadFileToBlob = async (file, token) => {
    if (!file) return [];

    // get Container - full public read access
    const blobServiceClient = new BlobServiceClient(`${baseUrl}/${token}`);
    const containerClient = blobServiceClient.getContainerClient("pics");

    if (!containerClient.exists())
        await containerClient.createIfNotExists({
            access: 'container',
        });

    // upload file
    const result = await createBlobInContainer(containerClient, file);
    console.log("upl res: %o >< %o", result, file)
};


export const getAllContents = async (token, type = "pics") => {
    // Get contents from blob storage
    // Type: data, pics
    const blobServiceClient = new BlobServiceClient(`${baseUrl}/${token}`);
    const containerClient = blobServiceClient.getContainerClient(type);

    if (!containerClient.exists())
        await containerClient.createIfNotExists({
            access: 'container',
        });
    // get list of blobs in container
    return getBlobsInContainer(containerClient);
}


export const getBlobsInContainer = async (containerClient) => {
    const returnedBlobUrls = [];

    for await (const blob of containerClient.listBlobsFlat()) {
        returnedBlobUrls.push(
            `${baseUrl}/pics/${blob.name}`
        );
    }

    return returnedBlobUrls;
}