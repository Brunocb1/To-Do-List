const button = document.querySelector('.button-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let minhalistadeitens = []

function adicionarnovatarefa() {
    minhalistadeitens.push({
        tarefa: input.value,
        concluida: false
    })

    input.value = ''

    mostrarTarefas()

}

function mostrarTarefas() {
    let novaLi = ''

    minhalistadeitens.forEach((item, index) => {

        novaLi = novaLi + `
            
        <li class="task ${item.concluida && "done"}">
                <img src="./img/joinha.jpg" alt="joia-na-tarefa" onclick="concluirTarefa(${index})">
                    <p>${item.tarefa}</p>
                    <img src="./img/lixeira.png" alt="lixo-na-tarefa" onclick="deletaritem(${index})">
                    </li>
                    
                    `
    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(minhalistadeitens))
}

function concluirTarefa(index) {
    minhalistadeitens[index].concluida = !minhalistadeitens[index].concluida

    mostrarTarefas()

}

function deletaritem(index) {
    minhalistadeitens.splice(index, 1)
    mostrarTarefas()
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if(tarefasDoLocalStorage){
    minhalistadeitens = JSON.parse(tarefasDoLocalStorage)
    }

    mostrarTarefas()
}
recarregarTarefas()

button.addEventListener('click', adicionarnovatarefa)