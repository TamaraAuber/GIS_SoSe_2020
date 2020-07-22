"use strict";
var BesitzerClient;
(function (BesitzerClient) {
    let alleBestellungen;
    document.getElementById("Aktualisieren").addEventListener("click", handleRefresh);
    document.getElementById("DeleteAll").addEventListener("click", handleDeleteAll);
    datenAuslesen();
    async function datenAuslesen() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020justkeepswimming.herokuapp.com";
        /*  let url: string = "http://localhost:8100"; */
        let query = new URLSearchParams(formData);
        url = url + "/retrieve" + "?" + query.toString();
        let response = await fetch(url);
        alleBestellungen = await response.json();
        bestellungenAnzeigen();
    }
    function bestellungenAnzeigen() {
        document.getElementById("keineBestellungen").hidden = true;
        if (alleBestellungen.length == 0) {
            document.getElementById("keineBestellungen").hidden = false;
        }
        for (let x = 0; x < alleBestellungen.length; x++) {
            let bestellung = document.createElement("div");
            bestellung.setAttribute("id", "Bestellung" + x);
            bestellung.setAttribute("class", "Bestellung");
            document.getElementById("Ausgabefeld").appendChild(bestellung);
            //Kasten für Rechnung
            let kasten = document.createElement("div");
            kasten.setAttribute("id", "kasten" + x);
            document.getElementById("Bestellung" + x).appendChild(kasten);
            //Kasten für Eisdarstellung
            let darstellung = document.createElement("div");
            darstellung.setAttribute("id", "darstellung" + x);
            darstellung.setAttribute("class", "darstellung");
            document.getElementById("Bestellung" + x).appendChild(darstellung);
            let bestellungsnummer = document.createElement("h3");
            document.getElementById("kasten" + x).appendChild(bestellungsnummer);
            bestellungsnummer.innerHTML = "Bestellung Nr. " + (x + 1);
            //Kundendaten
            let status = document.createElement("p");
            document.getElementById("kasten" + x).appendChild(status);
            status.innerHTML = "<b> Status: " + alleBestellungen[x].status + "</b>";
            let name = document.createElement("p");
            document.getElementById("kasten" + x).appendChild(name);
            name.innerHTML = "Nachname: " + alleBestellungen[x].nachname;
            let vname = document.createElement("p");
            document.getElementById("kasten" + x).appendChild(vname);
            vname.innerHTML = "Vorname: " + alleBestellungen[x].vorname;
            let str = document.createElement("p");
            document.getElementById("kasten" + x).appendChild(str);
            str.innerHTML = "Straße: " + alleBestellungen[x].strasse;
            let ort = document.createElement("p");
            document.getElementById("kasten" + x).appendChild(ort);
            ort.innerHTML = "Ort: " + alleBestellungen[x].ort;
            //Eisdaten
            let topping = document.createElement("p");
            document.getElementById("kasten" + x).appendChild(topping);
            let eis2 = document.createElement("p");
            document.getElementById("kasten" + x).appendChild(eis2);
            let eis1 = document.createElement("p");
            document.getElementById("kasten" + x).appendChild(eis1);
            let behaelter = document.createElement("p");
            document.getElementById("kasten" + x).appendChild(behaelter);
            auflistungEis();
            //Preis
            let preis = document.createElement("h4");
            document.getElementById("kasten" + x).appendChild(preis);
            preis.innerHTML = "Preis: " + alleBestellungen[x].preis + " €";
            //Statusänderung
            if (alleBestellungen[x].status == "in Bearbeitung") {
                let statusAendern = document.createElement("button");
                document.getElementById("kasten" + x).appendChild(statusAendern);
                statusAendern.innerHTML = "Bestellung bearbeitet";
                statusAendern.addEventListener("click", handleStatusAendern);
            }
            //einzelne Bestellung löschen
            let bestellungEntfernen = document.createElement("button");
            document.getElementById("kasten" + x).appendChild(bestellungEntfernen);
            bestellungEntfernen.innerHTML = "Bestellung entfernen";
            bestellungEntfernen.setAttribute("id", "BestellungEntfernen");
            bestellungEntfernen.addEventListener("click", handleBestellungEntfernen);
            //Eisdarstellung
            let bildTopping = document.createElement("img");
            document.getElementById("darstellung" + x).appendChild(bildTopping);
            bildTopping.setAttribute("src", alleBestellungen[x].topping);
            bildTopping.style.zIndex = "3";
            let bildEis2 = document.createElement("img");
            document.getElementById("darstellung" + x).appendChild(bildEis2);
            bildEis2.setAttribute("src", alleBestellungen[x].eis2);
            bildEis2.style.zIndex = "2";
            if (alleBestellungen[x].eis2 == "") {
                bildEis2.setAttribute("src", "Sortiment/NoEis.png");
            }
            let bildEis1 = document.createElement("img");
            document.getElementById("darstellung" + x).appendChild(bildEis1);
            bildEis1.setAttribute("src", alleBestellungen[x].eis1);
            bildEis1.style.zIndex = "1";
            let bildBehaelter = document.createElement("img");
            document.getElementById("darstellung" + x).appendChild(bildBehaelter);
            bildBehaelter.setAttribute("src", alleBestellungen[x].behaelter);
            bildBehaelter.style.zIndex = "0";
            if (alleBestellungen[x].behaelter == "Sortiment/Becher.png") {
                bildBehaelter.setAttribute("id", "BestellungBecher");
            }
            function auflistungEis() {
                switch (alleBestellungen[x].topping) {
                    case "Sortiment/ToppingSchoko.png":
                        topping.innerHTML = "Topping: Schokosauce";
                        break;
                    case "Sortiment/ToppingErdbeer.png":
                        topping.innerHTML = "Topping: Erdbeersauce";
                        break;
                }
                if (alleBestellungen[x].eis1 != alleBestellungen[x].eis2) {
                    switch (alleBestellungen[x].eis2) {
                        case "Sortiment/EisSchoko.png":
                            eis2.innerHTML = "1x Schokoladeneis";
                            break;
                        case "Sortiment/EisErdbeere.png":
                            eis2.innerHTML = "1x Erdbeereis";
                            break;
                        case "Sortiment/EisVanille.png":
                            eis2.innerHTML = "1x Vanilleeis";
                            break;
                        case "Sortiment/EisHeidelbeere.png":
                            eis2.innerHTML = "1x Heidelbeereis";
                            break;
                        case "Sortiment/EisHaselnuss.png":
                            eis2.innerHTML = "1x Haselnusseis";
                            break;
                    }
                    switch (alleBestellungen[x].eis1) {
                        case "Sortiment/EisSchoko.png":
                            eis1.innerHTML = "1x Schokoladeneis";
                            break;
                        case "Sortiment/EisErdbeere.png":
                            eis1.innerHTML = "1x Erdbeereis";
                            break;
                        case "Sortiment/EisVanille.png":
                            eis1.innerHTML = "1x Vanilleeis";
                            break;
                        case "Sortiment/EisHeidelbeere.png":
                            eis1.innerHTML = "1x Heidelbeereis";
                            break;
                        case "Sortiment/EisHaselnuss.png":
                            eis1.innerHTML = "1x Haselnusseis";
                            break;
                    }
                }
                if (alleBestellungen[x].eis1 == alleBestellungen[x].eis2) {
                    switch (alleBestellungen[x].eis1) {
                        case "Sortiment/EisSchoko.png":
                            eis1.innerHTML = "2x Schokoladeneis";
                            break;
                        case "Sortiment/EisErdbeere.png":
                            eis1.innerHTML = "2x Erdbeereis";
                            break;
                        case "Sortiment/EisVanille.png":
                            eis1.innerHTML = "2x Vanilleeis";
                            break;
                        case "Sortiment/EisHeidelbeere.png":
                            eis1.innerHTML = "2x Heidelbeereis";
                            break;
                        case "Sortiment/EisHaselnuss.png":
                            eis1.innerHTML = "2x Haselnusseis";
                            break;
                    }
                }
                switch (alleBestellungen[x].behaelter) {
                    case "Sortiment/Waffel.png":
                        behaelter.innerHTML = "Behälter: Waffel";
                        break;
                    case "Sortiment/Becher.png":
                        behaelter.innerHTML = "Behälter: Becher";
                        break;
                }
            }
            async function handleBestellungEntfernen(_eventEntfernen) {
                let url = "https://gissose2020justkeepswimming.herokuapp.com";
                /*  let url: string = "http://localhost:8100"; */
                url = url + "/deleteOneOrder" + "?_id=" + alleBestellungen[x]._id;
                let response = await fetch(url);
                await response.text();
                handleRefresh();
            }
            async function handleStatusAendern(_eventAendern) {
                let url = "https://gissose2020justkeepswimming.herokuapp.com";
                /*  let url: string = "http://localhost:8100"; */
                url = url + "/status" + "?_id=" + alleBestellungen[x]._id;
                let response = await fetch(url);
                await response.text();
                handleRefresh();
            }
        }
    }
    function handleRefresh() {
        seiteLeeren();
        datenAuslesen();
    }
    function seiteLeeren() {
        while (document.getElementById("Ausgabefeld").hasChildNodes()) {
            document.getElementById("Ausgabefeld").removeChild(document.getElementById("Ausgabefeld")?.firstChild);
        }
    }
    async function handleDeleteAll() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020justkeepswimming.herokuapp.com";
        /* let url: string = "http://localhost:8100"; */
        let query = new URLSearchParams(formData);
        url = url + "/delete" + "?" + query.toString();
        let response = await fetch(url);
        await response.text();
        handleRefresh();
    }
})(BesitzerClient || (BesitzerClient = {}));
//# sourceMappingURL=BesitzerClient.js.map