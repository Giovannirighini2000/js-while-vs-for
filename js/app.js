// IMPOSTO VARIABILI E COUNTER START E FINISH
let resto 
let start = 0
let counter = 10

// CHIEDO ALL'UTENTE UN NUMERO
let chiedoNumeri
const numeriDispariTot = []
// UTILIZZIAMO IL CICLO WHILE PER RIPETERE FINCHE IL COUNTER (10DISPARI ) NON SI EFFETTUA
while(start<counter){
    chiedoNumeri = parseInt(prompt('inserisci un numero dispari'))
    console.log(chiedoNumeri,'PARI O DISPARI')
    resto=chiedoNumeri % 2 
    // SE E DISPARI MELE SALVO NEL CONTEGGIO DEL COUNTER
    if(resto === 1){
        
        start++
        numeriDispariTot.push(chiedoNumeri)
        console.log(numeriDispariTot,'DISPARI')
    }   
}
// CONTROLLIAMO I NUMERI DISPARI ATTRAVERSO L'INDICES
for(let i = 0;i < numeriDispariTot.length;i++){
    
    console.log(numeriDispariTot[i])
    
}

    
