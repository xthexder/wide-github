"use strict";

// ==UserScript==
// @name        Wide Github
// @namespace   https://github.com/xthexder/wide-github
// @description Change all Github repository and gist pages to be full width and dynamically sized.
// @author      xthexder
// @copyright   2013+, xthexder (https://github.com/xthexder)
// @contributor Jason Frey (https://github.com/Fryguy)
// @contributor Marti Martz (https://github.com/Martii)
// @contributor Paul "Joey" Clark (https://github.com/joeytwiddle)
// @license     MIT; https://raw.githubusercontent.com/xthexder/wide-github/master/LICENSE
// @version     1.3.0
// @icon        https://raw.githubusercontent.com/xthexder/wide-github/master/icon.png
// @homepageURL https://github.com/xthexder/wide-github
// @supportURL  https://github.com/xthexder/wide-github/issues
// @include     *github.com*
// @grant       none
// ==/UserScript==

var styleSheet = "" +
"header .container," +
"header .container-lg {" +
  "max-width: none !important;" +
"}" +
".application-main .container {" +
  "width: auto !important;" +
  "padding-left: 16px !important;" +
  "padding-right: 16px !important;" +
  "margin-left: 0px !important;" +
  "min-width: 980px;" +
"}" +
".application-main .container-lg {" +
  "max-width: none !important;" +
  "margin-left: 0px !important;" +
"}" +
".footer.container-lg {" +
  "max-width: none !important;" +
  "margin-left: 0px !important;" +
"}" +

// New PR split diff
".full-width .new-pr-form {" +
  "max-width: none !important;" +
"}" +
// Floating PR toolbar
".pr-toolbar {" +
  "margin-left: -16px !important;" +
  "margin-right: -16px !important;" +
  "padding-left: 16px !important;" +
  "padding-right: 16px !important;" +
"}" +

// Repository Issues
"#js-repo-pjax-container .repository-content .discussion-timeline {" +  // Issue body
  "margin-left: -220px;" +
  "padding-left: 220px;" +
  "width: 100% !important;" +
"}" +
"#js-repo-pjax-container .repository-content .discussion-timeline::before {" + // The vertical line running through the commit list on PRs and issues
  "margin-left: 220px;" +
"}" +
".repository-content .discussion-sidebar {" +
  "width: 200px !important;" +
"}" +
".repository-content .timeline-new-comment {" + // New Issue / issue comment form
  "max-width: 100% !important;" +
"}" +
".repository-content .inline-comments .comment-holder {" + // Diff / code comments
  "max-width: inherit !important;" +
"}" +
".repository-content .inline-comments .inline-comment-form-container {" +
  "max-width: inherit !important;" +
"}" +
".repository-content .inline-comments .inline-comment-form {" +
  "max-width: inherit !important;" +
"}" +

".repository-content #all_commit_comments .commit-comments-heading," +
".repository-content #all_commit_comments .comment-holder {" +
  "max-width: inherit !important;" +
"}" +

// Repository pulse page
".repository-content .authors-and-code .section {" + // Contributors bar graph
  "width: 50%;" +
  "height: 180px;" +
"}" +
".repository-content .authors-and-code .section svg {" +
  "height: 180px;" +
"}" +

// Repository graph page
".repository-content .capped-card {" + // Graph cards on contributors / graph list
  "margin:10px 10px 0 0 !important;" +
"}" +

// Gists
".gist-content-wrapper .container {" +
  "width: auto !important;" +
  "margin-left: 20px !important;" +
  "margin-right: 20px !important;" +
  "min-width: 980px;" +
"}" +
".gist-content-wrapper .container-lg {" +
  "max-width: none !important;" +
"}" +
".gist-content-wrapper .container-lg .h-card {" +
  "width: 253px !important;" +
"}" +

"";

(function () {
  var s = document.createElement('style');
  s.type = "text/css";
  s.innerHTML = styleSheet;
  (document.head || document.documentElement).appendChild(s);
})();
