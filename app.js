// let fs = require('fs')

// let path = __dirname + '/random.txt'
// console.log(path);
// fs.writeFile(path, "learning node.js", (err) => {
//   if (err) {
//     console.error('Error writing to file:', err)
//   }
//   else {
//     console.log("file created")
//   }
// });


// let fs = require('fs/promises');
// let path = __dirname + '/dat.txt';
 
// fs.writeFile(path, "learning file system using promises")
// .then(()=>{
//   console.log("file created successfully.....");
// })
// .catch((err)=>{
//   console.error (err);
// });




// let fs = require('fs');
// let path = __dirname + '/dat.txt';
// fs.readFile(path,(data,err)=>{
//   if(err){
//     console.error(err);
//   }
//   else{
//     console.log(data.toString());
//     console.log("Buffer form is because Node.js reads files in binary format by default. The toString() method is used to convert the buffer to a string.");
//   }
// });

// let fs = require('fs/promises');
// let path = __dirname + '/dat.txt';
// fs.readFile(path)
// .then((data)=>{
//   console.log(data.toString());
// })
// .catch((err)=>{
//   console.error(err);
// }); 

// Appending in existing file


// let fs = require('fs');
// let path = __dirname + '/dat.txt';
// fs.appendFile(path, "\nlearning node.js and appending some data in it", (err) => {
//   if (err) {
//     console.error('Error writing to file:', err)
//   }
//   else {
//     console.log("file created")
//   }
// });



let fs = require('fs/promises');
let path = __dirname + '/dat.txt';
 
fs.appendFile(path, "\nThis line is added through promise code")
.then(()=>{
  console.log("file appended successfully.....");
})
.catch((err)=>{
  console.error (err);
});