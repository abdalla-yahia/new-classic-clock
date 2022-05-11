const seco = document.querySelector('.seco')
const min = document.querySelector('.min')
const hour = document.querySelector('.hour')
const dh = document.querySelector('.dh')
const dm = document.querySelector('.dm')
const ds = document.querySelector('.ds')
const dy = document.querySelector('.parent3')
const catina = document.querySelector('.catina')
const aud = document.querySelector('#aud')
const aud2 = document.querySelector('#aud2')
const parent = document.querySelector('.parent')
const date = new Date()
const Hours = date.getHours()
const Minutes = date.getMinutes()
const Seconds = date.getSeconds()

hour.style.transform = `rotate(${Hours * 30 + (Minutes * 6) / 12}deg)`
min.style.transform = `rotate(${Minutes * 6 + (Seconds * 6) / 60}deg)`
seco.style.transform = `rotate(${Seconds * 6}deg)`

function Fdh() {
  if (Hours < 10) {
    dh.textContent = `0${Hours}`
  } else dh.textContent = `${Hours}`
}
function Fdm() {
  if (Minutes < 10) {
    dm.textContent = `0${Minutes}`
  } else dm.textContent = `${Minutes}`
}

var count = Seconds
function Fds() {
  if (count < 10) {
    ds.textContent = `0${count}`
  } else ds.textContent = `${count}`
}

Fdh()
Fdm()
Fds()

let oneHour = Number(`${Hours * 30 + (Minutes * 6) / 12}`)
let oneMinu = Number(`${Minutes * 6 + (Seconds * 6) / 60}`)
let oneSecond = Number(`${Seconds * 6}`)
setInterval(() => {
  oneSecond += 0.6
  oneMinu += 0.01
  oneHour += 100 / 120000
  seco.style.transform = `rotate(${oneSecond}deg)`
  min.style.transform = `rotate(${oneMinu}deg)`
  hour.style.transform = `rotate(${oneHour}deg)`
}, 100)

setInterval(() => {
  ds.textContent++
  if (ds.textContent < 10) {
    ds.innerHTML = 0 + ds.textContent
  }
  if (ds.textContent == 60) {
    window.location.reload()
    ds.textContent = 0
    dm.textContent++
    if (dm.textContent < 10) {
      dm.innerHTML = 0 + dm.textContent
    }
  }
  if (dm.textContent == 60) {
    dm.textContent = 0
    dh.textContent++
    if (dh.textContent < 10) {
      dh.innerHTML = 0 + dh.textContent
    }
    aud.play()
  }

  if (dh.textContent >= 13) {
    dh.textContent = dh.textContent - 12
  }
  count++
  catina.style.backgroundColor = changeColor()
  // parent.style.backgroundImage= url(changeBackground());
}, 1000)

dy.textContent = date.toDateString()

function changeColor() {
  const num = '0123456789abcdef'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += num[Math.round(Math.random() * 16)]
  }
  return color
}

function changeBackground() {
  let images = [
    'https://c4.wallpaperflare.com/wallpaper/385/633/317/4k-abu-dhabi-sheikh-zayed-mosque-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/552/88/969/mosques-sheikh-zayed-grand-mosque-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/23/331/625/abu-dhabi-sheikh-zayed-mosque-at-night-united-arab-emirates-4k-ultra-hd-tv-wallpaper-for-laptop-tablet-mobile-phones-and-desktop-3840%C3%972400-wallpaper-preview.jpg',
    'https://c1.wallpaperflare.com/preview/518/582/454/abu-dhabi-moshe-islam-building.jpg',
    'https://c4.wallpaperflare.com/wallpaper/521/234/415/columns-architecture-uae-the-sheikh-zayed-grand-mosque-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/79/52/988/abu-dhabi-sheikh-zayed-mosque-view-at-night-uae-4k-ultra-hd-desktop-wallpapers-for-computers-laptop-tablet-and-mobile-phones-3840%C3%972160-wallpaper-preview.jpg',
    'https://c4.wallpaperflare.com/wallpaper/1009/1017/95/abu-dhabi-uae-grand-mosque-sheikh-zayed-hd-wallpaper-preview.jpg',
  ]
  let src = ''
  for (let i = 0; i < images.length; i++) {
    src = images[Math.round(Math.random() * 6)]
  }
  return src
}

document.getElementsByTagName(
  'div',
)[0].style.backgroundImage = `url('${changeBackground()}')`
document.getElementsByTagName(
  'body',
)[0].style.backgroundImage = `url('${changeBackground()}')`
