/* L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
I numeri nella lista delle bombe non possono essere duplicati.
In seguito l'utente clicca su una cella: 
se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso 
e la partita termina, altrimenti la cella cliccata si colora di azzurro e 
l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o 
raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, 
cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
BONUS:
1- quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle
2- quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste */


//richiamo il bottone dall'HTML
const playButton = document.getElementById('playButton');
let numeroCell;
const NUMBOMBE = 16;
const bombePosition = [];
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


// L'utente clicca su un bottone 
playButton.addEventListener('click', play());

const livelloPulito = document.getElementById('difficolta');
livelloPulito.innerHTML = ''; //per tenere pulito quando cambi livello e quindi griglia

const livelloHTML = document.getElementById('difficolta');
const livello = livelloHTML.value ;

switch(livello){
    case '1':
    default: 
       numeroCell = 100
    break;
    case '2':
       numeroCell = 81 
    break;
    case '3': 
        numeroCell = 49
    break;       
}
//prendo tutta la griglia e ci metto dentro le 16 bombe randomiche
while(bombePosition.lenght < NUMBOMBE){
    const bombe = randomNumber(1, numeroCell);
    if(!bombePosition.includes(bombe)){
        bombePosition.push(bombe);
    }
}
console.log(bombePosition);

punteggio = numeroCell - NUMBOMBE;

function clickCella (){
    const span = querySelector('span');
    const num = parseInt(span.textContent);
    removeEventListener('click', clickCella);
    if (bombePosition.includes(num)){
            span.classList.add('color-bombe');
            fineGioco();
    } else {
        span.classList.add('color-celle');
        tentativiMax++
        console.log(tentativiMax)
        if(tentativiMax === punteggio){
            fineGioco();
        }
    }
}

