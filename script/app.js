document.addEventListener('DOMContentLoaded', function(){

    const titulo = document.querySelector('.tltle');
    const sorteio_button = document.querySelector('.raffle-button');
    const celulas_table = document.querySelectorAll('.cell-table-numbers');
    const texto_sorteio_button = document.querySelector('.raffle-button-text');

    titulo.addEventListener("click", reset);
    sorteio_button.addEventListener("click", raffle);

    function reset(){
        location.reload();
    }

    function raffle(){
        let numbers = [];

        let number_raffle = Math.floor(Math.random() * 75);

        texto_sorteio_button.style.display = "none";

        
        if (numbers.indexOf(number_raffle) == -1 && number_raffle > 1){

            numbers.push(number_raffle);
            sorteio_button.innerHTML = 
            `<p class="raffle-button-number"> ${number_raffle} <p>`
        
            markNumber(number_raffle);

        } else {
            raffle();
        }

        setTimeout(function() { trocaTexto(number_raffle) }, 2500);
        clearTimeout(200);

    }

    function trocaTexto(num){
        texto_sorteio_button.style.display = "inline";
        sorteio_button.innerHTML = 
        `<p class="raffle-button-text"> Sortear um número <p>`

    }


    function markNumber(num){
        console.log("numero", num);
        celulas_table[num-1].style.background = "var(--red-50)";
        texto_sorteio_button.style.display = "block";
    }
});