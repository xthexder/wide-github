
all: js css chrome-extension mozilla-extension

css:
	node makecss.js

js:
	node makejs.js

chrome-extension:
	mkdir -p build/chrome/
	cp LICENSE build/chrome/LICENSE
	cp chrome/manifest.json build/chrome/manifest.json
	cp chrome/background.js build/chrome/background.js
	cp wide-github.css build/chrome/wide-github.css
	cp wide-github-toggle.js build/chrome/wide-github-toggle.js
	cp -rT icons build/chrome/icons/
	cd build/chrome/ && zip wide-github.tmp.zip *
	mv build/chrome/wide-github.tmp.zip build/wide-github-chrome.zip

mozilla-extension:
	mkdir -p build/mozilla/
	cp LICENSE build/mozilla/LICENSE
	cp mozilla/manifest.json build/mozilla/manifest.json
	cp mozilla/background.js build/mozilla/background.js
	cp wide-github.css build/mozilla/wide-github.css
	cp wide-github-toggle.js build/mozilla/wide-github-toggle.js
	cp -rT icons build/mozilla/icons/
	cd build/mozilla/ && zip wide-github.tmp.zip *
	mv build/mozilla/wide-github.tmp.zip build/wide-github-mozilla.zip

clean:
	rm -f build/wide-github.zip

clean-all: clean
	rm -f build/wide-github.user.js
	rm -f build/wide-github.user.css
