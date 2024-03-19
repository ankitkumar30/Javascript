function downloader(url) {
    return new Promise((res, rej) => {
        console.log("Started downloading from", url);
        setTimeout(() => {
            console.log("Download completed");
            let downloadedData = "Dummy content";
            res(downloadedData); 
        }, 4000);
    })
}

function writeFile(data) {
    return new Promise((res, rej) => {
        console.log("Started writing data", data);
        setTimeout(() => {
            console.log("Writing completed");
            // with the written content, whatever you want to do you can do
            let fileName = "Dummy.txt";
            res(fileName); // cb -> any callback
        }, 2000);
    })
    
}

function uploadFile(fileName, newUrl) {

    return new Promise((res, rej) => {
        console.log("Started uploading file", fileName, "on the url", newUrl);
        setTimeout(() => {
            console.log("Upload completed");
            // with the uploaded content, whatever you want to do you can do
            let uploadResponse = "SUCESSS";
            res(uploadResponse); // cb -> any callback
        }, 3000);
    });
   
}

function doAfterRecieving(value) {
    const f = generator.next(value);
    if (f.done == true) return ; 
        f.value.then(doAfterRecieving);
}

function* Steps(){
    console.log("Downloading Started");
    const downloadedData = yield downloader("www.google.com");
    console.log("Data downloaded is",downloadedData);

    console.log("Writing File:");
    const fileName = yield writeFile(downloadedData);
    console.log("File Written",fileName);

    console.log("Uploading Started");
    const Status = yield uploadFile("www.drive.google.com" , fileName);
    console.log("Uploading Status : ",Status);    
}

const generator = Steps();
const downPromise = generator.next()
downPromise.value.then(doAfterRecieving);
