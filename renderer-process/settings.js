const fs = require('fs');
window.$ = window.jQuery = require('jquery');


$.ajax({
    url: 'sections/settings.html',
    type: 'GET',
    dataType: 'html',
    success: res => {
        $('.container-after-titlebar').append(res);
    }
}).done(console.log('loaded settings'))

$(document).on('click', '.settings-button', () => {
    openModal();
})

$(document).on('click', '.close-settings-button', () => {
    closeModal();
})


function openModal() {
    $('.settings').addClass('is-shown');
}

function closeModal() {
    $('.settings').removeClass('is-shown');
}