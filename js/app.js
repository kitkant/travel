const picks = document.querySelectorAll('.pick')
const slides = document.querySelectorAll('.slide')
const logo = document.querySelector('.logo')

const menuIcon = document.querySelector('.menu_icon')
const burgerEsc = document.querySelector('.burger-esc')
const burger = document.querySelector('.burger')

const storiesImgs = document.querySelectorAll('.stories-img')
const sectionCardText = document.querySelectorAll('.section-card_text')

const screenWidth = window.screen.availWidth

const contry = {
    0: '../src/slider/spain.jpg',
    1: '../src/slider/japan.jpg',
    2: '../src/slider/usa.jpg'
}
var myImage = new Image();
myImage.src = contry[0];


picks.forEach( (pick, index) => {
    
    pick.addEventListener("click", () => {
        cleareActiveSlide()
        clearPick()
        activeSlide(index)
        pick.classList.add("main-pick")

    })
})
const changeImg = () => {
    console.log(window.screen.availWidth)
    if( window.screen.availWidth <= 390)
    {
        storiesImgs.forEach((img, index) =>  {
        img.src = `src/mobile/storiese/card${index + 1}.png`
         
            })
    }
    if(window.screen.availWidth > 390){
        console.log('s1s')
        storiesImgs.forEach((img, index) =>  {
            img.src = `src/storiese/card${index + 1}.jpg`
            console.log('ss')
            })
    }
}
const changeText = () =>{
    if( window.screen.availWidth <= 390)
    {
        sectionCardText.forEach( text =>{
            text.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.Lorem ipsum dolor sit a...'
        })
    }
    if(window.screen.availWidth > 390){
        sectionCardText.forEach( text =>{
            text.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit...'
        })
    }
   
}

console.log(storiesImgs[0].src)

function app(){
    if (window.screen.availWidth <= 390) {
        document.querySelector('.card_img_1').src = "src/mobile/steps/bike.svg";
        document.querySelector('.card_img_2').src = "src/mobile/steps/calendar.svg";
        document.querySelector('.card_img_3').src = "src/mobile/steps/plane.svg";
        
        changeText()
        clearPick()
        changeImg()
        picks[0].classList.add('main-pick')
      }
      else{
        
        document.querySelector('.card_img_1').src = "src/bike.svg";
        document.querySelector('.card_img_2').src = "src/calendar.svg";
        document.querySelector('.card_img_3').src = "src/plane.svg";
      }
}

function cleareActiveSlide(){
    slides.forEach((slide, index)=>{
        for(let i = 0; i <= 2; i++)
        {
            slide.classList.remove(`${contry[i]}`)
        }
        
    })
}
const clearPick = () =>{
    picks.forEach(event =>{
        event.classList.remove('main-pick')
    })
}

function activeSlide(num){
        slides[1].classList.add(`${contry[num]}`)
            
}

menuIcon.addEventListener('click', ()=>{
    burger.classList.add('_active')
})
burgerEsc.addEventListener('click', ()=>{
    burger.classList.remove('_active')
})
document.addEventListener('click', target=>{
    if(target.path[0] !== burger && target.path[0] !== menuIcon){
        burger.classList.remove('_active')
         
    }
        
})
window.addEventListener('resize', ()=>{
    if (window.screen.availWidth <= 390) {
        document.querySelector('.card_img_1').src = "src/mobile/steps/bike.svg";
        document.querySelector('.card_img_2').src = "src/mobile/steps/calendar.svg";
        document.querySelector('.card_img_3').src = "src/mobile/steps/plane.svg";

        changeText()
        changeImg()
       
        clearPick()
        picks[0].classList.add('main-pick')
      }
      else{
        document.querySelector('.card_img_1').src = "src/bike.svg";
        document.querySelector('.card_img_2').src = "src/calendar.svg";
        document.querySelector('.card_img_3').src = "src/plane.svg";
        changeImg()
        changeText()
    }
      
})

app()