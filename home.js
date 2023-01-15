// The back to top button appears at the bottom of the home page, and takes the user back to the top of the page.
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


// The following code below controls the text that is displayed underneath the sliding images when the media display is small enough.
let carouselTxtMode=0

const carouselButtonPrevList=document.getElementsByClassName("carousel-control-prev")
const carouselButtonNextList=document.getElementsByClassName('carousel-control-next')
const carouselButtonPrev=carouselButtonPrevList[0]
const carouselButtonNext=carouselButtonNextList[0]
const carouselTxt=document.getElementById('carouselTxt')
    
let carouselh5=document.createElement('h5')
carouselh5.innerHTML="Air pollution"

let carouselp=document.createElement('p')
carouselp.innerHTML="4.5 million deaths were linked to outdoor air pollution in 2019"

carouselTxt.append(carouselh5,carouselp)

// Whenever the carousel previous or next buttons are clicked, the carousel mode increments by 1. If this number is even, it displays the air pollution text. If odd, it displays the climate change text.
carouselButtonPrev.onclick=function(){
    carouselTxtMode++
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
