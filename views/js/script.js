function showPassword() {
    var x = document.getElementById("i-password");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
}

function printUserObjects(users) {
    const divEl = document.getElementById('prt-obj');
    document.getElementById('btn-mostrar-users').addEventListener('click', function() {
        divEl.innerHTML = `<pre><code>${printAllUsers(users)}</code></pre>`;
    });
}

function printUserModal(users) {
    const divEl = document.getElementById('modal-users');
    document.getElementById('btn-mostrar-users-modal').addEventListener('click', function() {
        document.getElementById('modal-users').style.display = 'block';
        divEl.innerHTML = '<button id="close" type="button">testes</button>';
        divEl.innerHTML += `<pre><code>${printAllUsers(users)}</code></pre>`;
        document.getElementById('close').addEventListener('click', function() {
            //quando fazer click acontece :
            document.getElementById('modal-users').style.display = 'none';
        });
    });
}

function printAllUsers(users) {
    let result = '';
    for (let i = 0; i < users.length; i++) {
        let user = users[i];

        result +=
            'id: ' +
            user.id +
            '\nname: ' +
            user.name +
            ',\nprofession: ' +
            user.profession +
            '\n\n';
    }
    return result;
}