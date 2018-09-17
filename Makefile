TMP := $(shell mktemp -d)

# To keep the package as small as possible, exclude files that may be valuable
# for this repo, but unnecessary for the Chrome extension.
# The `hub release` command makes file asset attachment to GitHub releases easy.
package: check-tag
	@zip -r $(TMP)/$(TAG)-package.zip . -x \*.git\* \*images/icon.\* \*images/screenshot\* \*README\*
	@hub release create $(TAG) -a "$(TMP)/$(TAG)-package.zip#Extension package" -m "$(TAG)"

check-tag:
ifndef TAG
  $(error TAG is undefined)
endif

.PHONY: package check-tag
