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
    // const path = location.pathname.split('/').slice(0, 2);
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
    }
    else {
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