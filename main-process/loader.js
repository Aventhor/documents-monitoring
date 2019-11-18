const fs = require('fs')

DB_PATH = `channels.json`

loadChannelsList()
function checkDBFile() {
    fs.access(DB_PATH, fs.F_OK, (err) => {
        if (err) {
            console.log(err)
            createDBFile();
            return
        }
        readDBFile()
    })
}

function readDBFile() {
    fs.readFile(DB_PATH, 'utf8', (err, jsonString) => {
        if (err) {
            console.log(err)
            return
        }
        return jsonString;
    })
}

function loadChannelsList() {
    ch = checkDBFile()
    console.log(ch)
    Array.from(ch).forEach((item) => {
        console.log(item.name)
    })
}

function createDBFile() {
    fs.writeFile(DB_PATH, '{ "channels": [] }', (err) => {
        if (err) {
            console.log(err)
            return
        }
    })
}