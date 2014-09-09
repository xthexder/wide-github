(function () {
  "use strict";

// ==UserScript==
// @name        Wide Github
// @namespace   https://github.com/xthexder/wide-github
// @description This plugin changes all github repository pages to be full width and dynamically sized.
// @author      xthexder
// @copyright   2013+, xthexder (https://github.com/xthexder)
// @contributor Jason Frey (https://github.com/Fryguy)
// @contributor Marti Martz (https://github.com/Martii)
// @license     MIT License; http://opensource.org/licenses/mit-license.php
// @version     1.0.9
// @icon        https://raw.githubusercontent.com/xthexder/wide-github/master/icon.png
// @homepageURL https://github.com/xthexder/wide-github
// @supportURL  https://github.com/xthexder/wide-github/issues
// @include     *github.com*
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
        "float: none !important;" +
      "}" +
      ".repository-content .discussion-item-body .meta:after {" + // Diff / code comments
        "clear:left !important;" +
      "}" +
      ".repository-content .inline-comments .comment-holder {" +
        "max-width:none !important;" +
      "}" +
      ".repository-content .inline-comments .inline-comment-form {" +
        "max-width:none !important;" +
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

      // Repository settings tabs
      ".repository-content #repo-settings {" +
        "margin-right:235px;" +
      "}" +
      ".repository-content .repo-settings-content {" +
        "margin-right:-235px !important;" +
        "margin-left:auto !important;" +
        "width:100% !important;" +
      "}" +

      // Repository pulse page
      ".repository-content .overall-summary .graphs {" + // Overview PR / Issue graphs
        "display:table;" +
        "width:100%;" +
      "}" +
      ".repository-content .overall-summary .graphs .graph {" +
        "border-left:1px solid #EEEEEE;" +
        "width:50% !important;" +
      "}" +
      ".repository-content .overall-summary .graphs .graph:first-child {" +
        "border-right:none !important;" +
      "}" +
      ".repository-content .overall-summary .summary-stats {" + // Overview PR / Issue counts
        "display:table;" +
        "width:100%;" +
      "}" +
      ".repository-content .overall-summary .summary-stats li {" +
        "width:25% !important;" +
      "}" +
      ".repository-content .authors-and-code .section {" + // Contributors bar graph
        "width:50%;" +
      "}" +
      ".repository-content .authors-and-code .section svg {" +
        "width:100%;" +
      "}" +

      // Repository graph page
      ".repository-content .capped-card {" + // Graph cards on contributors / graph list
        "margin:10px 10px 0 0 !important;" +
      "}" +
        ".repository-content .traffic-graph-stats:after {" + // Traffic view / visitor count
        "content:' ';" +
        "display:table;" +
        "clear:both;" +
      "}" +
      ".repository-content .traffic-graph-stats .col {" +
        "display:block;" +
        "float:left;" +
        "width:50%;" +
      "}" +
      ".repository-content #top-lists .col {" + // Traffic top domains / content
        "display:block;" +
        "float:left;" +
        "width:50%;" +
      "}" +
      ".repository-content #top-lists .col .capped-box {" +
        "width:100% !important;" +
      "}" +
      "";
    (document.head || document.documentElement).appendChild(s);
  }

})();
