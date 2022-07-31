"use strict";

// ==UserScript==
// @name        Wide GitHub
// @namespace   https://github.com/xthexder/wide-github
// @description Change all GitHub repository and gist pages to be full width and dynamically sized.
// @author      xthexder
// @copyright   2013+, xthexder (https://github.com/xthexder)
// @contributor Jason Frey (https://github.com/Fryguy)
// @contributor Marti Martz (https://github.com/Martii)
// @contributor Paul "Joey" Clark (https://github.com/joeytwiddle)
// @contributor Robert Laverty (https://github.com/roblav96)
// @contributor Amir Meimari (https://github.com/amirmeimari)
// @license     MIT; https://raw.githubusercontent.com/xthexder/wide-github/master/LICENSE
// @version     1.5.0
// @icon        https://raw.githubusercontent.com/xthexder/wide-github/master/icons/icon.png
// @homepageURL https://github.com/xthexder/wide-github
// @supportURL  https://github.com/xthexder/wide-github/issues
// @match      *://github.com/*
// @grant       none
// ==/UserScript==

var styleSheet = "" +
"body:not(.wgh-disabled) .application-main .container {" +
  "width: auto !important;" +
  "padding-left: 16px !important;" +
  "padding-right: 16px !important;" +
  "margin-left: 0px !important;" +
  "min-width: 980px;" +
"}" +
"body:not(.wgh-disabled) .application-main .container-lg," +
"body:not(.wgh-disabled) .footer.container-lg {" +
  "max-width: none !important;" +
  "margin-left: 0px !important;" +
"}" +

// New github design
"body:not(.wgh-disabled) .application-main .container-xl {" +
  "max-width: none !important;" +
"}" +

// Floating PR toolbar
"body:not(.wgh-disabled) .pr-toolbar {" +
  "margin-left: -16px !important;" +
  "margin-right: -16px !important;" +
  "padding-left: 16px !important;" +
  "padding-right: 16px !important;" +
"}" +

// Repository Issues
"body:not(.wgh-disabled) #js-repo-pjax-container .repository-content .discussion-timeline {" +  // Issue body
  "width: 100% !important;" +
"}" +
"body:not(.wgh-disabled) .repository-content .timeline-new-comment {" + // New Issue / issue comment form
  "max-width: 100% !important;" +
"}" +
"body:not(.wgh-disabled) .repository-content .new-discussion-timeline .files-bucket > div {" + // New PR code diff
  "width: inherit !important;" +
  "left: auto !important;" +
  "right: auto !important;" +
  "margin-left: 0px !important;" +
  "margin-right: 0px !important;" +
  "padding-left: 0px !important;" +
  "padding-right: 0px !important;" +
"}" +
"body:not(.wgh-disabled) .repository-content .inline-comments .comment-holder," + // Diff / code comments
"body:not(.wgh-disabled) .repository-content .inline-comments .inline-comment-form-container," +
"body:not(.wgh-disabled) .repository-content .inline-comments .inline-comment-form," +
"body:not(.wgh-disabled) .repository-content #all_commit_comments .commit-comments-heading," +
"body:not(.wgh-disabled) .repository-content #all_commit_comments .comment-holder {" +
  "max-width: inherit !important;" +
"}" +
"body:not(.wgh-disabled) .repository-content .js-issue-row .col-3.text-right {" + // Issue list Assignee alignment
  "max-width: 288px !important;" +
"}" +

// Repository graph page
"body:not(.wgh-disabled) .repository-content .capped-card-content {" + // Graph cards on contributors / graph list
  "width: 100% !important;" +
"}" +

// New gist input field height
"body:not(.wgh-disabled) .gist-content .commit-create .CodeMirror {" +
  "min-height: 250px;" +
  "height: calc(100vh - 500px) !important;" +
"}" +

// Refined GitHub extension conflict fix
".refined-github > body:not(.wgh-disabled, .full-width, .enterprise) main > .hide-full-screen > * {" +
  "padding-left: 0px !important;" +
"}" +

"";

(function () {
  var s = document.createElement('style');
  s.type = "text/css";
  s.innerHTML = styleSheet;
  (document.head || document.documentElement).appendChild(s);
})();
