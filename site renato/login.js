const signupBtn = document.getElementById('signupBtn');
const loginBtn = document.getElementById('loginBtn');
const nameField = document.getElementById('nameField');
const title = document.getElementById('title');

signupBtn.onclick = function () {
    nameField.style.display = 'block';
    title.innerHTML = 'Cadastro';
    signupBtn.classList.remove('disable');
    loginBtn.classList.add('disable');
};

loginBtn.onclick = function () {
    nameField.style.display = 'none';
    title.innerHTML = 'Login';
    signupBtn.classList.add('disable');
    loginBtn.classList.remove('disable');
};
