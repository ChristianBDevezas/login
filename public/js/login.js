let loginForm = document.querySelector('.login');
let fieldEmail = document.getElementById('email-login');
let fieldSenha = document.getElementById('password');

// console.log(location.origin);
// console.log(location.pathname);
// console.log(location.pathname.split('/'));
// console.log(location.pathname.split('/').slice(0, 1));
// console.log(location.pathname.split('/')[1]);
// console.log(location.origin + '/' + 'index.html');

const receberRetornoServidor = () => {
    return Promise.resolve({
        nome: fieldEmail.value.split('@')[0]
    });
}

const redirecionar = () => {
    const path = location.pathname.split('/').slice(0, 1);
    path.push('index.html');
    location.href = location.origin + path.join('/');
    // location.href = path.join('/');

    // const newPage = '/index.html';
    // location.href = location.origin + newPage;
}

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    if(fieldEmail.value == '') {
        document.querySelector('.err-login-email').classList.remove('invisible')
    } else {
        document.querySelector('.err-login-email').classList.add('invisible')
    }

    if(fieldSenha.value.length < 6) {            
        document.querySelector('.err-login-password').classList.remove('invisible')
    } else {
        document.querySelector('.err-login-password').classList.add('invisible')
    }

    if(fieldEmail.value !== '' && fieldSenha.value.length >= 6) {
        receberRetornoServidor()
        .then(resultado => {
            sessionStorage.setItem('usuario', "Olá, " + resultado.nome);
            redirecionar();
        });

        loginForm.reset();
    }
});

// let registerForm = document.querySelector('.form-cadastro');
// let registerInputs = document.querySelectorAll('.form-cadastro input');
// let registerCheckboxes = document.querySelectorAll('.form-cadastro input[type="checkbox"]');
// let registerCheckbox1 = document.getElementById('ciente');
// let registerCheckbox2 = document.getElementById('maiorque18');

// let state = false;

// registerForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     registerInputs.forEach(input => {
//         if(input.type !='checkbox')
//         if(input.value == '') {
//             document.querySelector('.err-register-' + input.name).classList.remove('invisible');
//         } else {
//             document.querySelector('.err-register-' + input.name).classList.add('invisible');
//             state = true;
//         }
//     });

//     registerCheckboxes.forEach(input => {
//         if(input.checked == false){
//             document.querySelector('.err-register-' + input.name).classList.remove('invisible');
//         } else{
//             document.querySelector('.err-register-' + input.name).classList.add('invisible');
//         }
//     });

//     if(state == true && registerCheckbox1.checked && registerCheckbox2.checked) {
//         registerForm.reset();
//         document.querySelector('.mensagem-cadastro').style.display ='block';
//         setTimeout(() => document.querySelector('.mensagem-cadastro').style.display ='none', 4000);
//     }
// });