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
    ".repository-content .overall-summary .graphs:after {" + // Overview PR / Issue graphs
      "content:' ';" +
      "display:table;" +
      "clear:both;" +
    "}" +
    ".repository-content .overall-summary .graph {" +
      "display:block !important;" +
      "border-left:1px solid #EEEEEE;" +
      "float:left;" +
      "width:50% !important;" +
    "}" +
    ".repository-content .overall-summary .graph:first-child {" +
      "border-right:none !important;" +
    "}" +
    ".repository-content .overall-summary .summary-stats:after {" + // Overview PR / Issue counts
      "content:' ';" +
      "display:table;" +
      "clear:both;" +
    "}" +
    ".repository-content .overall-summary .summary-stats li {" +
      "display:block !important;" +
      "float:left;" +
      "width:25% !important;" +
    "}" +
    ".repository-content .authors-and-code .section {" + // Contributors bar graph
      "width:50% !important;" +
    "}" +
    ".repository-content .authors-and-code .section svg {" +
      "width:100% !important;" +
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
