var shouldInject = true;

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  sendResponse({shouldInject: shouldInject});
});

chrome.browserAction.onClicked.addListener(function (tab)
{
  shouldInject = !shouldInject;

  chrome.tabs.query({url: ["https://github.com/*", "https://gist.github.com/*"]}, function(tab_array) {
    tab_array.map(tab => chrome.tabs.reload(tab.id));
  });
});