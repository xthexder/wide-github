var toggle = true;

chrome.browserAction.onClicked.addListener(function(tab){
  toggle = !toggle;
  chrome.browserAction.setIcon({path: (toggle ? "icons/icon.png" : "icons/icon-disabled.png")});
  chrome.tabs.sendMessage(tab.id, {enableWideGithub: toggle});
});

chrome.runtime.onMessage.addListener(function(request, sender, callback) {
  if (request.reload)
  {
    callback({enableWideGithub: toggle});
  }
});
