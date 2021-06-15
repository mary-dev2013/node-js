const fs = require('fs')

// const book = {
//     title: 'Web Development',
//     author: 'Mary Grace Delos Reyes'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

const dataBuffer =  fs.readFileSync('1-json.json') //Binay data 
const dataJSON = dataBuffer.toString() // standard string
const data = JSON.parse(dataJSON) // object 
console.log(data.title) // access properties
