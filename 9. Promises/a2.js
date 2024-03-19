function downloader(url, cb){
    //Anyone Who wants to download something first and then execute something else
    //Can use this function
   console.log("Downloading Started from",url)
   setTimeout((url)=>{
    const datadownloaded = "Har-Har-Mahadev-Song";
    console.log("Downloading Completed")
    cb(datadownloaded);
   },8000)
}


function writeFile(data, cb){
    console.log("Started Writing Data", data)

    setTimeout((data)=>{
        const fileName = "song.mp4";
        console.log("File Writing Completed")
        cb(fileName);// cb -> any callback
    }, 4000);
   
}

function uploadFile(fileName, newUrl, cb){
    console.log("Uploading the file",fileName,"on url",newUrl);
    setTimeout((fileName,newUrl)=>{
        const status = "Success";
        cb(status);
    }, 6000)
    
}

console.log("Let's Start")

downloader("www.xyz.com", (datadownloaded) => {
    writeFile(datadownloaded,(fileName) => {
        uploadFile(fileName,"www.newurl.com",(status)=>{
            console.log(status);
        })
    })
})

// console.log("Again")

/*
downloader("www.google.com",(data)=>{
    uploadFile(data,"www.uploaded.com",(status)=>{
        console.log("Status")
    })
})
*/