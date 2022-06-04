

window.addEventListener('DOMContentLoaded',()=>{

    const playerField = document.querySelector('.pla')
 const obj= JSON.parse( localStorage.getItem('lastClickedFilm')) 
 console.log(obj.kinopoiskId);

console.log(obj.filmLength);


//color
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
//  getOpacity(clr)
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
// getOpacity(clr)

const headerColor = document.querySelector('header')
const mainCtgContainer = document.querySelector('.main-categories-container')
const btnColor = document.querySelector('.button-4')
const botBg=  document.querySelector('.bot-box')

let clr = localStorage.getItem('color')
// getOpacity(clr)
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
const release = document.querySelector('.year')
const rate = document.querySelector('#rating')
const age = document.querySelector('.age-average')
const count = document.querySelector('#length')
    const difrentColors = document.querySelector('.content-box__color');
    const submitClr = document.querySelector('#select_color')
  const filmPstInf = document.querySelectorAll('.film-poster__info')
  const btnRadius= document.querySelectorAll('.btn-for-help')
  const header = document.querySelector('header')
  const hederBbag = document.querySelector('.main-categories-container')
  const h2bg = document.querySelector('#nameoffilm')
const ul = document.querySelector('ul')
  filmPstInf.forEach((item,i)=>{
   item.style.background = `${clr}`
     })
     btnRadius.forEach((item,i)=>{
         item.style.border = `${clr} 2px solid`
     })
    //  playerBtns.style.background = `${clr}`
     hederBbag.style.background = `${clr}`
     header.style.background = `${clr}`
    difrentColors.style.border = `${clr} 2px solid`
     submitClr.style.border = `${clr} 2px solid`
   h2bg.style.background=`${clrOpacity}`
  headerColor.style.background = `${clr}`
mainCtgContainer.style.background = `${clr}`
ul.style.background=`${clrOpacity}`
age.style.background=`${clr}`
rate.style.color=`${clr}`
release.style.background=`${clr}`
count.style.color=`${clr}`
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



// function getOpacity(clr){
// if(clr=='rgb(177, 34, 34)'){
//   clrOpacity = 'rgb(177, 34, 34,0.5)'
// }
// else if(clr=='rgb(61, 194, 21)'){
//   clrOpacity = 'rgb(61, 194, 21,0.5)'
// }
// else if(clr=='rgb(46, 187, 187)'){
//   clrOpacity = 'rgb(46, 187, 187,0.5)'
// }
// else if(clr=='rgb(135, 46, 187)'){
//   clrOpacity = 'rgb(135, 46, 187,0.5)'
// }
// console.log(clrOpacity);
// }
// getOpacity(clr)
let ageLimit = obj.ratingAgeLimits.replace(/[^0-9]/g,"")
const age = document.querySelector('.age-average')
age.innerHTML=`<h3>${ageLimit}+</h3>`

const rate = document.querySelector('#rating')
rate.innerHTML=` ${obj.ratingKinopoisk}★`

const release = document.querySelector('.year')
release.innerHTML=`<h3>${obj.year}</h3>`

function getTimeFromMins(mins) {
  let hours = Math.trunc(mins/60);
  let minutes = mins % 60;
  if(minutes<10&&minutes>0){
      minutes= `0${minutes}`
  }
  return hours + ':' + minutes;
};

let lengthOfFilm = getTimeFromMins(obj.filmLength)

const length = document.querySelector('#length')
length.innerHTML=` ${lengthOfFilm}ч`




// fetch("https://libretranslate.com/translate", {
//   body: "q=%D0%A1%D0%A8%D0%90&source=ru&target=en&format=text&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
//   headers: {
//     Accept: "application/json",
//     "Content-Type": "application/x-www-form-urlencoded"
//   },
//   method: "POST"
// })
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.log(err))





// const res = await fetch("https://libretranslate.com/translate", {
// 	method: "POST",
// 	body: JSON.stringify({
// 		q: "США",
// 		source: "ru",
// 		target: "en",
// 		format: "text"
// 	}),
// 	headers: { "Content-Type": "application/json" }
// });

// console.log(await res.json());
// const country = document.querySelector('.country')
// country.innerHTML=`<img src="https://countryflagsapi.com/png/сша"  alt="">`

const name = document.querySelector('#nameoffilm')
name.innerHTML=`${obj.nameRu}`

const description = document.querySelector('#description')
description.innerHTML = `${obj.description}`
const poster = document.querySelector('.poster')
poster.innerHTML=`  <img src="${obj.posterUrl}" alt="">`

const allActors =[]
let mainActors ;
  fetch( `https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=${obj.kinopoiskId}`, {
    method: 'GET',
    headers: {
        'X-API-KEY': 'c9b2bdbe-6f12-40e8-a334-f6fbb5480eea',
        'Content-Type': 'application/json',
    },
})
    .then(res => res.json())
    .then(json => allActors.push(json))
    .catch(err => console.log(err))
 
const act = document.querySelector('#actors')
setTimeout(()=>{mainActors = allActors[0].slice(0,5)  ;   
 

console.log(mainActors);
  // console.log(actors[0])
mainActors.forEach((value,i)=>{
act.insertAdjacentHTML('beforeend',`<p class="actors__name">${value.nameRu}</p> `)

})
const actorsNameAction = document.querySelectorAll('.actors__name')
actorsNameAction.forEach((value,i)=>{
value.addEventListener('click',()=>{
  localStorage.setItem('actorObj',JSON.stringify( mainActors[i]))

  window.location.href = '../../actors_info/actors.html'
})

})
}
,200)

//similar films
// let arrayOfSimilarFilms = []

// fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${obj.kinopoiskId}/similars`, {
//     method: 'GET',
//     headers: {
//         'X-API-KEY': 'c9b2bdbe-6f12-40e8-a334-f6fbb5480eea',
//         'Content-Type': 'application/json',
//     },
// })
//     .then(res => res.json())
//     .then(json => arrayOfSimilarFilms.push(json))
//     .catch(err => console.log(err))


    
// setTimeout(()=>{
//   arrayOfSimilarFilms=arrayOfSimilarFilms[0].items.slice(0,8)
// let idsSimilarFilms =[]
// arrayOfSimilarFilms.forEach((value,i)=>{
//   idsSimilarFilms[i]=arrayOfSimilarFilms[i].filmId
// })

// console.log(idsSimilarFilms);
// // let i =0;
// // let interval= setInterval(()=>{da(idsSimilarFilms[i]);i++;

// // if(i==8){
// //     clearInterval(interval)
// // }
// },110)

// showFilms(simFlms)
// setInterval(showFilms(arrayOfSimilarFilms),100)


// },100)




if(obj.coverUrl!=null){
document.querySelector('.test').innerHTML=`<img src="${obj.coverUrl}">`}
else{
  document.querySelector('.flex').style.top='0'
  document.querySelector('.center-pos').style.top='0'
  document.querySelector('.films').style.padding='100px 0 0 0'
  console.log('error');
}

// function showFilms(arr)  {

//   let newDiv = document.querySelector(".films");
 
// aa(clr)

//   arr.map((item, index) => {

//  return    newDiv.insertAdjacentHTML('beforeend', ` 
// <div class="film-general" > 
// <div class="film-poster"> 
//  <img src=${item.posterUrl} alt="error"> 
//  <div class="film-poster__info" style="${clr}" > <div class="poster-info__time">${getTimeFromMins(item.filmLength)}ч</div> 
 
//  <div class="poster-info__rating">${item.ratingKinopoisk}</div> </div> 
// </div> 
// <h2 align = "center">${item.nameRu}</h2> 
// </div>`)



//   });


// }


// function da(id,i){
  // const sqqq=[]
  // fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/326`, {
  //     method: 'GET',
  //     headers: {
  //         'X-API-KEY': 'c9b2bdbe-6f12-40e8-a334-f6fbb5480eea',
  //         'Content-Type': 'application/json',
  //     },
  // })
  //     .then(res => res.json())
  //     .then(json => sqqq.push(json))
  //     .catch(err => console.log(err))

  // console.log(sqqq);
  // let newDiv = document.querySelector(".films");
  // newDiv.insertAdjacentHTML('beforeend', ` 
  // <div class="film-general" > 
  // <div class="film-poster"> 
  //  <img src=${simFlms[i].posterUrl} alt="error"> 
  //  <div class="film-poster__info"  > <div class="poster-info__time">${getTimeFromMins(simFlms[i].filmLength)}ч</div> 
   
  //  <div class="poster-info__rating">${simFlms[i].ratingKinopoisk}</div> </div> 
  // </div> 
  // <h2 align = "center">${simFlms[i].nameRu}</h2> 
  // </div>`)
  
  const screenWidth = window.screen.width
if(screenWidth==375){
  var dataUrl=window.location.href;
  var my_script_play = document.createElement("script");
  my_script_play.setAttribute("src",`//pleer.videoplayers.club/get_player?w=375&h=300&type=widget&kp_id=${obj.kinopoiskId}&players=videocdn&r_id=videoplayers&vni=VIDEOCDN&vti=&vdi=&ru=`+dataUrl);
  my_script_play.async = true;
  document.head.appendChild(my_script_play);
  
}
else{
  var dataUrl=window.location.href;
  var my_script_play = document.createElement("script");
  my_script_play.setAttribute("src",`//pleer.videoplayers.club/get_player?w=610&h=370&type=widget&kp_id=${obj.kinopoiskId}&players=videocdn&r_id=videoplayers&vni=VIDEOCDN&vti=&vdi=&ru=`+dataUrl);
  my_script_play.async = true;
  document.head.appendChild(my_script_play);
  
}
  
})