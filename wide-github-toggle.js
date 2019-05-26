function setDisabledClass(obj) {
  if (obj.enableWideGithub)
  {
    document.body.classList.remove('wgh-disabled');
  }
  else
  {
    document.body.classList.add('wgh-disabled');
  }
}

chrome.runtime.onMessage.addListener(function(request, sender, callback) {
  setDisabledClass(request);
});

chrome.runtime.sendMessage({reload: true}, setDisabledClass);
