let answer = "";

while (answer != "exit") {

    answer = prompt('Kesta pelo !?');
//Question
    if (/[?]$/.test(answer)) {console.log("oe oe...");}
//Si on lui hurle dessus (phrase en UPPERCASE)
    else if (/[a-zA-Z]/.test(answer) && answer.toUpperCase() === answer) {console.log("Pwaaa t 1 narvalo twa");}
//Si il y a fortnite dans la phrase
    else if (answer.includes("Fortnite") || answer.includes("fortnite")) {console.log("p'tite game soumsoum?");}
//message vide
    else if (answer === "") {console.log("T'es en PLS?");}
//toute autre phrase
else console.log("balek.");
}
