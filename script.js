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
let numeroCelleTotali;
const NUMBOMBE = 16;
const bombePosition = [];
// L'utente clicca su un bottone 
playButton.addEventListener('click', play);
//richiamo il contenitore del gioco
const campoGioco = document.getElementById('campoDiGioco');
//creo la funzione per il btnplay che mi permette di avere le griglie diverse in base al livello scelto

function play(){
    campoGioco.innerHTML=''; //prima di tutto pulisco la griglia in modo che non mi compare 2 o più volte
    console.log('inizio gioco...')
    const livelloHTML = document.getElementById('livello');
    const livello = livelloHTML.value ;
    
    switch(livello){
        case '1':
        default: 
           numeroCelleTotali = 100
        break;
        case '2':
           numeroCelleTotali = 81 
        break;
        case '3': 
            numeroCelleTotali = 49
        break;       
    }
    //prendo tutta la griglia e ci metto dentro le 16 bombe randomiche
    while(bombePosition.lenght < NUMBOMBE){
        const bombe = randomNumber(1, numeroCelleTotali);
        if(!bombePosition.includes(bombe)){
            bombePosition.push(bombe);
        }
    }   
    campoMinato();  //richiamo la funzione campominato che mi crea la griglia

}
//creo le celle 
function creaCelle(numeroCellaAttuale){
    const cell = document.createElement('div');
    cell.className = 'square';
    const righe = Math.sqrt(numeroCelleTotali); 
    cell.style.width = `calc(100% / ${righe})`;
    cell.style.height = `calc(100% / ${righe})`;
    cell.innerHTML = `
        <span>${numeroCellaAttuale}</span>
    `;
    cell.addEventListener('click', creaCelle);
    return cell;
}
// creo la griglia di gioco. 
function campoMinato(){
    const grid = document.createElement('div');
    grid.className = 'grid' //griglia
    for (let i= 1; i<= numeroCelleTotali; i++){
        grid.appendChild(creaCelle(i));  //campominato chiama crea celle  
    }
    campoGioco.appendChild(grid);
}

function clickCella(){
    const span = querySelector('span');
    const numeroCelleTotali = parseInt(span.textContent);
    this.removeEventListener('click', clickCella);
    if (bombePosition.includes(numeroCelleTotali)){
            this.span.classList.add('color-bombe');
            fineGioco();
    } else {
        this.span.classList.add('color-celle');
        tentativiMax++
        console.log(tentativiMax)
    
        if(tentativiMax === punteggio){
            finegioco();
        }
    }
}

function finegioco(){
        punteggio = numeroCelleTotali - NUMBOMBE;

    }

//quando deve partire questa funzione o questo ciclo?