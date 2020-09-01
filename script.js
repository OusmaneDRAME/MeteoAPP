let ville = "Paris";

recevoirTemperature(ville);

document.querySelector("#changer").addEventListener("click", () => {
    ville = prompt("Entrez une ville");
    recevoirTemperature(ville);
});

function recevoirTemperature(ville) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + ville +"&appid=apikey&units=metric";

    let requette = new XMLHttpRequest();

    requette.open("GET",url);

    requette.responseType = "json";

    requette.send();

    requette.onload = function () {  
        if(requette.readyState === XMLHttpRequest.DONE) {
            if (requette.status === 200) {
                let reponse = requette.response;
                document.querySelector("#temperature_label").textContent = reponse.main.temp;
                document.querySelector("#ville").textContent = reponse.name;
            } else {
                alert("Un problème est intervenu merci de revenir plus tard !");
            }
        }
    }

}
