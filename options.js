// Saves options to chrome.storage
function save_options() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    chrome.storage.local.set({
        name: name,
        email: email
    }, function () {
        // Update status to let user know options were saved.
        var status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function () {
            status.textContent = '';
        }, 750);
    });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.local.get({
        name: '',
        email: ''
    }, function (items) {
        document.getElementById('name').value = items.name;
        document.getElementById('email').value = items.email;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
