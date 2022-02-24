let userMail = document.getElementById('inputMail').value;

const forbiddenMail = ["pietro.pacciani@gmail.com", "annamaria.franzoni@live.it", "amanda.knox@yahoo.us", "leonardacianciulli@live.com","andreadipre@gmail.com"];

function verificaMail() {
    
    if (userMail[i] === forbidddenMail) {
        console.log("invalid email")
    } else { 
        alert("ok! La mail è giusta")
    }
}