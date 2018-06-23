
all: js css chrome

css:
	node makecss.js

js:
	node makejs.js

chrome:
	zip build/wide-github.zip LICENSE manifest.json wide-github.css icon.png

clean:
	rm -f build/wide-github.zip

clean-all: clean
	rm -f build/wide-github.user.js
	rm -f build/wide-github.user.css
