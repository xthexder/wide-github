var toggle = true;

chrome.action.onClicked.addListener((tab) => {
  toggle = !toggle;
  chrome.action.setIcon({path: (toggle ? "icons/icon.png" : "icons/icon-disabled.png")});
  chrome.tabs.sendMessage(tab.id, {enableWideGithub: toggle});
});

chrome.runtime.onMessage.addListener((request, sender, callback) => {
  if (request.reload) {
    callback({enableWideGithub: toggle});
  }
});