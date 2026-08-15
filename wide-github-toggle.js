function setDisabledClass(obj) {
  if (obj.enableWideGithub) {
    document.body.classList.remove('wgh-disabled');
  } else {
    document.body.classList.add('wgh-disabled');
  }
}

function setFillPercent(percent) {
  document.documentElement.style.setProperty('--wgh-fill-percent', percent);
}

chrome.runtime.onMessage.addListener((request, sender, callback) => {
  setDisabledClass(request);
});

chrome.runtime.sendMessage({reload: true}, setDisabledClass);

chrome.storage.sync.get({fillPercent: 100}, (items) => {
  setFillPercent(items.fillPercent);
});

chrome.storage.onChanged.addListener((changes) => {
  if (changes.fillPercent) {
    setFillPercent(changes.fillPercent.newValue);
  }
});
