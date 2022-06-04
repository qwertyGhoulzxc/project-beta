window.addEventListener('DOMContentLoaded',()=>{
let database =[]
const clr = localStorage.getItem('color')

function getTimeFromMins(mins) {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    if(minutes<10&&minutes>0){
        minutes= `0${minutes}`
    }
    return hours + ':' + minutes;
  };
function da(id,i){
fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
    method: 'GET',
    headers: {
        'X-API-KEY': 'c9b2bdbe-6f12-40e8-a334-f6fbb5480eea',
        'Content-Type': 'application/json',
    },
})
    .then(res => res.json())
    .then(json => database.push(json))
    .catch(err => console.log(err))

    console.log(database);
let database1;
    setTimeout(()=>{database1 = database.slice()  ;    console.log(database1)

const flms = document.querySelector('.films')
flms.insertAdjacentHTML('beforeend', ` 
<div class="film-general" > 
<div class="film-poster"> 
   <img src=${database[i].posterUrl} alt="error"> 
   <div class="film-poster__info" style="background:${clr}"; > <div class="poster-info__time">${getTimeFromMins( database[i].filmLength)}ч</div> 
   
   <div class="poster-info__rating">${database[i].ratingKinopoisk}</div> </div> 
  </div> 
<h2 align = "center">${database[i].nameRu}</h2> 
  </div>`)

    },90)

} 

 let i =0;
let interval= setInterval(()=>{getId(idFl.kinopoiskId,i);++i;

if(i==4){
    clearInterval(interval)
}
},400)

console.log(database);
const idFl =JSON.parse( localStorage.getItem('lastClickedFilm'))
console.log(idFl.kinopoiskId)





let ids =[]



function getId(film,i){

fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${film}/similars`, {
    method: 'GET',
    headers: {
        'X-API-KEY': 'c9b2bdbe-6f12-40e8-a334-f6fbb5480eea',
        'Content-Type': 'application/json',
    },
})
    .then(res => res.json())
    .then(json => ids.push(json.items[i].filmId))
    .catch(err => console.log(err))

setTimeout(()=>{ console.log(ids)
da(ids[i],i)},170)
}





    // id.forEach((i,ii)=>{   getArr(i)})
   

        setTimeout( function getPropertiesOfFilm(){

            let ar = document.querySelectorAll(".film-general")
            ar.forEach((it,i)=>{
                it.addEventListener('click',()=>{
                   const obj= database[i]
            const strng =  JSON.stringify(obj)
             localStorage.setItem('lastClickedFilm',strng)
             window.location.href = 'player.html';
            console.log('ok');
            
                })
            })
            
            },2000)

    })