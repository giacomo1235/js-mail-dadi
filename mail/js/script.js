const forbiddenMail = [
    "pietro.pacciani@gmail.com",
    "annamaria.franzoni@live.it",
    "amanda.knox@yahoo.us",
    "leonardacianciulli@live.com",
    "andreadipre@gmail.com"
];

let btnCerca = document.getElementById('cerca');

const userMail = document.getElementById('inputMail').value;

const eleOutput = document.getElementById('testo');

btnCerca.addEventListener ('click', function() {    
    
    let found = false;

    for (let i = 0; i < forbiddenMail.length; i++){
        if (forbiddenMail[i] == userMail) {
            found = true;
        }
    };
    
    if (found) {
        eleOutput.innerHTML = 'indirizzo trovato'
    } else {
        eleOutput.innerHTML = 'indirizzo non trovato'
    }
});