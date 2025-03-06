//Criando uma lista vazia
let listaAmigosSorteio = [];

//Validar apenas nomes/string
let nomeValido = /^[A-Za-zÀ-ÿ\s]+$/;

//Limpa a caixa de input
function limparCampo() {
    document.getElementById("amigo").value = "";
}

//Limpa a ul de listAmigos
function limparUllistaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
}

//Limpa a ul de resultado
function limparUlresultado() {
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
}

//Cria a lista de amigos para sortear
function adicionarAmigo() {
    let amigosSorteio = document.getElementById('amigo').value.trim();
        //Verifica se o input não está vazio
        if (amigosSorteio !== "" && nomeValido.test(amigosSorteio)) {
            listaAmigosSorteio.push(amigosSorteio);
            //Cria um novo elemento li
            let novoItem = document.createElement("li");
            novoItem.textContent = amigosSorteio;
    
            //Adiciona o novo item a lista ul
            let lista = document.getElementById("listaAmigos");
            lista.appendChild(novoItem);
            
            //Limpa o campo de entrada
            limparCampo();
            //Limpa a ul que é enviada ao clicar no sorteio sem nenhum nome na lista
            limparUlresultado();
        } else {
            alert("Por favor, digite um nome válido! O nome não pode conter números.");
            limparCampo();
        }
}

function sortearAmigoSemRepetir() {
    //Verifica se ainda há amigos na lista
    if (listaAmigosSorteio.length === 0) {
        let resultadoLista = document.getElementById("resultado");
        resultadoLista.innerHTML = "";

        let novoItem = document.createElement("li");
        novoItem.innerHTML = `Não há mais amigos para sortear. <br>Ou você ainda não digitou nenhum amigo!`;
    
        let amigoSecreto = document.getElementById("resultado");
        amigoSecreto.appendChild(novoItem);
        return;
    }

    //Gera um número aleatório entre 0 e o comprimento da lista menos 1
    let indiceSorteado = Math.floor(Math.random() * listaAmigosSorteio.length);

    //Limpa a lista de amigos antes de exibir o resultado
    limparUllistaAmigos();
    
    //Limpa a lista de resultados anteriores
    limparUlresultado();

    //Seleciona o item sorteado da lista
    let amigoSorteado = listaAmigosSorteio[indiceSorteado];

    //Exibe o amigo secreto que foi sorteado dentro da ul
    let novoItem = document.createElement("li");
    novoItem.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;

    let amigoSecreto = document.getElementById("resultado");
    amigoSecreto.appendChild(novoItem);

    //Remove o amigo sorteado da lista
    listaAmigosSorteio.splice(indiceSorteado, 1);
}

function sortearAmigo() {
    //Chama a função para sortear
    sortearAmigoSemRepetir();
}
