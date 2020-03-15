// import axios from '../../node_modules/axios/lib/core/Axios';

var botao = document.getElementById('cadastrar');
var nome = document.getElementById('inputNome');
var atendente = document.getElementById('inputAtendente');
var formaAtendimento = document.getElementById('inputFormaAtendimento');
var situacao = document.getElementById('inputSituacao');
var descricao = document.getElementById('inputDescricao');
const dadosTabela = [{
    'nome': 'Acacio',
    'atendente': 'Looh',
    'forma_atendimento': 'Ativo',
    'situacao': 'Em aberto',
    'descricao': 'Bla bla',
},
{
    'nome': 'Pefro',
    'atendente': 'Looh',
    'forma_atendimento': 'Receptivo',
    'situacao': 'Atendido',
    'descricao': 'Bla bla 2',
}]
botao.addEventListener('click', cadastrarAtendimento);

async function cadastrarAtendimento() {
    console.log('nome: ', nome.value);
    console.log('atendente: ', atendente.value);
    console.log('formaAtendimento: ', formaAtendimento.value);
    console.log('situacao: ', situacao.value);
    console.log('descricao: ', descricao.value);

    // evt.preventDefault();
    const response = await axios.get('https://viacep.com.br/ws/07041030/json/');
    //console.log(response);
}

_populaTabela();

function _populaTabela() {
    // alert(JSON.stringify(dadosTabela))
    // var table = document.createElement('table');
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
        forma_atendimento.appendChild(document.createTextNode(rowData['forma_atendimento']));
        row.appendChild(forma_atendimento);

        var situacao = document.createElement('td');
        situacao.appendChild(document.createTextNode(rowData['situacao']));
        row.appendChild(situacao);

        var descricao = document.createElement('td');
        descricao.appendChild(document.createTextNode(rowData['descricao']));
        row.appendChild(descricao);

        tableBody.appendChild(row)

        // rowData.forEach(function (cellData) {
        //     var cell = document.createElement('td');
        //     cell.appendChild(document.createTextNode(cellData));
        //     row.appendChild(cell);
        // });

        // tableBody.appendChild(row)
    })
    table.appendChild(tableBody);
    // document.body.appendChild(table);
}