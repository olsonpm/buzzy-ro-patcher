'use strict'

const btn = getButtons(),
  errorAlert = document.getElementById('error-alert'),
  errorMsg = document.getElementById('error-msg'),
  loadingBar = new ldBar('#loading-bar'),
  hamburger = document.getElementById('hamburger'),
  menu = document.getElementById('menu')

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  menu.classList.toggle('hidden')
})

// external.invoke('start_update')

document.addEventListener('click', evt => {
  if (
    !menu.classList.contains('hidden') &&
    !menu.contains(evt.target) &&
    !hamburger.contains(evt.target)
  ) {
    menu.classList.add('hidden')
    hamburger.classList.remove('active')
  }
})

function getButtons() {
  return {
    main: document.getElementById('main-btn'),
    resetCache: document.getElementById('reset-cache'),
    setup: document.getElementById('setup'),
  }
}

/* eslint-disable no-unused-vars */

function patchingStatusReady() {
  loadingBar.set(100)
  btn.main.textContent = 'Play'
}

function patchingStatusError(msg) {
  errorMsg.textContent = msg
  errorAlert.classList.remove('removed')
  errorAlert.classList.remove('hidden')
}

/*

function patchingStatusDownloading(nbDownloaded, nbTotal, bytesPerSec) {
  var percentage = (100 * nbDownloaded) / nbTotal
  if (bytesPerSec > 0) {
    var downloadSpeed = ' - ' + humanFileSize(bytesPerSec) + '/s'
  } else {
    var downloadSpeed = ''
  }
  $('#download-progress-bar')
    .css('width', percentage + '%')
    .attr('aria-valuenow', percentage)
  $('#download-progress-text').text(
    'Downloading: ' + nbDownloaded + '/' + nbTotal + downloadSpeed
  )
}

function patchingStatusInstalling(nbInstalled, nbTotal) {
  var percentage = (100 * nbInstalled) / nbTotal
  $('#download-progress-bar')
    .css('width', percentage + '%')
    .attr('aria-valuenow', percentage)
  $('#download-progress-text').text(
    'Installing: ' + nbInstalled + '/' + nbTotal
  )
}

// Note: Function taken from https://stackoverflow.com/a/20732091
function humanFileSize(size) {
  var i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024))
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    ' ' +
    ['B', 'kiB', 'MiB', 'GiB', 'TiB'][i]
  )
}

*/
