// IMPOSTO VARIABILI E COUNTER START E FINISH
let resto 
let start = 0
let counter = 10
// CHIEDO ALL'UTENTE UN NUMERO
let chiedoNumeri
const numeriDispariTot = []
while(start<counter){
    chiedoNumeri = parseInt(prompt('inserisci un numero dispari'))
    console.log(chiedoNumeri)
    resto=chiedoNumeri % 2
    // SE E PARI NON LO SALVO E SI RIPETE IL LOOP  
    if(resto === 0){
        console.log('PARI')
    }
    // SE E DISPARI MELE SALVO NEL COUNTER
    else if(resto === 1){
        console.log('DISPARI')
        start++
        numeriDispariTot.push(chiedoNumeri)
        console.log(numeriDispariTot)
    }

    
}
for(let i = 0;i < numeriDispariTot.length;i++){
    
    console.log(numeriDispariTot[i])
}

