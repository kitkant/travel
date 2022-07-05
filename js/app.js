const picks = document.querySelectorAll('.pick')

const clearPick = () =>{
    picks.forEach(event =>{
        event.classList.remove('main-pick')
    })
}
picks.forEach( slide => {
    
    slide.addEventListener("click", () => {
        clearPick()
        slide.classList.add("main-pick")
    })
})

