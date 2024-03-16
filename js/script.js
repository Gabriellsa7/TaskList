let cont = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btnAdd');
let main = document.getElementById('areaLista')

btnAdd.addEventListener('click', () => {
    //Pegar valor digitado no input;
    let valorInput = input.value;

    //Se não for vazio,nem nulo, nem indefinido;
    if((valorInput !== " ") && (valorInput !== null) && (valorInput !== undefined)) {
        ++cont;

        let novoItem = ` <div id="${cont}" class="item">
            <div onclick="marcarTarefa(${cont})"  class="item-icone">
                <img id="imagem_${cont}" class="circle-outline"  src="./assets/radio_button_unchecked_black_24dp.svg" alt="">
            </div>
            <div onclick="marcarTarefa(${cont})" class="item-name">
                ${valorInput}
            </div>
            <div class="item-button">
                <button onclick="deletar(${cont})" id="delete" class="deletar">
                    <img src="./assets/delete_black_24dp.svg" alt="">delete
                </button>
            </div>
        </div>`;
        //Adicionar novo itemno main
        main.innerHTML += novoItem;

        //zerar campinhos
        input.value = " ";
        input.focus();

       
    }
} );

input.addEventListener('keyup', (e) => {
    //Se teclou no enter
    if(e.keyCode === 13) {
        e.preventDefault();
        btnAdd.click();
    }
});


function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
    cont = 0;
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe === "item"){
        item.classList.add('clicado');
        var img = document.getElementById('imagem_' + id);
        img.classList.remove('circle-outline');
        img.classList.add('check-circle ');

        //consertar erro;
        item.parentNode.appendChild(item);
    }else{
        item.classList.remove('clicado');
        var img = document.getElementById('imagem_' + id);
        img.classList.add('circle-outline');
        img.classList.remove('check-circle');
    }
}
