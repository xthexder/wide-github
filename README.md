Wide GitHub
===========

This plugin changes all GitHub repository pages to be full width and dynamically sized. Gists are supported as of version 1.1.0.

This repository always contains the latest version, the Chrome and Firefox extension updates may be delayed by submission reviews.

Installing
----------

As a Chrome Extension:

The Chrome extension can be installed from the [Chrome Web Store](https://chrome.google.com/webstore/detail/wide-github/kaalofacklcidaampbokdplbklpeldpj)

As a Firefox Addon:

The Firefox addon can be installed from the [Mozilla Addons Website](https://addons.mozilla.org/firefox/addon/wide-github-chrome/)

As a Greasemonkey / UserScript:

This script can be installed into Greasemonkey or other user script plugins by going here: [wide-github.user.js](https://raw.githubusercontent.com/xthexder/wide-github/master/build/wide-github.user.js)

As a Stylus / UserCSS

This style can be installed into Stylus by going here: [wide-github.user.css](https://raw.githubusercontent.com/xthexder/wide-github/master/build/wide-github.user.css)

Configuring
-----------

By default, GitHub pages are stretched to the full width of the window. On a wide
monitor that can be too much, so the amount of whitespace that gets filled is
adjustable: at 40%, the content grows through 40% of the unused space and the
remaining 60% stays as margin down each side. Pages are never made narrower than
GitHub's own layout, so this has no effect below 1280px.

* **Chrome extension / Firefox addon:** right-click the toolbar icon and choose
  Options (Preferences in Firefox), then drag the "Whitespace to fill" slider.
  Open tabs update immediately.
* **Stylus / UserCSS:** open the style's settings and drag the
  "Whitespace to fill (%)" slider.
* **Greasemonkey / UserScript:** edit the `--wgh-fill-percent` value near the top
  of the installed script.

Development
-----------

To generate the user.js for Greasemonkey, run `make js`.

The user.css can be built using `make css`.

The chrome extension and firefox addon are identical and can be built using `make chrome`.

