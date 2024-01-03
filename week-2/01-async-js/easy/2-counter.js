let a = 1
const timer = () =>{
    console.clear();
    console.log(`${a}`);
    a++;
    setTimeout(timer,1000);
}

timer()