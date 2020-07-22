namespace BesitzerClient {

    interface Bestellung {
        _id: string;
        nachname: string;
        vorname: string;
        strasse: string;
        ort: string;
        topping: string;
        eis2: string;
        eis1: string;
        behaelter: string;
        preis: number;
        status: string;
    }

    let alleBestellungen: Bestellung[];

    document.getElementById("Aktualisieren")!.addEventListener("click", handleRefresh);
    document.getElementById("DeleteAll")!.addEventListener("click", handleDeleteAll);

    datenAuslesen();

    async function datenAuslesen(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020justkeepswimming.herokuapp.com";
        /*  let url: string = "http://localhost:8100"; */
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/retrieve" + "?" + query.toString();

        let response: Response = await fetch(url);

        alleBestellungen = await response.json();

        bestellungenAnzeigen();
    }

    function bestellungenAnzeigen(): void {
        document.getElementById("keineBestellungen")!.hidden = true;
        if (alleBestellungen.length == 0) {
            document.getElementById("keineBestellungen")!.hidden = false;
        }
        for (let x: number = 0; x < alleBestellungen.length; x++) {
            let bestellung: HTMLElement = document.createElement("div");
            bestellung.setAttribute("id", "Bestellung" + x);
            bestellung.setAttribute("class", "Bestellung");
            document.getElementById("Ausgabefeld")!.appendChild(bestellung);

            //Kasten für Rechnung
            let kasten: HTMLElement = document.createElement("div");
            kasten.setAttribute("id", "kasten" + x);
            document.getElementById("Bestellung" + x)!.appendChild(kasten);

            //Kasten für Eisdarstellung
            let darstellung: HTMLElement = document.createElement("div");
            darstellung.setAttribute("id", "darstellung" + x);
            darstellung.setAttribute("class", "darstellung");
            document.getElementById("Bestellung" + x)!.appendChild(darstellung);

            let bestellungsnummer: HTMLElement = document.createElement("h3");
            document.getElementById("kasten" + x)!.appendChild(bestellungsnummer);
            bestellungsnummer.innerHTML = "Bestellung Nr. " + (x + 1);

            //Kundendaten
            let status: HTMLElement = document.createElement("p");
            document.getElementById("kasten" + x)!.appendChild(status);
            status.innerHTML = "<b> Status: " + alleBestellungen[x].status + "</b>";
            let name: HTMLElement = document.createElement("p");
            document.getElementById("kasten" + x)!.appendChild(name);
            name.innerHTML = "Nachname: " + alleBestellungen[x].nachname;
            let vname: HTMLElement = document.createElement("p");
            document.getElementById("kasten" + x)!.appendChild(vname);
            vname.innerHTML = "Vorname: " + alleBestellungen[x].vorname;
            let str: HTMLElement = document.createElement("p");
            document.getElementById("kasten" + x)!.appendChild(str);
            str.innerHTML = "Straße: " + alleBestellungen[x].strasse;
            let ort: HTMLElement = document.createElement("p");
            document.getElementById("kasten" + x)!.appendChild(ort);
            ort.innerHTML = "Ort: " + alleBestellungen[x].ort;

            //Eisdaten
            let topping: HTMLElement = document.createElement("p");
            document.getElementById("kasten" + x)!.appendChild(topping);
            let eis2: HTMLElement = document.createElement("p");
            document.getElementById("kasten" + x)!.appendChild(eis2);
            let eis1: HTMLElement = document.createElement("p");
            document.getElementById("kasten" + x)!.appendChild(eis1);
            let behaelter: HTMLElement = document.createElement("p");
            document.getElementById("kasten" + x)!.appendChild(behaelter);
            auflistungEis();

            //Preis
            let preis: HTMLElement = document.createElement("h4");
            document.getElementById("kasten" + x)!.appendChild(preis);
            preis.innerHTML = "Preis: " + alleBestellungen[x].preis + " €";

            //Statusänderung
            if (alleBestellungen[x].status == "in Bearbeitung") {
                let statusAendern: HTMLElement = document.createElement("button");
                document.getElementById("kasten" + x)!.appendChild(statusAendern);
                statusAendern.innerHTML = "Bestellung bearbeitet";
                statusAendern.addEventListener("click", handleStatusAendern);
            }

            //einzelne Bestellung löschen
            let bestellungEntfernen: HTMLElement = document.createElement("button");
            document.getElementById("kasten" + x)!.appendChild(bestellungEntfernen);
            bestellungEntfernen.innerHTML = "Bestellung entfernen";
            bestellungEntfernen.setAttribute("id", "BestellungEntfernen");
            bestellungEntfernen.addEventListener("click", handleBestellungEntfernen);

            //Eisdarstellung
            let bildTopping: HTMLElement = document.createElement("img");
            document.getElementById("darstellung" + x)!.appendChild(bildTopping);
            bildTopping.setAttribute("src", alleBestellungen[x].topping);
            bildTopping.style.zIndex = "3";
            let bildEis2: HTMLElement = document.createElement("img");
            document.getElementById("darstellung" + x)!.appendChild(bildEis2);
            bildEis2.setAttribute("src", alleBestellungen[x].eis2);
            bildEis2.style.zIndex = "2";
            if (alleBestellungen[x].eis2 == "") {
                bildEis2.setAttribute("src", "Sortiment/NoEis.png");
            }
            let bildEis1: HTMLElement = document.createElement("img");
            document.getElementById("darstellung" + x)!.appendChild(bildEis1);
            bildEis1.setAttribute("src", alleBestellungen[x].eis1);
            bildEis1.style.zIndex = "1";
            let bildBehaelter: HTMLElement = document.createElement("img");
            document.getElementById("darstellung" + x)!.appendChild(bildBehaelter);
            bildBehaelter.setAttribute("src", alleBestellungen[x].behaelter);
            bildBehaelter.style.zIndex = "0";
            if (alleBestellungen[x].behaelter == "Sortiment/Becher.png") {
                bildBehaelter.setAttribute("id", "BestellungBecher");
            }


            function auflistungEis(): void {
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

            async function handleBestellungEntfernen(_eventEntfernen: Event): Promise<void> {
                let url: string = "https://gissose2020justkeepswimming.herokuapp.com";
                /*  let url: string = "http://localhost:8100"; */
                url = url + "/deleteOneOrder" + "?_id=" + alleBestellungen[x]._id;

                let response: Response = await fetch(url);
                await response.text();

                handleRefresh();
            }
            async function handleStatusAendern(_eventAendern: Event): Promise<void> {
                let url: string = "https://gissose2020justkeepswimming.herokuapp.com";
                /*  let url: string = "http://localhost:8100"; */
                url = url + "/status" + "?_id=" + alleBestellungen[x]._id;

                let response: Response = await fetch(url);
                await response.text();

                handleRefresh();
            }

        }
    }

    function handleRefresh(): void {
        seiteLeeren();
        datenAuslesen();
    }

    function seiteLeeren(): void {
        while (document.getElementById("Ausgabefeld")!.hasChildNodes()) {
            document.getElementById("Ausgabefeld")!.removeChild(<Node>document.getElementById("Ausgabefeld")?.firstChild);
        }
    }

    async function handleDeleteAll(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020justkeepswimming.herokuapp.com";
        /* let url: string = "http://localhost:8100"; */
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/delete" + "?" + query.toString();

        let response: Response = await fetch(url);
        await response.text();

        handleRefresh();
    }


}