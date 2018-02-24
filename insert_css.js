function getShouldInject(callback)
{
  chrome.runtime.sendMessage({}, callback);
}

function handleResponse(response)
{
  if (response.shouldInject)
  {
    var path = chrome.extension.getURL('wide-github.css');
    $('head').append($('<link>')
        .attr("rel","stylesheet")
        .attr("type","text/css")
        .attr("href", path));
  }
}

$(document).ready(function() {
  getShouldInject(handleResponse);
});