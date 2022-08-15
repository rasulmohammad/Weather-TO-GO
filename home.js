const toTopBtn = document.querySelector("#back-to-top-btn");
document.getElementById("back-to-top-btn").style.zIndex = "1"

window.addEventListener("scroll", scrollFunction);

function scrollFunction(){
    if(window.pageYOffset>300){
        toTopBtn.style.display = "block"
    }
    else{
        toTopBtn.style.display = "none"
    }
}

toTopBtn.onclick = function(event){
    event.preventDefault();
    window.scrollTo(0,0);
}

let carouselTxtMode=0

const carouselButtonPrevList=document.getElementsByClassName("carousel-control-prev")
const carouselButtonNextList=document.getElementsByClassName('carousel-control-next')
const carouselButtonPrev=carouselButtonPrevList[0]
const carouselButtonNext=carouselButtonNextList[0]
const carouselTxt=document.getElementById('carouselTxt')


carouselTxt.innerHTML=""
    
let carouselh5=document.createElement('h5')
carouselh5.innerHTML="Air pollution"

let carouselp=document.createElement('p')
carouselp.innerHTML="4.5 million deaths were linked to outdoor air pollution in 2019"

carouselTxt.append(carouselh5,carouselp)


carouselButtonPrev.onclick=function(){
  carouselTxtMode++
  console.log(carouselTxtMode)
  if(carouselTxtMode%2==0){
    carouselTxt.innerHTML=""
    
    let carouselh5=document.createElement('h5')
    carouselh5.innerHTML="Air pollution"
    
    let carouselp=document.createElement('p')
    carouselp.innerHTML="4.5 million deaths were linked to outdoor air pollution in 2019"
    
    carouselTxt.append(carouselh5,carouselp)
  }
  else{
    carouselTxt.innerHTML=""
    
    let carouselh5=document.createElement('h5')
    carouselh5.innerHTML="Climate change"
    
    let carouselp=document.createElement('p')
    carouselp.innerHTML="Between 2030 and 2050, over 250,000 additional deaths will be linked to climate change"
    
    carouselTxt.append(carouselh5,carouselp)
  }
}

carouselButtonNext.onclick=function(){
  carouselTxtMode++
  console.log(carouselTxtMode)
  if(carouselTxtMode%2==0){
    carouselTxt.innerHTML=""
    
    let carouselh5=document.createElement('h5')
    carouselh5.innerHTML="Air pollution"
    
    let carouselp=document.createElement('p')
    carouselp.innerHTML="4.5 million deaths were linked to outdoor air pollution in 2019"
    
    carouselTxt.append(carouselh5,carouselp)
  }
  else{
    carouselTxt.innerHTML=""
    
    let carouselh5=document.createElement('h5')
    carouselh5.innerHTML="Climate change"
    
    let carouselp=document.createElement('p')
    carouselp.innerHTML="Between 2030 and 2050, over 250,000 additional deaths will be linked to climate change"
    
    carouselTxt.append(carouselh5,carouselp)
  }
}


console.log(carouselButtonPrev,carouselButtonNext)
console.log(carouselTxtMode)




