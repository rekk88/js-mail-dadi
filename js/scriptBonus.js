
function randoms(){
    //genero due random tra 1 e 6 compresi
    var randUtente = Math.floor(Math.random() * 6 + 1);
    var randPC = Math.floor(Math.random() * 6 + 1);

    console.log("PC : " + randPC);
    console.log("Utente : " + randUtente);
    document.getElementById("user").innerHTML = "Giocatore : " + randUtente;
    document.getElementById("pc").innerHTML = "PC : " + randPC;


    //confronto valori 
    if(randPC > randUtente){
        console.log("PC vince :" + randPC);
    }
    else if(randPC < randUtente){
            console.log("Utente Vince : " + randUtente);
        }
        else{
            console.log("pareggio");
        }
}