function downloader(url){
    console.log("Downloading started from url",url);
    const pr = new Promise((res,rej)=>{
       return  setTimeout(()=>{
            res("Dummy content");
        },4000)
    })
    pr.then((value)=> {
    console.log("Download Completed ",value);
    //return value;
});
   return pr;
}

function writeFile(data){
    console.log("Started Writing data", data);
    const pr = new Promise((res,rej)=>{
       return  setTimeout(()=>{
            res("file.txt");
        },2000)
    })
    pr.then((value)=> {
    console.log("File Writing Completed",value);
    //return value;
});
    return pr;
}

function uploadFile(fileName,newUrl){
    console.log("Uploading the file",fileName,"on url",newUrl);
    const pr = new Promise((res,rej)=>{
       return  setTimeout(()=>{
        const Status = "Success"
            res(Status);
        },3000)
    })
    pr.then((value)=> {console.log("Uploading Status",value)})
}

downloader("www.google.com")
.then((value)=>writeFile(value))
.then((value)=>uploadFile(value,"www.newurl.com"))





