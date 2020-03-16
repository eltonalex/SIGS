var botaoLogin = document.getElementById('botaoLogin');
botaoLogin.addEventListener('click', login);
var msgErro = document.getElementById('msgErro');

async function login() {

    var name = document.getElementById("inputName");
    console.info(name.value)
    await axios.get(`http://localhost:3339/login/${name.value}`)
        .then(response => {
            console.log(response["data"]["user"][0]["_id"]);
            localStorage.setItem('_id', response["data"]["user"][0]["_id"]);
            localStorage.setItem('name', response["data"]["user"][0]["name"]);
            window.location.href = "index.html";
        })
        .catch(erro => {
            console.error(erro);
            msgErro.innerHTML = "Erro ao efetuar login!"
        });
}

async function cadastrar_login() {
    await axios.post('http://localhost:3339/login/', { name: document.getElementById("inputName") })
        .then(function (response) {
            console.log('login salvo com sucesso', response)
            console.log(response["data"]["user"][0]["_id"]);
            localStorage.setItem('_id', response["data"]["user"][0]["_id"]);
            localStorage.setItem('name', response["data"]["user"][0]["name"]);
            window.location.href = "index.html";
        });
}