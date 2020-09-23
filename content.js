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
        function appendSignoff(e) {
            if (e.value !== '') {
                // Don't append if the last line is already the same signoff
                s = e.value.split('\n')
                lastLine = s[s.length-1]
                if (lastLine !== signoff) {
                    e.value += '\n\n' + signoff
                }
            } else {
                e.value = signoff
            }
        }
        // Standard commit message
        cdt = document.getElementById('commit-description-textarea')
        if (cdt) {
            appendSignoff(cdt)
        }
        // Suggested changes commit message
        // ref: https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/incorporating-feedback-in-your-pull-request
        document.getElementsByName('commit_message').forEach(appendSignoff);
    }
});
