# To keep the package as small as possible, exclude files that may be valuable
# for this repo, but unnecessary for the Chrome extension.
# The `hub release` command makes file asset attachment to GitHub releases easy.
package: check-tag
	$(eval TMP := $(shell mktemp -d))
	@zip -r $(TMP)/$(TAG)-package.zip . -x \*.git\* \*images/icon.\* \*images/screenshot\* \*README\*
	@hub release create $(TAG) -a "$(TMP)/$(TAG)-package.zip#Extension package" -m "$(TAG)"
	rm -r $(TMP)

check-tag:
ifndef TAG
  $(error TAG is undefined)
endif

.PHONY: package check-tag
