function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        //document.getElementById("demo").innerHTML =

        var users = JSON.parse(this.responseText).user; //Agora com o JSON.parse convertemos a stirng json em json recebe a resposta
        //do servidor (this.responsetext) em JSON string
        insereTabela(users);
        ocultarColuna(1);
        mostrarTabela();
        mostarColuna(1);
        ocultarTabela();
        printUserModal(users);
    }
    xhttp.open("GET", "/listUsers"); // pedido get ( faz a ligaçao)
    xhttp.send();
}

function insereTabela(users) { // para melhorar o codigo

    var table = document.getElementById("table");


    users.forEach(function(element, index) { // element o object do json, e o index do array json

        // ya la proxima vuelta incrementa o index, e va a la proxima fila e assim sucesivamente

        var row = table.insertRow(index + 1); // esta a criar uma row para inserir  celulas sempre dentro deste row (fila)

        insertCell(row, 0, "<button id='" + index + "'>Alterar dados</button>"); // chama a funçao de em baixo (insert cell)  e cria um button
        insertCell(row, 0, element.id); // igual a de emcima, coloca o id do json
        insertCell(row, 0, element.password); // igual a de emcima, coloca a password do json
        insertCell(row, 0, element.profession); // igual a de emcima, coloca o nome do json
        insertCell(row, 0, element.name); // igual a de emcima, coloca o nome do json

    });
    //depois de acabar o for each, vai entrar nesta funçao addeventbutton
    // no button de detalhe para  passar cada users
    addEventButton(users);
}

function insertCell(row, index, value) { // row (fila) -  index(celula)  - value (valor)
    var cell1 = row.insertCell(index);
    cell1.innerHTML = value; // no html va a meter um valor
}

function addEventButton(users) {
    users.forEach(function(element, index) { // vai buscar o botao com o index que definimos emcima no button id + index
        let btn = document.getElementById(index);
        btn.addEventListener("click", function() { //vai meter um event click
            document.getElementById('modal').style.display = 'block' // vai mostrar a modal (html) com style block 
            document.getElementById('i-name').value = element.name; // vai mostrar no modal o nome do elemento e assim sucesivamente
            document.getElementById('i-password').value = element.password;
            document.getElementById('i-id').value = element.id;
        });
    });
}

function ocultarColuna(numColuna) {
    document.getElementById('btn-ocultar-coluna').addEventListener('click', function() {
        [
            //... cria array
            ...document.querySelectorAll( // converter em lista
                `table td:nth-child(${numColuna}), table th:nth-child(${numColuna})`
            ),
        ].forEach((el) => (el.style.display = 'none'));

        //el > element
    });
}

function mostarColuna(numColuna) {
    document.getElementById('btn-mostrar-coluna').addEventListener('click', function() {
        [
            //... cria array
            ...document.querySelectorAll( // converter em lista
                `table td:nth-child(${numColuna}), table th:nth-child(${numColuna})`
            ),
        ].forEach((el) => (el.style.display = ''));

        //el > element
    });
}

function ocultarTabela() {
    document.getElementById('btn-ocultar-tabela').addEventListener('click', function() {
        document.getElementById("table").style.display = 'none';

    });
}

function mostrarTabela() {
    document.getElementById('btn-mostrar-tabela').addEventListener('click', function() {
        document.getElementById("table").style.display = 'table';

    });
}
loadDoc();