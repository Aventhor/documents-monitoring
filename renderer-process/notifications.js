const { remote } = require('electron');
const fs = require('fs');
window.$ = window.jQuery = require('jquery');


$.ajax({
    url: 'sections/notifications.html',
    type: 'GET',
    dataType: 'html',
    success: res => {
        $('.container-after-titlebar').append(res);
    }
}).done(console.log('loaded notifications'))

$(document).on('click', '.notifications-button', () => {
    openModal();
})

$(document).on('click', '.close-notifications-button', () => {
    closeModal();
})


function openModal() {
    $('.notifications').addClass('is-shown');
}

function closeModal() {
    $('.notifications').removeClass('is-shown');
}