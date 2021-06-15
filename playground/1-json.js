const fs = require('fs')

// const book = {
//     title: 'Web Development',
//     author: 'Mary Grace Delos Reyes'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const dataBuffer =  fs.readFileSync('1-json.json') //Binay data 
// const dataJSON = dataBuffer.toString() // standard string
// const data = JSON.parse(dataJSON) // object 
// console.log(data.title) // access properties


const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const user = JSON.parse(dataJSON)

user.name = "grace"
user.age = 30

const userJSON  = JSON.stringify(user)

fs.writeFileSync('1-json.json',userJSON)

