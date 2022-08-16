const picks = document.querySelectorAll('.pick')
const slides = document.querySelectorAll('.slide')
const slideText = document.querySelectorAll('.slide_text')
const container = document.querySelector('.slide_container')
const logo = document.querySelector('.logo')

const menuIcon = document.querySelector('.menu_icon')
const burgerEsc = document.querySelector('.burger-esc')
const burger = document.querySelector('.burger')

const storiesImgs = document.querySelectorAll('.stories-img')
const sectionCardText = document.querySelectorAll('.section-card_text')

const slideLeft = document.querySelector('.slide-left'),
      slideMain = document.querySelector('.slide-main'),
      slideRight = document.querySelector('.slide-right')

const screenWidth = window.screen.availWidth

let activeOrder

const DBSlides = {
    0: {
        src: './src/slider/spain.jpg',
        p: 'SPAIN'
    },
    1: {
        src: './src/slider/japan.jpg',
        p: 'JAPAN'
    },
    2: {
        src: './src/slider/usa.jpg',
        p: 'USA'
    }
}
const update = () =>{
    const {width, height} = container.getBoundingClientRect()
    for( let i = 0; i < slides.length; i++){
        const leftSlide = document.querySelector(
            `.slide[data-order="${activeOrder - i}"]`
        )
        const rightSlide = document.querySelector(
            `.slide[data-order="${activeOrder + i}"]`
        )
        console.log(leftSlide, rightSlide, activeOrder )
    }

    
}
const fillSlide = () =>{
    slides.forEach((slide, index) =>{
        slide.dataset.order = index
        slide.style.backgroundImage = `url(${DBSlides[index].src})`
        slideText[index].innerHTML = DBSlides[index].p
        slide.addEventListener('click', clickHandler(slide)) 
        
    })
    
    update()
}
 
let num = 1 + 1

//  Возможно для выхода за пределы массива
function arrNum(num) {
    if(num > arrContry.length - 1)
    {
        num = arrNum(num - arrContry.length)
    }
   return num
}
slideRight.addEventListener('click', () =>{
    
})
function clickHandler(slide){
  
    const order = parseInt(slide.dataset.order, 3)
    activeOrder = order
    update()
  
}
picks.forEach( (pick, index) => {
    
    pick.addEventListener("click", () => {
        // cleareActiveSlide()
        clearPick()
        
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
        
        storiesImgs.forEach((img, index) =>  {
            img.src = `src/storiese/card${index + 1}.jpg`
          
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



function app(){
    if (window.screen.availWidth <= 390) {
        document.querySelector('.card_img_1').src = "src/mobile/steps/bike.svg";
        document.querySelector('.card_img_2').src = "src/mobile/steps/calendar.svg";
        document.querySelector('.card_img_3').src = "src/mobile/steps/plane.svg";
        
        activeOrder = 0

        changeText()
        clearPick()
        changeImg()
        picks[0].classList.add('main-pick')
      }
      else{
        activeOrder = 1
        fillSlide()
        
        document.querySelector('.card_img_1').src = "src/bike.svg";
        document.querySelector('.card_img_2').src = "src/calendar.svg";
        document.querySelector('.card_img_3').src = "src/plane.svg";
      }
}


// function cleareActiveSlide(){
//     slides.forEach((slide, index)=>{
//         for(let i = 0; i <= 2; i++)
//         {
//             slide.classList.remove(`${contry[i]}`)
//         }
        
//     })
// }
const clearPick = () =>{
    picks.forEach(event =>{
        event.classList.remove('main-pick')
    })
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