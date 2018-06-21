
all: js css chrome

css:
	node makecss.js

js:
	node makejs.js

chrome:
	zip wide-github.zip LICENSE manifest.json wide-github.css icon.png

clean:
	rm -f wide-github.zip

clean-all: clean
	rm -f wide-github.user.js
	rm -f wide-github.user.css
