const fs = require('fs')

console.log(fs.readFileSync('file2.txt').toString());

// fs.readFile('file.txt', 'utf8', (err, data) => {
//     console.log(err, data);
// })

// console.log("Finished");

fs.writeFile('file2.txt', "This the file", () => {
    console.log("Done");
})