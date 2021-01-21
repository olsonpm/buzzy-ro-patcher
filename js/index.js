'use strict'

const btn = getButtons(),
  errorAlert = document.getElementById('error-alert'),
  errorMsg = document.getElementById('error-msg'),
  loadingBar = document.getElementById('loading-bar'),
  loadingPct = document.getElementById('loading-pct'),
  hamburger = document.getElementById('hamburger'),
  menu = document.getElementById('menu')

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('active')
  menu.classList.toggle('hidden')
})

initButtons()

external.invoke('start_update')

document.addEventListener('click', function (evt) {
  if (
    !menu.classList.contains('hidden') &&
    !menu.contains(evt.target) &&
    !hamburger.contains(evt.target)
  ) {
    closeMenu()
  }
})

function getButtons() {
  return {
    main: document.getElementById('main-btn'),
    resetCache: document.getElementById('reset-cache'),
    setup: document.getElementById('setup'),
  }
}

function initButtons() {
  btn.main.addEventListener('click', cancelOrPlay)
  btn.resetCache.addEventListener('click', resetCache)
  btn.setup.addEventListener('click', setup)
}

function setLoadingPct(pct) {
  loadingPct.textContent = pct + '%'
  loadingBar.style.width = pct + '%'
}

function closeMenu() {
  menu.classList.add('hidden')
  hamburger.classList.remove('active')
}

/* eslint-disable no-unused-vars */

function cancelOrPlay() {
  if (btn.main.textContent.trim() === 'Cancel') {
    external.invoke('cancel_update')
  } else {
    external.invoke('play')
  }
}

function resetCache() {
  external.invoke('reset_cache')
  closeMenu()
}

function setup() {
  external.invoke('setup')
  closeMenu()
}

function patchingStatusReady() {
  setLoadingPct(100)
  btn.main.textContent = 'Play'
  btn.main.classList.remove('cancel')
  btn.main.classList.add('hvr-ripple-out')
}

function patchingStatusError(msg) {
  errorMsg.textContent = msg
  errorAlert.classList.remove('removed')
  errorAlert.classList.remove('hidden')
}

function patchingStatusDownloading(nbDownloaded, nbTotal, bytesPerSec) {
  const pct = (((100 * nbDownloaded) / nbTotal) * 0.8).toFixed()

  setLoadingPct(pct)
}

function patchingStatusInstalling(nbInstalled, nbTotal) {
  const pct = (80 + ((100 * nbInstalled) / nbTotal) * 0.2).toFixed()

  setLoadingPct(pct)
}
