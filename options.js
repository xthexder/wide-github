var DEFAULT_FILL_PERCENT = 100;

var slider = document.getElementById('fill-percent');
var readout = document.getElementById('fill-percent-value');

function render(percent) {
  slider.value = percent;
  readout.textContent = percent + "%";
}

chrome.storage.sync.get({fillPercent: DEFAULT_FILL_PERCENT}, function(items) {
  render(items.fillPercent);
});

// Update the readout while dragging, but only write on release to stay well
// under chrome.storage.sync's write rate quota.
slider.addEventListener('input', function() {
  readout.textContent = slider.value + "%";
});

slider.addEventListener('change', function() {
  chrome.storage.sync.set({fillPercent: parseInt(slider.value, 10)});
});
