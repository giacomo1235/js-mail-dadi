function lanciaDadi() {

        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;
        let punteggioGiacomo = 0;
        let punteggioMacchina = 0;

        document.querySelector(".img1").setAttribute("src",
            "img/dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
            "img/dice" + randomNumber2 + ".png");

        if (randomNumber1 === randomNumber2) {
            document.querySelector("h1").innerHTML = "Patta!";
        }

        else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").innerHTML = "Che Sfiga!";
            punteggioMacchina+= 1;
        }

        else {
            document.querySelector("h1").innerHTML = "Sono il Migliore!";
            punteggioGiacomo+=1;
        }
        document.getElementById("pg").innerHTML = punteggioGiacomo;
        document.getElementById("pm").innerHTML = punteggioMacchina;
}