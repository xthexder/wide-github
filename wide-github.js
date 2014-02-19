// ==UserScript==
// @name        Wide Github
// @namespace   https://github.com/xthexder/wide-github
// @include     *github.com*
// @version     1.0.5
// @grant       none
// ==/UserScript==

if (document.getElementById('js-repo-pjax-container')) {
  var s = document.createElement('style');
  s.type = "text/css";
  s.innerHTML = ".container {" +
      "width:90% !important;" +
      "min-width:980px;" +
    "}" +
    ".repository-content {" +
      "width:100% !important;" +
      "margin-right: auto !important;" +
    "}" +

    // Repository sidebar
    ".repository-with-sidebar {" +
      "margin-left:60px;" +
    "}" +
    ".repository-with-sidebar.with-full-navigation {" +
      "margin-left:190px;" +
    "}" +
    ".repository-with-sidebar .repository-content {" +
      "margin-left:-60px;" +
    "}" +
    ".repository-with-sidebar.with-full-navigation .repository-content {" +
      "margin-left:-190px;" +
    "}" +

    // Repository settings tabs
    ".repository-content #repo-settings {" +
      "margin-right:235px;" +
    "}" +
    ".repository-content .repo-settings-content {" +
      "margin-right:-235px !important;" +
      "margin-left:auto !important;" +
      "width:100% !important;" +
    "}" +

    // New Release form
    ".repository-content .new-release {" +
      "margin-left:270px;" +
    "}" +
    ".repository-content .new-release .column.main {" +
      "margin-left:-270px !important;" +
      "margin-right:auto !important;" +
      "width:100% !important;" +
    "}" +

    // Repository Issues
    ".repository-content .discussion-timeline-cols {" + // New Issue form
      "margin-left:200px;" +
    "}" +
    ".repository-content .discussion-timeline-cols .column.main {" +
      "margin-left:-200px !important;" +
      "margin-right:auto !important;" +
      "width:100% !important;" +
    "}" +
    ".repository-content .discussion-timeline {" + // Issue body
      "margin-right:160px;" +
      "width:auto !important;" +
    "}" +
    ".repository-content .inline-coomments .comment-holder {" + // Diff / code comments
      "max-width:none !important;" +
    "}" +
    ".repository-content .inline-coomments .inline-comment-form {" +
      "max-width:none !important;" +
    "}";
  (document.head || document.documentElement).appendChild(s);
}
