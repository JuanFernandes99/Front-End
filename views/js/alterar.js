document.getElementById('change').addEventListener("click", function() { // faz um pedido set users para mudar valores
    //quando fazer click acontece :
    document.getElementById('modal').style.display = 'none'; // esconde a janela de modal
    var name = document.getElementById('i-name').value; // input novo
    var password = document.getElementById('i-password').value;
    var id = document.getElementById('i-id').value;

    // mete numa string os dados para enviar 
    var data = 'password=' + password + '&id=' + id + '&name=' + name;


    const xhttp = new XMLHttpRequest();
    xhttp.open('POST', "/setUser"); // abre ligaçao post (setUser)
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8'); // para conseguer receber

    xhttp.onload = function() {
        console.log(this.responseText); // no sucesso do pedido , da uma resposta  que vai ser aquel user com os dados alterados 
    }

    xhttp.send(data); // envia os dados 
    location.reload(); // refresh pagina 
});