// ==UserScript==
// @name        Wide Github
// @namespace   https://github.com/xthexder/wide-github
// @include     *github.com*
// @version     1.0.2
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
      "float:none !important;" +
      "width:auto !important;" +
    "}" +
    ".repository-content .repository-meta:after {" +
      "clear:left !important;" +
    "}" +
    ".repository-with-sidebar .repository-content {" +
      "margin-right:68px;" +
    "}" +
    ".repository-with-sidebar.with-full-navigation .repository-content {" +
      "margin-right:200px;" +
    "}" +
    ".repository-content .discussion-timeline {" +
      "margin-right:120px;" +
      "width:auto !important;" +
    "}" +
    ".repository-content .column.main {" +
      "float:none !important;" +
      "width:auto !important;" +
      "margin-left:250px;" +
    "}" +
    ".repository-content .repo-settings-content .column.main .rule {" +
      "clear:none !important;" +
    "}" +
    ".repository-content .empty-repo .rule {" +
      "clear:none !important;" +
    "}" +
    ".repository-content .repo-settings-content {" +
      "float:none !important;" +
      "width:auto !important;" +
      "margin-left:225px;" +
    "}" +
    ".repository-content .pulls-list-group .list-group-item:after {" +
      "clear:none !important;" +
    "}" +
    ".repository-content .header-with-actions .select-menu {" +
      "clear:left !important;" +
    "}" +
    ".repository-content .branch-infobar:after {" +
      "clear:left !important;" +
    "}" +
    ".repository-content .issue-head:after {" +
      "clear:left !important;" +
    "}" +
    ".repository-content .commit-meta:after {" +
      "clear:left !important;" +
    "}" +
    ".repository-content #toc .content {" +
      "clear:left !important;" +
      "margin-top:10px;" +
    "}" +
    ".repository-content .capped-box h3:after {" +
      "clear:left !important;" +
    "}" +
    ".repository-content .graph-filter:after {" +
      "clear:left !important;" +
    "}" +
    ".repository-content h2.ghead:after {" +
      "clear:left !important;" +
    "}" +
    ".repository-content .section-heading:after {" +
      "clear:left !important;" +
    "}" +
    ".repository-content .user-list .tabnav-widget {" +
      "clear:none !important;" +
    "}" +
    ".repository-content .js-graph-punchcard {" +
      "max-width:920px !important;" +
    "}";
  (document.head || document.documentElement).appendChild(s);
}
