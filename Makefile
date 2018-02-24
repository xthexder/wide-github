
all: js chrome

js:
	node make.js

chrome:
	zip wide-github.zip LICENSE manifest.json wide-github.css icon.png background.js insert_css.js jquery-3.3.1.min.js

clean:
	rm -f wide-github.zip

clean-all: clean
	rm -f wide-github.user.js
