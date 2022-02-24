let btnCerca = document.getElementById('cerca');
let btnAzzera = document.getElementById('azzera')

btnCerca.addEventListener ('click', function() {
    let userMail = document.getElementById('inputMail').value;
    
    const forbiddenMail = ["pietro.pacciani@gmail.com", "annamaria.franzoni@live.it", "amanda.knox@yahoo.us", "leonardacianciulli@live.com","andreadipre@gmail.com"];
    
    for (let i = 0; i < forbiddenMail.length; i++){
    if (userMail === forbiddenMail[i]) {
        alert("invalid email")
    } else { 
        alert("ok! La mail è giusta")
    }
    };
});

btnAzzera.addEventListener ('click', function() {
    userMail = '';
});