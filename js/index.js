'use strict';

const bar1 = new ldBar("#loading-bar")
bar1.set(100)

const hamburger = document.getElementById('hamburger'),
  menu = document.getElementById('menu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  menu.classList.toggle('hidden')
});

/*

external.invoke('start_update');

function patchingStatusReady() {
  $("#download-progress-bar")
      .css("width", "100%")
      .attr("aria-valuenow", "100")
      .removeClass("bg-warning")
      .addClass("bg-success");
  $("#download-progress-text").text("Ready");
  $("#button-play").prop('disabled', false);
}

function patchingStatusError(errorMsg) {
  $("#download-progress-bar")
      .css("width", "100%")
      .attr("aria-valuenow", "100")
      .removeClass("bg-warning")
      .addClass("bg-danger");
  $("#download-progress-text").text("Failure: " + errorMsg);
}

function patchingStatusDownloading(nbDownloaded, nbTotal, bytesPerSec) {
  var percentage = (100 * nbDownloaded) / nbTotal;
  if (bytesPerSec > 0) {
      var downloadSpeed = " - " + humanFileSize(bytesPerSec) + "/s";
  } else {
      var downloadSpeed = "";
  }
  $("#download-progress-bar").css("width", percentage + "%").attr("aria-valuenow", percentage);
  $("#download-progress-text").text("Downloading: " + nbDownloaded + "/" + nbTotal + downloadSpeed);
}

function patchingStatusInstalling(nbInstalled, nbTotal) {
  var percentage = (100 * nbInstalled) / nbTotal;
  $("#download-progress-bar").css("width", percentage + "%").attr("aria-valuenow", percentage);
  $("#download-progress-text").text("Installing: " + nbInstalled + "/" + nbTotal);
}

// Note: Function taken from https://stackoverflow.com/a/20732091
function humanFileSize(size) {
  var i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
  return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kiB', 'MiB', 'GiB', 'TiB'][i];
}

*/
