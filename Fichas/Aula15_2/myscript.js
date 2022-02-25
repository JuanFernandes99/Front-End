		let lista = { "alunos": [{ "Nome": "Alda", "Idade": 25, "Cabelo": "preto" }, { "Nome": "ivone", "Idade": 30, "Cabelo": "amarelo" }] };
		let alunos = lista.alunos;

		document.getElementById("myBtn").addEventListener("click", function() {

		    for (key in alunos) {

		        let aluno = alunos[key];

		        createPara(aluno, 'Nome');
		        createPara(aluno, 'Idade');
		        createPara(aluno, 'Cabelo');
		    }


		});


		function createPara(aluno, key) {
		    const para2 = document.createElement("p");
		    const node2 = document.createTextNode(key + " " + aluno[key]);
		    para2.appendChild(node2);

		    const element = document.getElementById("inf");
		    element.appendChild(para2);
		}