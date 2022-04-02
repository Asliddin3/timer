const sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    minNum = document.querySelector('.minutes'),
    hourNum = document.querySelector('.hours')
function clock() {
    let time = new Date(),
        secArr = time.getSeconds() * 6,
        minArr = time.getMinutes() * 6,
        hourArr = time.getHours() * 30

    sec.style.transform = `rotate(${secArr}deg)`
    min.style.transform = `rotate(${minArr}deg)`
    hour.style.transform = `rotate(${hourArr}deg)`
    setTimeout(() => {
        clock()
    }, 1000/12);

    hourNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
}
clock()

const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContentItem = document.querySelectorAll('.tabsContentItem')
for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click', function () {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContentItem[j].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContentItem[i].classList.add('active')
    })
}
let    timerSec = document.querySelector('.stopwatch__seconds'),
       timerMin = document.querySelector('.stopwatch__minutes'),
       timerHour = document.querySelector('.stopwatch__hours'),
       timerBtn = document.querySelector('.stopwatch__btn'),
       timerRed = document.querySelector('.active_clear'),
       timerPlace = document.querySelector('.tabsLink__span'),
       timerWork = document.querySelector('.active'),
       interval

let sanoq=0,
    sekund=0,
    minut=0,
    soat=0
timerBtn.addEventListener('click',function(){
    sanoq++;
    if(sanoq==1){
        timerBtn.innerHTML="stop"
        timerPlace.classList.add('active')
        clearInterval(interval)
        interval= setInterval(sekundomer,1000)
    }else if(sanoq==2){
        timerBtn.innerHTML="clear"
        timerPlace.classList.remove('active')
        timerPlace.classList.add('active_clear')
    }else if(sanoq==3){
        timerBtn.innerHTML="start"
        timerPlace.classList.remove('active_clear')
        sanoq=0
        sekund=0
        soat=0
        minut=0
        timerSec.innerHTML=sekund
        timerMin.innerHTML=minut
        timerHour.innerHTML=soat
    }
})
function sekundomer(){ 
    if(sanoq==1){
        timerSec.innerHTML=sekund
        sekund++
        if(sekund==59){
            sekund=0
            minut++
            timerMin.innerHTML=minut
            if(minut==59){
                soat++
                timerHour.innerHTML=soat
                if(soat==24){
                    soat=0
                    timerHour.innerHTML=soat 
                }
            }
        }
}}
