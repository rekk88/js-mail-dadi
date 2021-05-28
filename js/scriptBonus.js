
function randoms(){
    //genero due random tra 1 e 6 compresi
    var randUtente = Math.floor(Math.random() * 6 + 1);
    var randPC = Math.floor(Math.random() * 6 + 1);

    // console.log("PC : " + randPC);
    // console.log("Utente : " + randUtente);
    // document.getElementById("user").innerHTML = "Giocatore : " + randUtente;
    // document.getElementById("pc").innerHTML = "PC : " + randPC;
    
    switch(randPC){
        case 1:
            document.getElementById("icona-dx").setAttribute("class","bi bi-dice-1");
            console.log("switch 1");
            break;
        case 2:
            document.getElementById("icona-dx").setAttribute("class","bi bi-dice-2");
            console.log("switch 2");
            break;
        case 3:
            document.getElementById("icona-dx").setAttribute("class","bi bi-dice-3");
            console.log("switch 3");
            break;
        case 4:
            document.getElementById("icona-dx").setAttribute("class","bi bi-dice-4");
            console.log("switch 4");
            break;
        case 5:
            document.getElementById("icona-dx").setAttribute("class","bi bi-dice-5");
            console.log("switch 5");
            break;
        case 6:
            document.getElementById("icona-dx").setAttribute("class","bi bi-dice-6");
            console.log("switch 6");
            break;
    }
    switch(randUtente){
        case 1:
            document.getElementById("icona-sx").setAttribute("class","bi bi-dice-1");
            console.log("switch 1");
            break;
        case 2:
            document.getElementById("icona-sx").setAttribute("class","bi bi-dice-2");
            console.log("switch 2");
            break;
        case 3:
            document.getElementById("icona-sx").setAttribute("class","bi bi-dice-3");
            console.log("switch 3");
            break;
        case 4:
            document.getElementById("icona-sx").setAttribute("class","bi bi-dice-4");
            console.log("switch 4");
            break;
        case 5:
            document.getElementById("icona-sx").setAttribute("class","bi bi-dice-5");
            console.log("switch 5");
            break;
        case 6:
            document.getElementById("icona-sx").setAttribute("class","bi bi-dice-6");
            console.log("switch 6");
            break;
    }
    // document.getElementById("icona").setAttribute("class","bi bi-dice-1");
    console.log("PC : " + randPC);
    console.log("Utente : " + randUtente);
    //confronto valori 
    if(randPC > randUtente){
        console.log("PC vince :");
    }
    else if(randPC < randUtente){
            console.log("Utente Vince : " + randUtente);
        }
        else{
            console.log("pareggio");
        }
}