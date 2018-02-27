function getShouldInject(callback)
{
  chrome.runtime.sendMessage({}, callback);
}

function handleResponse(response)
{
  if (response.shouldInject)
  {
    var path = chrome.extension.getURL('wide-github.css');
    var link = document.createElement("link");
    link.href = path;
    link.rel = "stylesheet";
    document.getElementsByTagName('head')[0].appendChild(link);
  }
}

window.onload = function() {
  getShouldInject(handleResponse);
}