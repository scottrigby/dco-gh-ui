# DCO GitHub UI

This Chrome extension adds DCO Signed-off-by line to commits made with the GitHub browser UI.

For CLI git, see [this gist](https://gist.github.com/scottrigby/0c043c0bfbbdb5949e2d824fc3adeaa4).

## Configure

Add your full DCO signoff line in the extension options:

![options screenshot](images/screenshot-options.png)

Your signoff should now prepopulate in the GitHub UI commit optional extended description textarea:

![web screenshot](images/screenshot-web.png)

## What is DCO?

See `git help commit`:

```
-s, --signoff
    Add Signed-off-by line by the committer at the end of the commit log message. The meaning of a signoff depends on the project, but it typically certifies that committer has
    the rights to submit this work under the same license and agrees to a Developer Certificate of Origin (see http://developercertificate.org/ for more information).
```

## Chrome extension packaging

To keep the package as small as possible, exclude files that may be valuable for this repo, but unnecessary for the Chrome extension.

```sh
zip -r ../${TAG}-package.zip . -x \*.git\* \*images/icon.\* \*images/screenshot\* \*README\*
hub release create $TAG -a "../${TAG}-package#Extension package"
```
