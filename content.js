// Note we use a content script instead of a background script because:
// > Background scripts can access all the WebExtension JavaScript APIs, but
// they can't directly access the content of web pages. So if your extension
// needs to do that, you need content scripts.
// See https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts
chrome.storage.local.get({
    name: '',
    email: ''
}, function (items) {
    if (items.name && items.email) {
        var signoff = "Signed-off-by: " + items.name + " <" + items.email + ">"
        // Standard commit message
        cdt = document.getElementById('commit-description-textarea')
        if (cdt) {
            // Add a newline separator only if text already exists
            sep = cdt.value == '' ? '' : "\n\n"
            // Append
            cdt.value += sep + signoff;
        }
        // Suggested changes commit message
        // ref: https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request
        document.getElementsByName('commit_message').forEach(function(v,i,o){
            sep = o[i].value == '' ? '' : "\n\n"
            o[i].value += sep + this
        }, signoff);
    }
});
