const forbiddenMail = ["pietro.pacciani@gmail.com", "annamaria.franzoni@live.it", "amanda.knox@yahoo.us", "leonardacianciulli@live.com","andreadipre@gmail.com"];
let btnCerca = document.getElementById('cerca');
let userMail = document.getElementById('inputMail').value;

btnCerca.addEventListener ('click', function() {
    
    
    for (let i = 0; i < forbiddenMail.length; i++){
    if (userMail == forbiddenMail[i]) {
        document.getElementById('testo').innerHTML = "invalido"
    } else { 
        document.getElementById('testo').innerHTML = "valido"
    }
    };
});
