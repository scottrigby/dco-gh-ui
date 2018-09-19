// Note we use a content script instead of a background script because:
// > Background scripts can access all the WebExtension JavaScript APIs, but
// they can't directly access the content of web pages. So if your extension
// needs to do that, you need content scripts.
// See https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts
chrome.storage.local.get({
    signoff: ''
}, function (items) {
    document.getElementById('commit-description-textarea').value = items.signoff;
});
