(function (doc, win) {
  var docEl = doc.documentElement
  var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  var recalc = function () {
    var clientWidth = docEl.clientWidth
    if (!clientWidth) return
    var size=100* (clientWidth / 750) + 'px'
    docEl.style.fontSize = size
    localStorage.setItem('docFontSize', size)
    localStorage.setItem('docH',docEl.clientHeight)
    localStorage.setItem('docW',docEl.clientWidth)
    //console.log(clientWidth+" "+size +" "+docEl)
  }
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
  doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window)
