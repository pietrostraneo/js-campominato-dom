// DICHIARO UNA FUNZIONE CHE CREA LE CELLE DELLA GRIGA

function createBox(diff){

    grid.style.width = diff;

    let div = document.createElement(`div`);

    div.classList.add(`square`)

    div.addEventListener("click", function(){
        this.classList.toggle(`bg-danger`)
        console.log("Hai cliccato la cella numero " + this.innerText)
    })

    return div;
}


// RECUPERO LA GRIGLIA

let grid = document.getElementById(`grid`);

// RECUPERO IL BOTTONE PER GENERARE LA GRIGLIA

let generate = document.getElementById(`generate`)


// ESEGUO UN CICLO CHE AGGIUNGE LE CELLE ALLA GRIGLIA

generate.addEventListener("click", function(){

    // PERMETTO ALL'UTENTE DI SCEGLIERE LA DIFFICOLTA'

    let difficulty = document.getElementById(`difficulty`);


    let cellNum;
    let size;

    if(difficulty.value == 1){
        cellNum = 49
        size = "700px"
    }
    else if(difficulty.value == 2){
        cellNum = 81
        size = "900px"
    }
    else if(difficulty.value == 3){
        cellNum = 100
        size = "1000px"
    }

    grid.innerHTML = "";

    for(let i = 0; i<cellNum; i++){

        let cell = createBox(size);
    
        grid.appendChild(cell);
    
        cell.innerText = i+1;
    
    }
})

