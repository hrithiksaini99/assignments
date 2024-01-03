const fs = require('fs');
fs.readFile("a.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err.message);
    }
    else {
        data = data.replace(/\s+/g," ")
        console.log(data)
        writeFn(data);
    }

})

function writeFn(data){
    fs.writeFile("a.txt",data,(err)=>{
        if(err){
            console.log(err.message)
        }
        else{
            console.log("Success")
        }
    })
}