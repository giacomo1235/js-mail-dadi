const forbiddenMail = ["pietro.pacciani@gmail.com", "annamaria.franzoni@live.it", "amanda.knox@yahoo.us", "leonardacianciulli@live.com","andreadipre@gmail.com"];
let btnCerca = document.getElementById('cerca');
const userMail = document.getElementById('inputMail').value;
let found = false;

btnCerca.addEventListener ('click', function() {    
    for (let i = 0; i < forbiddenMail.length; i++){
    if (userMail == forbiddenMail[i]) {
        found = true;
    }
    };
    
    if (found) {
        console.log('trovato')
    } else {
        console.log(' non trovato')
    }
});