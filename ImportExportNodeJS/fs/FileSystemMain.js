const fs = require('fs');

// Synchronous
// const data = fs.readFileSync('fs/users.json', 'utf8');
// const data = fs.readFileSync('fs/bigdata.txt', 'utf8');
// console.log(data);

// console.log("Hello reading finished!");

// Asynchronous
// try {
//     // fs.readFile('fs/users.json', 'utf8', (err, data) => {
//     fs.readFile('fs/bigdata.txt', 'utf8', (err, data) => {
//         if (err) throw err;
//         console.log(data);
//     });
// }
// catch (error) {
//     console.log("Error Occured : " + error);
// }
// console.log("Hello reading finished!");

// let user = {
//     name: "Aman Tiwari",
//     age: 25,
//     skills: ["MEAN", "MERN", "JAVA FSD", "etc"]
// }

// Asynchronous
// fs.writeFile('fs/users.json', JSON.stringify(user), (err) => {
//     if (err) throw err;
//     console.log('File written successfully');
// });

// fs.readFile('fs/users.json', 'utf8', (err, data) => {
//     if (err) throw err;
//     let newUser=JSON.parse(data);
//     console.log(newUser);
//     console.log(typeof newUser);
// });

// Synchronous
// fs.writeFileSync('users2.json', 'Hello, world!');
// console.log('File written successfully');

// fs.appendFile('fs/users.json', ',{"name":"Raj2"}', (err) => {
//     if (err) throw err;
//     console.log('Content appended');
// });

// fs.unlink('fs/users.json', (err) => {
//     if (err) throw err;
//     console.log('File deleted');
// });

//cut
// fs.rename('fs/OldName.txt', 'newName.txt', (err) => {
//     if (err) throw err;
//     console.log('File renamed');
// });

// fs.rename('fs/OldName.txt', 'fs/newName.txt', (err) => {
//     if (err) throw err;
//     console.log('File renamed');
// });

// fs.watch('fs/users.json', (eventType, filename) => {
//     console.log(`Event type: ${eventType}`);
//     if (filename) {
//         console.log(`File affected: ${filename}`);
//     }
// });
// console.log("Watching started...");


// Creating a directory
// fs.mkdir('os', (err) => {
//     if (err) throw err;
//     console.log('Directory created');
// });

// Reading a directory
// fs.readdir('.', (err, files) => {
//     if (err) throw err;
//     console.log(files);
// });

// Deleting a directory
// fs.rmdir('os', (err) => {
//     if (err) throw err;
//     console.log('Directory deleted');
// });


// fs.stat('fs/users.json', (err, stats) => {
// fs.stat('fs', (err, stats) => {
//     if (err) throw err;
//     console.log(`File Size: ${stats.size} bytes `);
//     console.log(`Is File: ${stats.isFile()}`);
//     console.log(`Is Directory: ${stats.isDirectory()}`);
// });

const fspromise = require('fs/promises');

async function readFile() {
   try {
       const data = await fspromise.readFile('fs/users.json', 'utf8');
       console.log(data);
   } catch (err) {
       console.error(err);
   }
}

readFile();
