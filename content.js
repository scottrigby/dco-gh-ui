chrome.storage.sync.get({
    signoff: ''
}, function (items) {
    document.getElementById('commit-description-textarea').value = items.signoff;
});
