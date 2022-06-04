let storage =[]
const clr = localStorage.getItem('color')
function daa(id,i){
    fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`, {
        method: 'GET',
        headers: {
            'X-API-KEY': 'c9b2bdbe-6f12-40e8-a334-f6fbb5480eea',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())
        .then(json => storage.push(json))
        .catch(err => console.log(err))
    
        // console.log(database);
    let database1;
        setTimeout(()=>{database1 = storage.slice()  ;    console.log(database1)
            const modal = document.querySelector('.modal-flex')
 
    modal.insertAdjacentHTML('beforeend', ` 
    <div class="film-general searched" > 
    <div class="film-poster"> 
       <img src=${storage[i].posterUrl} alt="error"> 
       <div class="film-poster__info"style="background:${clr}"; > <div class="poster-info__time">${getTimeFromMins( storage[i].filmLength)}ч</div> 
       
       <div class="poster-info__rating">${storage[i].ratingKinopoisk}</div> </div> 
      </div> 
    <h2 align = "center">${storage[i].nameRu}</h2> 
      </div>`)
    
        },90)
    
    } 


function getTimeFromMins(mins) {
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    if(minutes<10&&minutes>0){
        minutes= `0${minutes}`
    }
    return hours + ':' + minutes;
  };


// const search = document.querySelector('#search')

// search.addEventListener('submit',(e)=>{
//     e.preventDefault()
//     console.log(search.value);
// })
let search =[];
setTimeout( function getPropertiesOfFilm(){

let ar = document.querySelectorAll(".film-general")
ar.forEach((it,i)=>{
    it.addEventListener('click',()=>{
       const obj= database[i]
const strng =  JSON.stringify(obj)
 localStorage.setItem('lastClickedFilm',strng)
 window.location.href = '../player/playerr/player.html';
console.log('ok');

    })
})

},2000)

document.querySelector('#search').addEventListener('submit',(e)=>{
e.preventDefault()

const maodal = document.querySelector('.modal-win-search')
maodal.style.display='flex'
const value = document.querySelector('#input').value
console.log(value);
fetch(`https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=${value}&page=1`, {
method: 'GET',
headers: {
'X-API-KEY': 'c9b2bdbe-6f12-40e8-a334-f6fbb5480eea',
'Content-Type': 'application/json',
},
})
.then(res => res.json())
.then(json => search.push(json))
.catch(err => console.log(err))
setTimeout(()=>{let search1= search.slice()




const idds =[]
search1[0].films.forEach((i,ii)=>{idds.push(i.filmId)})
console.log(idds);
let i =0;
let interval= setInterval(()=>{daa(idds[i],i);++i;

if(i==idds.length){
clearInterval(interval)
}
},400)
console.log(search1[0].films);



setTimeout( function getPropertiesOfFilm(){

let ar = document.querySelectorAll(".searched")
ar.forEach((it,i)=>{
    it.addEventListener('click',()=>{
       const obj= storage[i]
const strng =  JSON.stringify(obj)
 localStorage.setItem('lastClickedFilm',strng)
 window.location.href = '../player/playerr/player.html';
console.log('ok');

    })
})

},2000)



},100)



// let i =0;
// let interval= setInterval(()=>{da(idd[i],i,flms);++i;

// if(i==4){
//     clearInterval(interval)
// }





})
function deleteDiv(){
const ele  = document.querySelectorAll('.searched')
ele.forEach((it,i)=>{it.parentNode.removeChild(it)})
}
document.querySelector('.cross-search').addEventListener('click',()=>{
const maodal = document.querySelector('.modal-win-search')
maodal.style.display='none'
storage.splice(0,storage.length)
search.splice(0,search.length)
deleteDiv()
console.log(storage.length);

})