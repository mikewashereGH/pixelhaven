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
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Copied: ' + copyText);
});

document.getElementById('nav-home').addEventListener('click', function() {
    toggleSection('home');
});

document.getElementById('nav-rules').addEventListener('click', function() {
    toggleSection('rules');
});

document.getElementById('nav-discord').addEventListener('click', function() {
    toggleSection('discord');
});

function toggleSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(function(section) {
        section.style.display = section.id === sectionId ? 'block' : 'none';
    });
}