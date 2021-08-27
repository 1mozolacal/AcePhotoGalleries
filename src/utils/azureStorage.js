// import { BlobServiceClient } from '@azure/storage-blob'

const url = "https://mjmpictures.blob.core.windows.net/pics/images.json"

export const main = () => {
    // Fetch JSON file for data
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
}