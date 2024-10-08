"use strict";

// ==UserScript==
// @name        Wide GitHub
// @namespace   https://github.com/xthexder/wide-github
// @description Change all GitHub repository and gist pages to be full width and dynamically sized.
// @author      xthexder
// @copyright   2013-2024, xthexder (https://github.com/xthexder)
// @contributor Jason Frey (https://github.com/Fryguy)
// @contributor Marti Martz (https://github.com/Martii)
// @contributor Paul "Joey" Clark (https://github.com/joeytwiddle)
// @contributor Robert Laverty (https://github.com/roblav96)
// @contributor Amir Meimari (https://github.com/amirmeimari)
// @license     MIT; https://raw.githubusercontent.com/xthexder/wide-github/master/LICENSE
// @version     1.6.6
// @icon        https://raw.githubusercontent.com/xthexder/wide-github/master/icons/icon.png
// @homepageURL https://github.com/xthexder/wide-github
// @supportURL  https://github.com/xthexder/wide-github/issues
// @match       https://github.com/*
// @match       https://gist.github.com/*
// @grant       none
// ==/UserScript==

var styleSheet = "" +
// General full-page container
"body:not(.wgh-disabled) .application-main .container-xl {" +
  "max-width: none !important;" +
"}" +
// General content sub-container
"body:not(.wgh-disabled) .application-main .container-lg  {" +
  "max-width: none !important;" +
  "margin-left: 0px !important;" +
"}" +

// Repository home sidebar
"body:not(.wgh-disabled) .react-repos-overview-margin {" +
  "margin-right: 0;" +
"}" +

// Commit History and Branches page
"body:not(.wgh-disabled) #js-repo-pjax-container div[style^=\"--sticky-pane-height:\"] > div[class^='Box-sc-']:first-child {" +
  "max-width: none;" +
"}" +

// Repository Tags page
"body:not(.wgh-disabled) .application-main .col-11  {" +
  "width: 100%;" +
"}" +

// Issue list Assignee alignment
"body:not(.wgh-disabled) #js-repo-pjax-container .js-issue-row .text-right {" +
  "max-width: 303px !important;" +
"}" +

// New React layout (2024)

// Issues list page
"body:not(.wgh-disabled) .application-main div[style^=\"--sticky-pane-height:\"] > div[class^='Box-sc-'] > div[class^='Box-sc-'] > div[class^='Box-sc-'] > div[class^='Box-sc-']:nth-child(2) > div[class^='Box-sc-'] {" +
  "max-width: none;" +
"}" +

// Issue page
"body:not(.wgh-disabled) #js-repo-pjax-container div[data-target=\"react-app.reactRoot\"] > div[class^='Box-sc-'] > div[class^='Box-sc-'] > div[class^='Box-sc-'] > div[class^='Box-sc-'] {" +
  "max-width: none;" +
"}" +

"";

(function () {
  var s = document.createElement('style');
  s.type = "text/css";
  s.innerHTML = styleSheet;
  (document.head || document.documentElement).appendChild(s);
})();
