const { ipcRenderer } = require('electron');
const fs = require('fs');
window.$ = window.jQuery = require('jquery');

$.ajax({
    url: 'sections/new-channel.html',
    type: 'GET',
    dataType: 'html',
    success: res => {
        $('.container-after-titlebar').append(res);
    }
}).done(console.log('loaded new-channel'))

$(document).on('click', '.add-button', () => {
    openModal();
})

$(document).on('click', '.accept-add-button', () => {
    createChannel(
        $('input[name="channel-name"]').val(),
        $('span[name="new-channel-in-folder-path"]').text(),
        $('span[name="new-channel-out-folder-path"]').text()
    );
})

$(document).on('click', '.close-add-button', () => {
    closeModal();
})


$(document).on('click', "button[name='new-channel-in-folder']", (event) => {
    ipcRenderer.send('open-file-dialog', 'in');
})

$(document).on('click', "button[name='new-channel-out-folder']", (event) => {
    ipcRenderer.send('open-file-dialog', 'out');
})

ipcRenderer.on('selected-in-directory', (event, path) => {
    $('span[name="new-channel-in-folder-path"]').text(path);
})

ipcRenderer.on('selected-out-directory', (event, path) => {
    $('span[name="new-channel-out-folder-path"]').text(path);
})

function createChannel(name, inFolder, outFolder) {
    if (name && inFolder && outFolder) {
        channel = {
            name: name,
            inFolder: inFolder,
            outFolder: outFolder
        }
        ipcRenderer.send('add-channel', channel);
        closeModal();
    }
}

function openModal() {
    $('.new-channel').addClass('is-shown');
}

function closeModal() {
    $('.new-channel').removeClass('is-shown');
}