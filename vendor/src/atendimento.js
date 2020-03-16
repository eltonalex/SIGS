// import axios from '../../node_modules/axios/lib/core/Axios';

var botao = document.getElementById('cadastrar');
var nome = document.getElementById('inputNome');
var atendente = document.getElementById('inputAtendente');
var formaAtendimento = document.getElementById('inputFormaAtendimento');
var situacao = document.getElementById('inputSituacao');
var descricao = document.getElementById('inputDescricao');


botao.addEventListener('click', cadastrarAtendimento);
nome.value = localStorage['name']
console.log(localStorage['name'])

async function cadastrarAtendimento() {
    console.log('nome: ', nome.value);
    console.log('atendente: ', atendente.value);
    console.log('formaAtendimento: ', formaAtendimento.value);
    console.log('situacao: ', situacao.value);
    console.log('descricao: ', descricao.value);

    let request = {
        "idLogin": localStorage['_id'],
        "nome": nome.value,
        "atendente": atendente.value,
        "formaAtendimento": formaAtendimento.value,
        "situacao": situacao.value,
        "descricao": descricao.value
    };

    await axios.post('http://localhost:3339/newattendance/', request)
        .then(function (response) {
            console.log('salvo com sucesso', response)
            _populaTabela();
            nome.value = '';
            atendente.value = '';
            formaAtendimento.value = -1;
            situacao.value = -1;
            descricao.value = '';
        });
}

_populaTabela();

async function _populaTabela() {
    let dadosTabela = [{}]
    await axios.get(`http://localhost:3339/newattendance/${localStorage['_id']}`)
        .then(function (response) {
            console.log('leu dados', response['data']['atendimento'])
            dadosTabela = response['data']['atendimento']
        });

    var table = document.getElementById('tabela');
    var tableBody = document.createElement('tbody');

    dadosTabela.forEach((rowData) => {
        console.log(rowData)
        var row = document.createElement('tr');

        var nome = document.createElement('td');
        nome.appendChild(document.createTextNode(rowData['nome']));
        row.appendChild(nome);

        var atendente = document.createElement('td');
        atendente.appendChild(document.createTextNode(rowData['atendente']));
        row.appendChild(atendente);

        var forma_atendimento = document.createElement('td');
        forma_atendimento.appendChild(document.createTextNode(rowData['formaAtendimento']));
        row.appendChild(forma_atendimento);

        var situacao = document.createElement('td');
        situacao.appendChild(document.createTextNode(rowData['situacao']));
        row.appendChild(situacao);

        var descricao = document.createElement('td');
        descricao.appendChild(document.createTextNode(rowData['descricao']));
        row.appendChild(descricao);

        tableBody.appendChild(row)
    })
    table.appendChild(tableBody);
}