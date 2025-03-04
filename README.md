# ⚠️ Repo Archive Notice

As of Jun 8, 2022, DCO (signed-off-by) in commits via web ui is now GA in GitHub.
For more information, see https://github.com/todogroup/gh-issues/issues/50#issuecomment-1148657762 and https://github.blog/changelog/2022-06-08-admins-can-require-sign-off-on-web-based-commits/

# DCO GitHub UI

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

This browser extension adds DCO Signed-off-by line to commits made with the GitHub browser UI.

## 📣 👀 🚧 Current News

This DCO feature is currently in private beta for native GitHub UI! 😮

Follow and contribute to this issue for updates https://github.com/todogroup/gh-issues/issues/50
Once this feature is GA natively in GitHub UI, this extension will be deprecated and this repo will be archived 🤞🙂

## Install

### Chrome

In the Chrome web store [search for "dco"](https://chrome.google.com/webstore/search/dco), or go to [the extension page](https://chrome.google.com/webstore/detail/dco-github-ui/onhgmjhnaeipfgacbglaphlmllkpoijo), and click "Add to Chrome":

![Chrome webstore screenshot](images/screenshot-chrome-webstore.png)

### Firefox

In Firefox Add-ons, [search for "dco"](https://addons.mozilla.org/en-US/firefox/search/?q=dco), or go to [the extension page](https://addons.mozilla.org/en-US/firefox/addon/scott-rigby/), and click "+ Add to Firefox":

![Firefox add-ons screenshot](images/screenshot-firefox-addons.png)

## Configure

Add your full DCO signoff line in the extension options:

![options screenshot](images/screenshot-options.png)

Your signoff should now prepopulate in the GitHub UI commit optional extended description textarea:

![web screenshot](images/screenshot-web.png)

## What is DCO?

See `git help commit`:

```
-s, --signoff
    Add Signed-off-by line by the committer at the end of the commit log
    message. The meaning of a signoff depends on the project, but it typically
    certifies that committer has the rights to submit this work under the same
    license and agrees to a Developer Certificate of Origin (see
    http://developercertificate.org/ for more information).
```

## Related

For CLI git, see [this gist](https://gist.github.com/scottrigby/0c043c0bfbbdb5949e2d824fc3adeaa4).

## Contributing

- Participation is governed by a [Contributor Covenant Code of Conduct](./CODE_OF_CONDUCT.md)
- Ensure pull request commits contain [DCO signoff](#what-is-dco)
- Thank you!
