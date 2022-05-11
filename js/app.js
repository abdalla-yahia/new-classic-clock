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
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mexatk.com%2F%25D8%25B5%25D9%2588%25D8%25B1-%25D9%2585%25D8%25B3%25D8%25A7%25D8%25AC%25D8%25AF-%25D8%25A7%25D8%25AD%25D9%2584%25D9%258A-%25D9%2588%25D8%25A7%25D8%25AC%25D9%2585%25D9%2584-%25D8%25AE%25D9%2584%25D9%2581%25D9%258A%25D8%25A7%25D8%25AA-%25D8%25A7%25D9%2584%25D9%2585%25D8%25B3%25D8%25A7%25D8%25AC%25D8%25AF-hd%2F&psig=AOvVaw28GUkPieOrJo3x0GSUuNJr&ust=1652391113104000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPC5t96y2PcCFQAAAAAdAAAAABAD',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgfx4arab.com%2Fdownload%2Fmosque-%25D8%25B5%25D9%2588%25D8%25B1-%25D9%2585%25D8%25B3%25D8%25AC%25D8%25AF-%25D8%25AF%25D9%2582%25D8%25A9-%25D8%25B9%25D8%25A7%25D9%2584%25D9%258A%25D8%25A9-%25D8%25AC%25D9%2585%25D9%258A%25D9%2584-%25D8%25B1%25D8%25A7%25D8%25A6%25D8%25B9-%25D8%25AD%25D8%25AF%25D9%258A%25D8%25AB%2F&psig=AOvVaw28GUkPieOrJo3x0GSUuNJr&ust=1652391113104000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPC5t96y2PcCFQAAAAAdAAAAABAc',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mexatk.com%2F%25D8%25B5%25D9%2588%25D8%25B1-%25D9%2585%25D8%25B3%25D8%25A7%25D8%25AC%25D8%25AF-%25D8%25A7%25D8%25AD%25D9%2584%25D9%258A-%25D9%2588%25D8%25A7%25D8%25AC%25D9%2585%25D9%2584-%25D8%25AE%25D9%2584%25D9%2581%25D9%258A%25D8%25A7%25D8%25AA-%25D8%25A7%25D9%2584%25D9%2585%25D8%25B3%25D8%25A7%25D8%25AC%25D8%25AF-hd%2F&psig=AOvVaw28GUkPieOrJo3x0GSUuNJr&ust=1652391113104000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPC5t96y2PcCFQAAAAAdAAAAABAo',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Far.wikipedia.org%2Fwiki%2F%25D9%2585%25D9%2584%25D9%2581%3AAl-Hakim_Mosque.jpg&psig=AOvVaw28GUkPieOrJo3x0GSUuNJr&ust=1652391113104000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPC5t96y2PcCFQAAAAAdAAAAABAu',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mexatk.com%2F%25D8%25B5%25D9%2588%25D8%25B1-%25D9%2585%25D8%25B3%25D8%25A7%25D8%25AC%25D8%25AF-%25D8%25A7%25D8%25AD%25D9%2584%25D9%258A-%25D9%2588%25D8%25A7%25D8%25AC%25D9%2585%25D9%2584-%25D8%25AE%25D9%2584%25D9%2581%25D9%258A%25D8%25A7%25D8%25AA-%25D8%25A7%25D9%2584%25D9%2585%25D8%25B3%25D8%25A7%25D8%25AC%25D8%25AF-hd%2F&psig=AOvVaw28GUkPieOrJo3x0GSUuNJr&ust=1652391113104000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPC5t96y2PcCFQAAAAAdAAAAABA0',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alwahdahnews.net%2F62801%2F&psig=AOvVaw28GUkPieOrJo3x0GSUuNJr&ust=1652391113104000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPC5t96y2PcCFQAAAAAdAAAAABBG',
    'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpaperflare.com%2Fsearch%3Fwallpaper%3Dsheikh%2Bzayed%2Bmosque&psig=AOvVaw28GUkPieOrJo3x0GSUuNJr&ust=1652391113104000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCPC5t96y2PcCFQAAAAAdAAAAABBM',
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
