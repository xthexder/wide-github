"use strict";

var fs = require('fs');

var manifest = JSON.parse(fs.readFileSync('manifest.json'));

var header = "" +
"\"use strict\";\n" +
"\n" +
"// ==UserScript==\n" +
"// @name        " + manifest["name"] + "\n" +
"// @namespace   https://github.com/xthexder/wide-github\n" +
"// @description " + manifest["description"] + "\n" +
"// @author      xthexder\n" +
"// @copyright   2013+, xthexder (https://github.com/xthexder)\n" +
"// @contributor Jason Frey (https://github.com/Fryguy)\n" +
"// @contributor Marti Martz (https://github.com/Martii)\n" +
"// @contributor Paul \"Joey\" Clark (https://github.com/joeytwiddle)\n" +
"// @contributor Robert Laverty (https://github.com/roblav96)\n" +
"// @contributor Amir Meimari (https://github.com/amirmeimari)\n" +
"// @license     MIT; https://raw.githubusercontent.com/xthexder/wide-github/master/LICENSE\n" +
"// @version     " + manifest["version"] + "\n" +
"// @icon        https://raw.githubusercontent.com/xthexder/wide-github/master/icon.png\n" +
"// @homepageURL https://github.com/xthexder/wide-github\n" +
"// @supportURL  https://github.com/xthexder/wide-github/issues\n" +
"// @include     *github.com*\n" +
"// @grant       none\n" +
"// ==/UserScript==\n" +
"\n" +
"var styleSheet = \"\" +\n" +
"";

var footer = "" +
"\"\";\n" +
"\n" +
"(function () {\n" +
"  var s = document.createElement('style');\n" +
"  s.type = \"text/css\";\n" +
"  s.innerHTML = styleSheet;\n" +
"  (document.head || document.documentElement).appendChild(s);\n" +
"})();\n" +
"";

var styleSheet = fs.readFileSync('wide-github.css');
var lines = styleSheet.toString().split("\n");

var output = header;
for (var i = 0; i < lines.length; i++) {
	lines[i] = lines[i].trimRight();
	if (lines[i] !== "") {
		lines[i] = lines[i].replace(/^( *)([^\/])/, "$1\"$2");
		if (!lines[i].match(/^ *\/\*/)) lines[i] = lines[i].replace(/( *\/\*[^\*]*\*\/)?$/, "\" +$1");
		lines[i] = lines[i].replace(/\/\*(.*)\*\/$/, "//$1").replace(/ +$/, "");
		output += lines[i];
	}
	output += "\n";
}
output += footer;

fs.writeFileSync("build/wide-github.user.js", output);
