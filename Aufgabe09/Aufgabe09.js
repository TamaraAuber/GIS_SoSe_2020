"use strict";
var aufgabe09;
(function (aufgabe09) {
    document.getElementById("button1").addEventListener("click", handleButton1);
    document.getElementById("button2").addEventListener("click", handleButton2);
    //gibt antwort in HTML Seite aus
    async function handleButton1() {
        let formData = new FormData(document.forms[0]);
        /* let url: string = "https://gissose2020justkeepswimming.herokuapp.com/"; */
        let url = "http://localhost:8100";
        let query = new URLSearchParams(formData);
        url = url + "/html" + "?" + query.toString();
        /* console.log((await fetch(url)).url);   */
        let response = await fetch(url);
        let responseText = await response.text();
        /* console.log(responseText); */
        let antwort = document.createElement("p");
        antwort.innerHTML = responseText;
        document.body.appendChild(antwort);
    }
    //gibt Antwort in Konsole aus
    async function handleButton2() {
        let formData = new FormData(document.forms[0]);
        /* let url: string = "https://gissose2020justkeepswimming.herokuapp.com/"; */
        let url = "http://localhost:8100";
        let query = new URLSearchParams(formData);
        url = url + "/json" + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.json();
        console.log(responseText);
    }
})(aufgabe09 || (aufgabe09 = {}));
//# sourceMappingURL=Aufgabe09.js.map