/* Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste */


//richiamo il bottone dall'HTML
const playButton = document.getElementById('playButton');
let numeroCell = 100;

//creo la funzione 
function play (){
    console.log('inizio gioco...')
    campoMinato(); 
}
//creo le celle 
function creaCelle(numero){
    const cell = document.createElement('div');
    cell.className = 'square';
    cell.innerHTML = `
    <span>${numero}<span>
    `;
    return cell;
}
// creo la griglia di gioco. 
function campoMinato(){
    const campoGioco = document.getElementById('campoDiGioco'); 
    const grid = document.createElement('div');
    grid.className = 'grid' //griglia
    for (let i= 1; i<= numeroCell; i++){
        grid.appendChild(creaCelle(i));  //campominato chiama crea celle 100 volte. 
    }
    campoGioco.appendChild(grid);
    
}
//chiamo la funzione iniziale
play();


// L'utente clicca su un bottone 
playButton.addEventListener('click', play());

