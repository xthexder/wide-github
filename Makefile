
all: js css chrome

css:
	node makecss.js

js:
	node makejs.js

chrome:
	zip build/wide-github.tmp.zip LICENSE manifest.json background.js \
		wide-github.css wide-github-toggle.js \
		icons/icon.png icons/icon-disabled.png \
		icons/icon32.png icons/icon48.png icons/icon128.png
	mv build/wide-github.tmp.zip build/wide-github.zip

clean:
	rm -f build/wide-github.zip

clean-all: clean
	rm -f build/wide-github.user.js
	rm -f build/wide-github.user.css
