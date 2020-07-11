"use strict";
var aufgabe11;
(function (aufgabe11) {
    document.getElementById("button1").addEventListener("click", handleButton1);
    document.getElementById("button2").addEventListener("click", handleButton2);
    //gibt antwort in HTML Seite aus
    async function handleButton1() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020justkeepswimming.herokuapp.com";
        /* let url: string = "http://localhost:8100"; */
        let query = new URLSearchParams(formData);
        /* url = url + "/html" + "?" + query.toString(); */
        url = url + "?" + query.toString();
        /* console.log((await fetch(url)).url);   */
        let response = await fetch(url);
        let responseText = await response.text();
        /* console.log(responseText); */
    }
    //gibt Antwort in Konsole aus
    async function handleButton2() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020justkeepswimming.herokuapp.com";
        /* let url: string = "http://localhost:8100"; */
        let query = new URLSearchParams(formData);
        url = url + "/retrieve" + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        console.log(responseText);
        let antwort = document.createElement("p");
        antwort.innerHTML = responseText;
        document.getElementById("Ausgabe").appendChild(antwort);
    }
})(aufgabe11 || (aufgabe11 = {}));
//# sourceMappingURL=Aufgabe11.js.map