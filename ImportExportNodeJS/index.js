console.log("Hello world");

let data=require("./MyLib")
let os=require("os")
console.log(data);
let {add}=data;
console.log("result=",add(10,20));


// fs,os,url,http and etc
// console.log(os.cpus().length);
// console.log(os.cpus()[0].model);