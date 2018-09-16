// Saves options to chrome.storage
function save_options() {
    var signoff = document.getElementById('signoff').value;
    chrome.storage.sync.set({
        signoff: signoff
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
    chrome.storage.sync.get({
        signoff: ''
    }, function (items) {
        document.getElementById('signoff').value = items.signoff;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
