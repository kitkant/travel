const body = document.querySelector('body')
const header = document.querySelector('.header')
const main = document.querySelector('.main')
const footer = document.querySelector('.footer')
const login = document.querySelector('.login')

const btnFb = document.querySelector('.btn_fb')
const formElement = document.getElementById('login')
const btnG = document.querySelector('.btn_g')
const linkPasword = document.querySelector('.link_pasword')
const textRegiser = document.querySelector('.text_regiser')
const loginBtn = document.querySelector('.login-btn')
const headerBtn = document.querySelector('.header-btn')

const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
let div = document.createElement('div');
let state = 0
let mail = ''
let password = ''

const changeState = (n) => state = n

const createOops = () =>{
    div.className = "else_login";
    div.innerHTML = 
   `<div class="else_login">
        <div class="else_page">
        </div>
        <p class="else_text"><strong>Oops...</strong> Database has left the chat</p>
        <hr class="row">
        <button class="else_btn">Click</button>
    </div>`
document.body.append(div)
}

const addDisplay = () =>{
    header.classList.add('display')
    main.classList.add('display')
    footer.classList.add('display')
    login.classList.remove('display')
 
}

const notValidData = () =>{
    alert('Введите все данные')
}

const registerForm = () =>{
    btnFb.innerHTML = '<span class="logo_socialF"></span>Sign Up with Facebook'
    btnG.innerHTML = '<span class="logo_socialG"></span>Sign Up with Google'
    loginBtn.innerHTML = 'Sign UP'
    linkPasword.classList.add('display')
    textRegiser.innerHTML = 'You have account?<a class="sign_in_link" href="#">Sign In</a>'
}
const loginForm = () =>{
    btnFb.innerHTML = '<span class="logo_socialF"></span>Sign In with Facebook'
    btnG.innerHTML = '<span class="logo_socialG"></span>Sign In with Google'
    loginBtn.innerHTML = 'Sign In'
    linkPasword.classList.remove('display')
    textRegiser.innerHTML = 'Don’t have an account?<a class="register_link" href="#">Register</a>'
}

const removeDisplay = () =>{
    header.classList.remove('display')
    main.classList.remove('display')
    footer.classList.remove('display')
    login.classList.add('display')
    div.remove()
    loginForm()

    if(state){
        alert(`Dot'n forget your Data
        E-mail: ${mail}, 
        Password: ${password}`)
        changeState(0)
        mail = ''
        password = ''
    }
}




loginBtn.addEventListener('click', event =>{
    
    event.preventDefault()

    const formData = new FormData(formElement); 
    
    mail = formData.get('mail');
    password = formData.get('password');

    if(mail === '' || password === ''){  
        notValidData()}
    else if(!reg.test(mail)) {
        alert('Введите корректный e-mail');
    } else
    {
        login.classList.add('display')
        createOops()
        changeState(1)
    }
    

})


headerBtn.addEventListener('click', () => addDisplay())

document.addEventListener('keydown', event => {
	if( event.key === "Escape")
		removeDisplay()
        
});

document.addEventListener('click', (target)=>{

    switch(target.path[0]) {
        case document.querySelector("body"):
            removeDisplay()
            break
        case document.querySelector('.sign_in_link'):
            loginForm()
            break
        case  document.querySelector('.register_link'):
            registerForm()
            break
        case document.querySelector('.else_btn'):
            alert('...')
            break
        }
})






