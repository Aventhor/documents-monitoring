const fs = require('fs').promises;
const { ipcMain, } = require('electron');

const DB_PATH = `channel.json`


ipcMain.on('channels-load', (event) => {
    loadChannelsList().then(() => {
        logger.info('fddf')
        event.sender.send('channels-load', getAllChannels())
    })
})

async function loadChannelsList() {
    result = await checkDBFile()
    if (result) {
        ch = JSON.parse(result)
        clearChannelsList();
        Array.from(ch['channels']).forEach((item) => {
            addChannel(item)
        })
    }
}

function dataToMap(data) {
    return new Map(JSON.parse(data));
}

function checkDBFile() {
    return fs.access(DB_PATH, fs.R_OK | fs.W_OK)
        .then(() => {
            console.log('DB file exist. Reading...')
            return readDBFile()
        })
        .catch(() => {
            console.log('DB file not exist. Creating...')
            return createDBFile()
        })

}

writeDBFile = function (data) {
    data = '{ "channels": ' + JSON.stringify(data, null, 2) + '}'
    return fs.writeFile(DB_PATH, data, 'utf8')
        .then(() => console.log('DB File is updated!'))
        .catch(() => console.log('Error on updating DB File'))
}

function readDBFile() {
    return fs.readFile(DB_PATH, 'utf8')
        .then(jsonString => {
            return jsonString
        }).catch(
            () => console.log('error on reading db file')
        )
}


function createDBFile() {
    return fs.writeFile(DB_PATH, '{ "channels": [] }')
        .then(() => console.log('DB File is created!'))
        .catch(() => console.log('error on creating DB File'))
}