/* L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe; */



//richiamo il bottone dall'HTML
const playButton = document.getElementById('playButton');

function play (){
    console.log('inizio gioco...')
    const numeroCell = 100;
    
    function Celle(numeroCell){
        const cell = document.createElement('div');
        cell.className = 'square';
        cell.innerHTML = `
        <span>${numeroCell}<span>
        `;
        return cell;
    }

    // al click del bottone si genererà la griglia di gioco. 
    function campoMinato(){
        const campoGioco = document.getElementById('campoDiGioco'); 
        const grid = document.createElement('div');
        grid.className = 'grid' //griglia
        for (let i= 1; i<= 100; i++){
            const cella =  numeroCell(i);
            grid.appendChild(cell);
        }
        campoGioco.appendChild(grid);
    }
   
}
 
//chiamo la funzione fuori dalla funzione stessa
play();

// L'utente clicca su un bottone 
playButton.addEventListener('click', playButton);


   





// Ogni cella ha un numero progressivo, da 1 a 100.
