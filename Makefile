
all: js css chrome

css:
	node makecss.js

js:
	node makejs.js

chrome:
	zip build/wide-github.zip LICENSE manifest.json background.js \
		wide-github.css wide-github-toggle.js icon.png icon-disabled.png

clean:
	rm -f build/wide-github.zip

clean-all: clean
	rm -f build/wide-github.user.js
	rm -f build/wide-github.user.css
