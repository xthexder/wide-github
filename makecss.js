"use strict";

var fs = require('fs');

var manifest = JSON.parse(fs.readFileSync('manifest.json'));

var header = "" +
"/* ==UserStyle==\n" +
"@name         " + manifest["name"] + "\n" +
"@namespace    https://github.com/xthexder/wide-github\n" +
"@description  " + manifest["description"] + "\n" +
"@author       xthexder\n" +
"@copyright    2013+, xthexder (https://github.com/xthexder)\n" +
"@contributor  Jason Frey (https://github.com/Fryguy)\n" +
"@contributor  Marti Martz (https://github.com/Martii)\n" +
"@contributor  Paul \"Joey\" Clark (https://github.com/joeytwiddle)\n" +
"@license      " + manifest["licenses"][0].type + "; " + manifest["licenses"][0].url + "\n" +
"@version      " + manifest["version"] + "\n" +
"@homepageURL  https://github.com/xthexder/wide-github\n" +
"@supportURL   https://github.com/xthexder/wide-github/issues\n" +
"==/UserStyle== */\n" +
"\n" +
"@-moz-document regexp(\"^https://(?:gist\\\\.)?github\\\\.com/.*\") {\n" +
"\n";

var footer = "" +
"}\n"

var styleSheet = fs.readFileSync('wide-github.css');
var lines = styleSheet.toString().split("\n");

var output = header;
for (var i = 0; i < lines.length; i++) {
	lines[i] = lines[i].trimRight();
	if (lines[i] !== "") {
		output += "  " + lines[i]; // Indent
	}
	output += "\n";
}
output += footer;

fs.writeFileSync("build/wide-github.user.css", output);
