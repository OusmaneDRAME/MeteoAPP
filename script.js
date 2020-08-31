let ville = "Paris";

recevoirTemperature(ville);

document.querySelector("#changer").addEventListener("click", () => {
    ville = prompt("Entrez une ville");
    recevoirTemperature(ville);
});

function recevoirTemperature(ville) {

    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + ville +"&appid=b7c6e438e170c6fbe196efae1ceb6645&units=metric";

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
