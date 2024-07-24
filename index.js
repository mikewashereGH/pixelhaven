/*
    This code is the intellectual property of the owner.
    Unauthorized editing, removal, updating, adding, duplicating, selling, or reusing of this code is strictly prohibited.
*/

document.getElementById('copyButton').addEventListener('click', function() {
    var copyText = document.getElementById('ipaddresscopy').getAttribute('data-ip');
    var tempInput = document.createElement('textarea');
    tempInput.value = copyText;
    document.body.appendChild(tempInput);
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Copied: ' + copyText);
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        if (page.id === pageId) {
            page.style.display = 'block';
        } else {
            page.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    showPage('home');
});