"use strict";

// ==UserScript==
// @name        Wide GitHub
// @namespace   https://github.com/xthexder/wide-github
// @description Change all GitHub repository and gist pages to be full width and dynamically sized.
// @author      xthexder
// @copyright   2013-2023, xthexder (https://github.com/xthexder)
// @contributor Jason Frey (https://github.com/Fryguy)
// @contributor Marti Martz (https://github.com/Martii)
// @contributor Paul "Joey" Clark (https://github.com/joeytwiddle)
// @contributor Robert Laverty (https://github.com/roblav96)
// @contributor Amir Meimari (https://github.com/amirmeimari)
// @license     MIT; https://raw.githubusercontent.com/xthexder/wide-github/master/LICENSE
// @version     1.6.5
// @icon        https://raw.githubusercontent.com/xthexder/wide-github/master/icons/icon.png
// @homepageURL https://github.com/xthexder/wide-github
// @supportURL  https://github.com/xthexder/wide-github/issues
// @match       https://github.com/*
// @match       https://gist.github.com/*
// @grant       none
// ==/UserScript==

var styleSheet = "" +
"body:not(.wgh-disabled) .application-main .container-xl {" +
  "max-width: none !important;" +
"}" +
"body:not(.wgh-disabled) .application-main .container-lg  {" +
  "max-width: none !important;" +
  "margin-left: 0px !important;" +
"}" +

// New github repository react divs (2023)
"body:not(.wgh-disabled) .react-repos-overview-margin {" +
  "margin-right: 0;" +
"}" +
"body:not(.wgh-disabled) .Layout-main div[style=\"--sticky-pane-height: 100vh;\"] > div[class^='Box-sc-'] > div[class^='Box-sc-'] > div[class^='Box-sc-'] > div[class^='Box-sc-']:nth-child(2) {" +
  "max-width: none;" +
"}" +
// Alternative match for above to handle JS-loaded vs full refresh pages
"body:not(.wgh-disabled) .Layout-main div[style=\"--sticky-pane-height:100vh\"] > div[class^='Box-sc-'] > div[class^='Box-sc-'] > div[class^='Box-sc-'] > div[class^='Box-sc-']:nth-child(2) {" +
  "max-width: none;" +
"}" +
"body:not(.wgh-disabled) .Layout-main div[data-selector=\"repos-split-pane-content\"] {" +
  "max-width: none;" +
"}" +

// Commit History page
"body:not(.wgh-disabled) #js-repo-pjax-container div[style=\"--sticky-pane-height: 100vh;\"] > div[class^='Box-sc-']:first-child {" +
  "max-width: none;" +
"}" +
// Your Branches page
"body:not(.wgh-disabled) #js-repo-pjax-container div[style=\"--sticky-pane-height:100vh\"] > div[class^='Box-sc-']:first-child {" +
  "max-width: none;" +
"}" +

// Issue list Assignee alignment
"body:not(.wgh-disabled) #js-repo-pjax-container .js-issue-row .text-right {" +
  "max-width: 303px !important;" +
"}" +

"";

(function () {
  var s = document.createElement('style');
  s.type = "text/css";
  s.innerHTML = styleSheet;
  (document.head || document.documentElement).appendChild(s);
})();
