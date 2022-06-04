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
  
    headerColor.style.background = `${clr}`
  mainCtgContainer.style.background = `${clr}`
  ul.style.background=`${clrOpacity}`

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
let actt =[]
const actorInfo = []
let actorId = JSON.parse(localStorage.getItem('actorObj'))

actorId = actorId.staffId
let database =[]


fetch(`https://kinopoiskapiunofficial.tech/api/v1/staff/${actorId}`, {
    method: 'GET',
    headers: {
        'X-API-KEY': 'c9b2bdbe-6f12-40e8-a334-f6fbb5480eea',
        'Content-Type': 'application/json',
    },
})
    .then(res => res.json())
    .then(json => actorInfo.push(json))
    .catch(err => console.log(err))

    setTimeout(()=>{
        actt = actorInfo.slice()
const birth =document.querySelector('.birth')
const birthPlace =document.querySelector('.place-birth')
const death =document.querySelector('.death')
const deathPlace =document.querySelector('.place-death')
const photo =document.querySelector('.photo')
const facts =document.querySelector('.facts__actor')
const name =document.querySelector('.name')
const marryInfo =document.querySelector('.marry__info')
birth.innerHTML=`<p class="iinfo">Дата роджения:${ actt[0].birthday}</p>`
birthPlace.innerHTML=`<p class="iinfo">Место роджения: ${actt[0].birthplace}</p>`

if (actt[0].death!=null) {
    death.innerHTML=`<p class="iinfo">Дата смерти:${actt[0].death}</p>`
deathPlace.innerHTML=`<p class="iinfo">Место смерти:${actt[0].deathplace}</p>`
}

photo.innerHTML=`<img id="cart" src=${actt[0].posterUrl}>`
name.innerHTML=`${actt[0].nameRu}`

actt[0].facts.forEach((i,ii)=>{
facts.insertAdjacentHTML('beforebegin',`<p class="margin-bot" >${ii+1}.${i},</p>`)

})
if (actt[0].spouses.length ==0) {
    marryInfo.insertAdjacentHTML('beforebegin',`<div class="margin-bot"> Не был женат
    </div>`)
}else{
actt[0].spouses.forEach((i,ii)=>{
   
let divorced;
if(actt[0].spouses[ii].divorced!=false){
    divorced='разведен'
}else{
    divorced='женат'
}
    marryInfo.insertAdjacentHTML('beforebegin',`<div class="margin-bot">  ${actt[0].spouses[ii].relation}: ${  actt[0].spouses[ii].name  }, ${actt[0].spouses[ii].children} детей ,${divorced}<br>
  </div>`)
    

})}
const arrors = document.querySelector('.button_1')
const infoFacts =  document.querySelector('.facts')

arrors.addEventListener('click',()=>{
    if(infoFacts.classList.contains('none')){
        document.querySelector('.arror').innerHTML='🔼'
infoFacts.classList.remove('none')}
else{
    infoFacts.classList.add('none')
    document.querySelector('.arror').innerHTML='🔽'
}

})



console.log()
const idd =[]
actt[0].films.slice(0,5).forEach((i,ii)=>{idd.push(i.filmId)})
console.log(idd);


let i =0;
let interval= setInterval(()=>{da(idd[i],i,flms);++i;

if(i==4){
    clearInterval(interval)
}
},400)




const flms = document.querySelector('.films')



        console.log(actt[0])},100)



        function da(id,i,flms){
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
            
         
            flms.insertAdjacentHTML('beforeend', ` 
            <div class="film-general" > 
            <div class="film-poster"> 
               <img src=${database[i].posterUrl} alt="error"> 
               <div class="film-poster__info"style="background:${clr}"; > <div class="poster-info__time">${getTimeFromMins( database[i].filmLength)}ч</div> 
               
               <div class="poster-info__rating">${database[i].ratingKinopoisk}</div> </div> 
              </div> 
            <h2 align = "center">${database[i].nameRu}</h2> 
              </div>`)
            
                },90)
            
            } 

         let storage =[]

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
                
                    console.log(database);
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



})