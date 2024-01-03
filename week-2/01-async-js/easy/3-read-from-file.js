const fs = require("fs");
fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(data)
    }
})

//expensive operation

let counter=0;
for(let i =0; i<100000000; i++){
    counter++;
}

console.log(counter);