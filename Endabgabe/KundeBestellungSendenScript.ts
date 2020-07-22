namespace Kunde {

    /* interface ProduktBestellung {
        nachname: string;
        vorname: string;
        strasse: string;
        ort: string;
        topping: string;
        eissorte2: string;
        eissorte: string;
        behaelter: string;
        preis: number;
        
    } */

    document.getElementById("AuflistungBestellung")!.hidden = false;
    document.getElementById("Formular")!.hidden = false;
    document.getElementById("Versendet")!.hidden = true;

    let bestellungTopping: HTMLElement = document.createElement("p");
    document.getElementById("AuflistungProdukt")!.appendChild(bestellungTopping);
    let bestellungEis2: HTMLElement = document.createElement("p");
    document.getElementById("AuflistungProdukt")!.appendChild(bestellungEis2);
    let bestellungEis1: HTMLElement = document.createElement("p");
    document.getElementById("AuflistungProdukt")!.appendChild(bestellungEis1);
    let bestellungBehaelter: HTMLElement = document.createElement("p");
    document.getElementById("AuflistungProdukt")!.appendChild(bestellungBehaelter);
    let bestellungPreis: HTMLElement = document.createElement("p");
    document.getElementById("AuflistungPreis")!.appendChild(bestellungPreis);

    //Bestellungsauflistung
    switch (localStorage.getItem("Topping")) {
        case "Sortiment/ToppingSchoko.png":
            bestellungTopping.innerHTML = "Topping: Schokosauce";
            break;
        case "Sortiment/ToppingErdbeer.png":
            bestellungTopping.innerHTML = "Topping: Erdbeersauce";
            break;
    }
    if (localStorage.getItem("Eis1") != localStorage.getItem("Eis2")) {
        switch (localStorage.getItem("Eis2")) {
            case "Sortiment/EisSchoko.png":
                bestellungEis2.innerHTML = "1x Schokoladeneis";
                break;
            case "Sortiment/EisErdbeere.png":
                bestellungEis2.innerHTML = "1x Erdbeereis";
                break;
            case "Sortiment/EisVanille.png":
                bestellungEis2.innerHTML = "1x Vanilleeis";
                break;
            case "Sortiment/EisHeidelbeere.png":
                bestellungEis2.innerHTML = "1x Heidelbeereis";
                break;
            case "Sortiment/EisHaselnuss.png":
                bestellungEis2.innerHTML = "1x Haselnusseis";
                break;
        }
        switch (localStorage.getItem("Eis1")) {
            case "Sortiment/EisSchoko.png":
                bestellungEis1.innerHTML = "1x Schokoladeneis";
                break;
            case "Sortiment/EisErdbeere.png":
                bestellungEis1.innerHTML = "1x Erdbeereis";
                break;
            case "Sortiment/EisVanille.png":
                bestellungEis1.innerHTML = "1x Vanilleeis";
                break;
            case "Sortiment/EisHeidelbeere.png":
                bestellungEis1.innerHTML = "1x Heidelbeereis";
                break;
            case "Sortiment/EisHaselnuss.png":
                bestellungEis1.innerHTML = "1x Haselnusseis";
                break;
        }
    }
    if (localStorage.getItem("Eis1") == localStorage.getItem("Eis2")) {
        switch (localStorage.getItem("Eis1")) {
            case "Sortiment/EisSchoko.png":
                bestellungEis1.innerHTML = "2x Schokoladeneis";
                break;
            case "Sortiment/EisErdbeere.png":
                bestellungEis1.innerHTML = "2x Erdbeereis";
                break;
            case "Sortiment/EisVanille.png":
                bestellungEis1.innerHTML = "2x Vanilleeis";
                break;
            case "Sortiment/EisHeidelbeere.png":
                bestellungEis1.innerHTML = "2x Heidelbeereis";
                break;
            case "Sortiment/EisHaselnuss.png":
                bestellungEis1.innerHTML = "2x Haselnusseis";
                break;
        }
    }
    switch (localStorage.getItem("Behaelter")) {
        case "Sortiment/Waffel.png":
            bestellungBehaelter.innerHTML = "Behälter: Waffel";
            break;
        case "Sortiment/Becher.png":
            bestellungBehaelter.innerHTML = "Behälter: Becher";
            break;
    }
    bestellungPreis.innerHTML = "Preis: " + localStorage.getItem("Preis")! + " €";


    document.getElementById("Senden")!.addEventListener("click", handleBestellungVersenden);
    function handleBestellungVersenden(_eventVersendet: Event): void {
        document.getElementById("AuflistungBestellung")!.hidden = true;
        document.getElementById("Formular")!.hidden = true;
        document.getElementById("Versendet")!.hidden = false;

    }

    document.getElementById("neueBestellung")!.addEventListener("click", handleNeueBestellung);
    function handleNeueBestellung(_eventNeueBestellung: Event): void {
        location.replace("KundeEisErstellen.html");
    }
    document.getElementById("BestellungAendern")!.addEventListener("click", handleBestellungAendern);
    function handleBestellungAendern(_eventNeueBestellung: Event): void {
        location.replace("KundeEisErstellen.html");
    }



}