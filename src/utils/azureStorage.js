import { BlobServiceClient } from '@azure/storage-blob'

const baseUrl = "https://mjmpictures.blob.core.windows.net"

// Make sure to hide token away
const token = "?sv=2020-08-04&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2021-09-11T04:01:01Z&st=2021-09-03T20:01:01Z&spr=https&sig=UgkKm8ieFPNJFT%2F9Qb07l2CfGT%2F0nAu%2BEyHalR1kptM%3D";

const conString = `${baseUrl}/${token}`

const blobServiceClient = new BlobServiceClient(conString);

// Fetch JSON file for data
export const getJSONData = async (filename,container='config') => {
    const url = `${baseUrl}/${container}/${filename}`;
    var jsonData;
    await fetch(url)
        .then(response => response.json() )
        .then(data => jsonData = data)
    console.log("func ret: %o", jsonData)
    return jsonData
}

// Upload new content
export const uploadNewJsonFile = async (content, blobName) => {
    // 🐄 go moo 
    const containerClient = blobServiceClient.getContainerClient('pics');

    const blockBlobClient = containerClient.getBlockBlobClient(blobName);
    const uploadBlobResponse = await blockBlobClient.upload(content, content.length);
}


const createBlobInContainer = async (containerClient, file) => {

    // create blobClient for container
    const blobClient = containerClient.getBlockBlobClient(file.name);

    // set mimetype as determined from browser with file upload control
    const options = { blobHTTPHeaders: { blobContentType: file.type } };

    // upload file
    await blobClient.uploadBrowserData(file, options);
}

export const uploadFileToBlob = async (file) => {
    if (!file) return [];

    // get Container - full public read access
    const containerClient = blobServiceClient.getContainerClient("pics");

    if (!containerClient.exists())
        await containerClient.createIfNotExists({
            access: 'container',
        });

    // upload file
    await createBlobInContainer(containerClient, file);
};


export const getAllContents = async (type = "pics") => {
    // Get contents from blob storage
    // Type: data, pics
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