const fs = require('fs');
let data = "helllo there"
fs.writeFile("a.txt",data,(err)=>{
    if(err){
        console.log(err.message);
}
else{
    console.log("success");
}}
    )