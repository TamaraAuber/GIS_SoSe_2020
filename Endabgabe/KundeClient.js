"use strict";
var KundeClient;
(function (KundeClient) {
    document.getElementById("Senden").addEventListener("click", handleBestellungSenden);
    async function handleBestellungSenden() {
        document.getElementById("BestellungTopping").value = localStorage.getItem("Topping");
        document.getElementById("BestellungEis2").value = localStorage.getItem("Eis2");
        document.getElementById("BestellungEis1").value = localStorage.getItem("Eis1");
        document.getElementById("BestellungBehaelter").value = localStorage.getItem("Behaelter");
        document.getElementById("BestellungPreis").value = localStorage.getItem("Preis");
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020justkeepswimming.herokuapp.com";
        /* let url: string = "http://localhost:8100"; */
        let query = new URLSearchParams(formData);
        url = url + "/send" + "?" + query.toString();
        let response = await fetch(url);
        await response.text();
    }
})(KundeClient || (KundeClient = {}));
//# sourceMappingURL=KundeClient.js.map