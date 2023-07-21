// ALTERAR CORES NAS TAGS
//const login = document.querySelector('h2');
//const btn = document.querySelector('button')

//login.style.color = 'red';
//login.style.backgroundColor = 'blue';
//btn.style.backgroundColor = 'purple'


// DIGITOU O USERNAME ERRADO

const username = document.getElementById('login-usuario');
const errormsg = document.getElementsByClassName('error-text')
const loginSenha = document.getElementById('login-senha');


username.classList.add('error')
errormsg[0].classList.add('visible');

//background color

const colorForm = document.querySelector('main');

colorForm.style.backgroundColor = 'beige';

// USUARIO ACERTOU O USERNAME MAS ERROU A SENHA



//acertou o username
username.classList.remove('error');
errormsg[0].classList.remove('visible')
username.classList.add('correct')


//errou a senha
loginSenha.classList.add('error');
errormsg[1].classList.add('visible')











