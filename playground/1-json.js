const fs = require('fs')

const book = {
    title: 'Web Development',
    author: 'Mary Grace Delos Reyes'
}

const bookJSON = JSON.stringify(book)
fs.writeFileSync('1-json.json', bookJSON)
