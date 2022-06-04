window.addEventListener('DOMContentLoaded', () => {

  const burgerElem = document.querySelectorAll(".genres-2pge");
  const burger = document.querySelector(".fa-bars");

  const nav = document.querySelector('nav')

  document.querySelector('#burger').addEventListener('click',(e) => {
    e.currentTarget.classList.toggle("active")
    if(nav.classList.contains('none')){
        nav.classList.remove('none')
    }
    else{
        nav.classList.add('none')
    }
    nav.classList.toggle('show')
  })
  
  const btn = document.querySelector('.button-4')
  const deleteBtn = document.querySelector('.delete')
 

  let newObj = []
  burgerElem.forEach((item, index) => {
      if (index == 0) {} else {
          item.classList.add("none");
      }
      //    burgerElem[index].addEventListener('click',()=>{ 
      //     if(burgerElem[index].style.background == 'none'){ 

      //     } 
      //     else{ 
      //         burgerElem[index].style.background = 'none' 
      //     } 
      // } 
      // )} 

      burgerElem[0].addEventListener("click", () => {
          if (burger.classList.contains("fa-bars") == true) {
              burger.classList.remove("fa-bars");
              burger.classList.add("fa-times");
            
              burgerElem.forEach((item, index) => {
                  item.classList.remove("none");
              });
          } else {
              burger.classList.remove("fa-times");
              burger.classList.add("fa-bars");
          
              burgerElem.forEach((item, index) => {
                  if (index == 0) {} else {
                      item.classList.add("none");
                  }
              });
          }
      });
  });
  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    if(minutes<10&&minutes>0){
        minutes= `0${minutes}`
    }
    return hours + ':' + minutes;
};
let newDiv = document.querySelector(".films");

let nextPoint = 12;
let deafoultStep = 12;

function showFilms(arr) {

    let newDiv = document.querySelector(".films");
   
  aa(clr)

    arr.map((item, index) => {

   return    newDiv.insertAdjacentHTML('beforeend', ` 
<div class="film-general" > 
<div class="film-poster"> 
   <img src=${item.posterUrl} alt="error"> 
   <div class="film-poster__info" style="${clr}" > <div class="poster-info__time">${getTimeFromMins(item.filmLength)}ч</div> 
   
   <div class="poster-info__rating">${item.ratingKinopoisk}</div> </div> 
  </div> 
<h2 align = "center">${item.nameRu}</h2> 
  </div>`)



    }); 


}
let aray
setTimeout(()=>{

 aray = getStorage.slice(0,nextPoint)


aa(clr)


// console.log(sortLong);

  showFilms(aray)

},1500)
setTimeout(()=>{const loading = document.querySelector('.load')
document.querySelector('.loader').remove()
aa(clr)

getPropertiesOfFilm()
loading.remove()

}

,1550)
  btn.addEventListener('click', () => {
   
  
   
      nextPoint = nextPoint+deafoultStep
  aray = getStorage.slice(0,nextPoint)
  deleteDiv()
      showFilms(aray)
   
      getPropertiesOfFilm()
aa(clr)
  })





// console.log(mydata[1].filmName); 


//timer 





const HTMLStorage = document.querySelectorAll('.time')

const deadLine = '2022-06-17'

function diffrents(lastTime) {


  const t = Date.parse(lastTime) - Date.parse(new Date())
  const days = Math.floor(t / (1000 * 60 * 60 * 24))
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
  const min = Math.floor((t / (1000 * 60)) % 60)
  const sec = Math.floor((t / (1000)) % 60)
  return [days, hours, min, sec, t]
}

function pasteTime() {
  const nameNum = ['дней ', 'часов', 'минут', 'секунд']
  let time = diffrents(deadLine)
  let timeTrue;
  if (time[4] <= 0) {
      HTMLStorage.forEach((value, i) => {
          value.innerHTML = '0'
      })
  } else {
      HTMLStorage.forEach((item, index) => {
          if (time[index] < 10 && time[index] > 0) {
              timeTrue = `0${time[index]}`
          } else {
              timeTrue = time[index]
          }
          item.innerHTML = `${timeTrue}<p>${nameNum[index]}</p> `
      })

  }
}
pasteTime()
let setintervalId = setInterval(pasteTime

  , 1000);






// modalWindow 
const modalWindow = document.querySelector('.modal_promotion')
const promotion = document.querySelector('.endOfPromotion')
const closeModal = document.querySelector('.cross')


promotion.addEventListener('click', () => {
    if(modalWindow.classList.contains('none')){
  modalWindow.classList.add('open_anim')
  modalWindow.classList.remove('none')
  setTimeout(() => {
      modalWindow.classList.remove('open_anim')
  }, 1500)
}else{
    modalWindow.classList.add('close_anim')
    setTimeout(() => {
        modalWindow.classList.add('none')
        modalWindow.classList.remove('close_anim')
    }, 1500) 
}
});


closeModal.addEventListener('click', () => {
  modalWindow.classList.add('close_anim')
  setTimeout(() => {
      modalWindow.classList.add('none')
      modalWindow.classList.remove('close_anim')
  }, 1500)



})

//change color
const collapse = document.querySelector('.change__color')



// 

const form = document.querySelector('#check_color')
const input = document.querySelector('#color-input')



form.addEventListener('submit', (event) => {
  event.preventDefault();
  //   target  = event.target
  // araay.forEach((item,index)=>{
  //   if(target.checked=item){
  //     console.log(item.value);
  //   }
  // })

  var data = new FormData(form);
  var output  ;

  for (const entry of data) {
      output = entry[1] ;
  };
   localStorage.setItem('color',output)
 clr = localStorage.getItem('color')
   console.log(clr);

  
 aa(clr)



})


const headerColor = document.querySelector('header')
const mainCtgContainer = document.querySelector('.main-categories-container')
const btnColor = document.querySelector('.button-4')
const botBg=  document.querySelector('.bot-box')

let clr = localStorage.getItem('color')
aa(clr)

function aa(clr) {
    let clrOpacity='rgb(61, 194, 21,0.5)'
    if(clr=='rgb(177, 34, 34)'){
    clrOpacity = 'rgb(177, 34, 34,0.5)'
  }
  else if(clr=='rgb(61, 194, 21)'){
    clrOpacity = 'rgb(61, 194, 21,0.5)'
  }
  else if(clr=='rgb(46, 187, 187)'){
    clrOpacity = 'rgb(46, 187, 187,0.5)'
  }
  else if(clr=='rgb(135, 46, 187)'){
    clrOpacity = 'rgb(135, 46, 187,0.5)'
  }
  const ul = document.querySelector('ul')
    const difrentColors = document.querySelector('.content-box__color');
    const submitClr = document.querySelector('#select_color')
  const filmPstInf = document.querySelectorAll('.film-poster__info')
  const btnRadius= document.querySelectorAll('.btn-for-help')
  filmPstInf.forEach((item,i)=>{
   item.style.background = `${clr}`
     })
     btnRadius.forEach((item,i)=>{
         item.style.border = `${clr} 2px solid`
     })
    difrentColors.style.border = `${clr} 2px solid`
     submitClr.style.border = `${clr} 2px solid`
     botBg.style.background = `${clr}`
  headerColor.style.background = `${clr}`
mainCtgContainer.style.background = `${clr}`
ul.style.background=`${clrOpacity}`
btnColor.style.border = `${clr} 1px solid`

}



const botArrow = document.querySelector('.arrow-bot')

botArrow.addEventListener('click',()=>{
    const difrentColors = document.querySelector('.content-box__color');
    if(difrentColors.classList.contains("none")){
   difrentColors.classList.remove('none')}
   else{
       difrentColors.classList.add('none')
   }

console.log('ok');
})

//bot
    const help = document.querySelector('.help')
const bot = document.querySelector('.bot-box')
const timeToAdd= 2000;
setTimeout(()=>{

    help.classList.remove('none')
},timeToAdd)

const closeBot = document.querySelector('#close-bot')
const botWind = document.querySelector('.bot-window')
const  closeWIn = document.querySelector('#close-win-bot')
closeBot.addEventListener('click',()=>{
help.classList.add('none')
})

bot.addEventListener('click',()=>{

if(botWind.classList.contains('none')){
    botWind.classList.remove('none')
}else{
    botWind.classList.add('none')
}


if(help.classList.contains('none')){
    setTimeout(()=>{

        help.classList.add('none')
    },2000)
}else{
help.classList.add('none')}
})

closeWIn.addEventListener('click',()=>{
    botWind.classList.add('none')
})

function deleteDiv(){
    const ele  = document.querySelectorAll('.film-general')
ele.forEach((it,i)=>{it.parentNode.removeChild(it)})
}

//bot buttons
const lotTime= document.querySelector('#lotOfTime')
const smallTime = document.querySelector('#smallTime')
const hightRate = document.querySelector('#hightRate')

function sortLotTime(){
    aray.sort((a, b) => a.filmLength > b.filmLength ? -1 : 1)
    deleteDiv()
       showFilms(aray)
       aa(clr)
}

lotTime.addEventListener('click',()=>{
    localStorage.setItem('lastClicked','lotTime')
sortLotTime()

getPropertiesOfFilm()
})

function sortSmlTime(){
    aray.sort((a, b) => a.filmLength < b.filmLength ? -1 : 1)
deleteDiv()
    showFilms(aray)
    aa(clr)

    getPropertiesOfFilm() 
}

smallTime.addEventListener('click',()=>{
    localStorage.setItem('lastClicked','smallTime')
sortSmlTime()

getPropertiesOfFilm()
 })

function sortHightRate(){
    aray.sort((a, b) => a.ratingKinopoisk > b.ratingKinopoisk ? -1 : 1)
 deleteDiv()
    showFilms(aray)
    aa(clr)
}

 hightRate.addEventListener('click',()=>{
     localStorage.setItem('lastClicked','hightRate')
sortHightRate()

getPropertiesOfFilm()
 })






function getPropertiesOfFilm(){

let ar = document.querySelectorAll(".film-general")
ar.forEach((it,i)=>{
    it.addEventListener('click',()=>{
       const obj= aray[i]
const strng =  JSON.stringify(obj)
 localStorage.setItem('lastClickedFilm',strng)
 window.location.href = '../player/playerr/player.html';

    })
})

}



const getStorage = []

// const ids = [435,1355139,4467988,1309570,1103803]
// const ids1 =[1414470,1234853]

// function cutArr(arr,cutNum){
// for(let i;i<arr.lenght;i++){
//   if(arr[i]<=5){
//       const
//   }
// }

// }


function da(id){
fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
    method: 'GET',
    headers: {
        'X-API-KEY': 'c9b2bdbe-6f12-40e8-a334-f6fbb5480eea',
        'Content-Type': 'application/json',
    },
})
    .then(res => res.json())
    .then(json => getStorage.push(json))
    .catch(err => console.log(err))
}

const ids =[8124,77044,804662,683999,306084,6039,5928,426004,391772,1355139,1236393,582170,507817,6034,555,1245524,455338,468562,818981,8932,1721,77576,4250,5129,4807,5185,600847,3679,883,726838,18120,506251]
    let i =0;
let interval= setInterval(()=>{da(ids[i]);i++;
console.log(getStorage);
if(i==ids.length){
    clearInterval(interval)
}
},110)
// console.log(getStorage)




})