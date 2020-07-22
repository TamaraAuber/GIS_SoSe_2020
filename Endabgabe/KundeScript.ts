namespace Kunde {

    /* interface Produkt {
        topping: string;
        eissorte2: string;
        eissorte: string;
        behaelter: string;
        preis: number;
    } */

    let finalTopping: string = "";
    let finalEiskugel: string = "";
    let finalEiskugel2: string = "";
    let finalBehaelter: string = "";
    let finalPreis: number = 0;

    //Produktpreiserstellung
    let preisTopping: number = 0;
    let preisEiskugel: number = 0;
    let preisEiskugel2: number = 0; 

    //Erstellung der Darstellung
    let eisTopping: HTMLElement = document.createElement("img");
    document.getElementById("Topping")!.appendChild(eisTopping);
    let eisSorte: HTMLElement = document.createElement("img");
    document.getElementById("Eissorte")!.appendChild(eisSorte);
    let eisSorte2: HTMLElement = document.createElement("img");
    document.getElementById("Eissorte2")!.appendChild(eisSorte2);
    let eisBehaelter: HTMLElement = document.createElement("img");
    document.getElementById("Behaelter")!.appendChild(eisBehaelter);

    //Anzeige Produktpreis
    let produktPreis: HTMLElement = document.createElement("p");
    document.getElementById("preisProdukt")!.appendChild(produktPreis);
    produktPreisBerechnen();

    hideToppingUndEisButtons();
    defaultDarstellung();

    function produktPreisBerechnen(): void {
        finalPreis = preisTopping + preisEiskugel + preisEiskugel2;
        /* finalPreis.toFixed(2); */
        produktPreis.innerHTML = "Preis: " + finalPreis + "€";
    }

    function defaultDarstellung(): void {
        eisTopping.setAttribute("src", "Sortiment/DefaultTopping.png");
        eisSorte.setAttribute("src", "Sortiment/DefaultEis.png");
        eisSorte2.setAttribute("src", "Sortiment/NoEis.png");
        eisBehaelter.setAttribute("src", "Sortiment/DefaultBehaelter.png");
        eisBehaelter.setAttribute("id", "BehaelterDefault");
        document.getElementById("k2YN")!.hidden = false;
        produktPreis.innerHTML = "Preis: 0€";
        localStorage.clear();
    }

    function hideToppingUndEisButtons(): void {
        (document.getElementById("SchokoTopping") as HTMLInputElement).disabled = true;
        (document.getElementById("ErdbeerTopping") as HTMLInputElement).disabled = true;
        (document.getElementById("NoTopping") as HTMLInputElement).disabled = true;

        (document.getElementById("EisSchoko") as HTMLInputElement).disabled = true;
        (document.getElementById("EisErdbeere") as HTMLInputElement).disabled = true;
        (document.getElementById("EisVanille") as HTMLInputElement).disabled = true;
        (document.getElementById("EisHeidelbeere") as HTMLInputElement).disabled = true;
        (document.getElementById("EisHaselnuss") as HTMLInputElement).disabled = true;

        document.getElementById("ButtonsKugel2")!.hidden = true;
        (document.getElementById("k2Yes") as HTMLInputElement).disabled = true;
        (document.getElementById("k2No") as HTMLInputElement).disabled = true;

        (document.getElementById("bestellungHinzufuegen") as HTMLInputElement).disabled = true;
    }
    function showToppingButtons(): void {
        (document.getElementById("SchokoTopping") as HTMLInputElement).disabled = false;
        (document.getElementById("ErdbeerTopping") as HTMLInputElement).disabled = false;
        (document.getElementById("NoTopping") as HTMLInputElement).disabled = false;
    }
    function showEisButtons(): void {
        (document.getElementById("EisSchoko") as HTMLInputElement).disabled = false;
        (document.getElementById("EisErdbeere") as HTMLInputElement).disabled = false;
        (document.getElementById("EisVanille") as HTMLInputElement).disabled = false;
        (document.getElementById("EisHeidelbeere") as HTMLInputElement).disabled = false;
        (document.getElementById("EisHaselnuss") as HTMLInputElement).disabled = false;
        preisEiskugel = 1.10;
    }
    function showEis2Buttons(): void {
        (document.getElementById("EisSchoko2") as HTMLInputElement).disabled = false;
        (document.getElementById("EisErdbeere2") as HTMLInputElement).disabled = false;
        (document.getElementById("EisVanille2") as HTMLInputElement).disabled = false;
        (document.getElementById("EisHeidelbeere2") as HTMLInputElement).disabled = false;
        (document.getElementById("EisHaselnuss2") as HTMLInputElement).disabled = false;

        (document.getElementById("k2Yes") as HTMLInputElement).disabled = false;
        (document.getElementById("k2No") as HTMLInputElement).disabled = false;
    }



    //Topping
    document.getElementById("SchokoTopping")!.addEventListener("click", handleToppingSchoko);
    document.getElementById("ErdbeerTopping")!.addEventListener("click", handleToppingErdbeer);
    document.getElementById("NoTopping")!.addEventListener("click", handleToppingKeins);

    function handleToppingSchoko(_eventSetTopping: Event): void {
        eisTopping.setAttribute("src", "Sortiment/ToppingSchoko.png");
        eisTopping.setAttribute("alt", "Schoko Topping");
        finalTopping = "Sortiment/ToppingSchoko.png";
        preisTopping = 1;
        produktPreisBerechnen();
        (document.getElementById("bestellungHinzufuegen") as HTMLInputElement).disabled = false;
    }
    function handleToppingErdbeer(_eventSetTopping: Event): void {
        eisTopping.setAttribute("src", "Sortiment/ToppingErdbeer.png");
        eisTopping.setAttribute("alt", "Erdbeer Topping");
        finalTopping = "Sortiment/ToppingErdbeer.png";
        preisTopping = 1;
        produktPreisBerechnen();
        (document.getElementById("bestellungHinzufuegen") as HTMLInputElement).disabled = false;
    }
    function handleToppingKeins(_eventSetTopping: Event): void {
        eisTopping.setAttribute("src", "Sortiment/NoTopping.png");
        finalTopping = "Sortiment/NoTopping.png";
        preisTopping = 0;
        produktPreisBerechnen();
        (document.getElementById("bestellungHinzufuegen") as HTMLInputElement).disabled = false;
    }

    //zweite Kugel? Buttons
    document.getElementById("k2Yes")!.addEventListener("click", handlek2Yes);
    document.getElementById("k2No")!.addEventListener("click", handlek2No);
    function handlek2Yes(_eventSetButtons: Event): void {
        document.getElementById("k2YN")!.hidden = true;
        preisEiskugel2 = 1.10;
        document.getElementById("ButtonsKugel2")!.hidden = false;
    }
    function handlek2No(_eventSetButtons: Event): void {
        document.getElementById("k2YN")!.hidden = true;
        showToppingButtons();
    }

    //Eiskugel2 -> obere Kugel
    document.getElementById("EisSchoko2")!.addEventListener("click", handleEisSchoko2);
    document.getElementById("EisErdbeere2")!.addEventListener("click", handleEisErdbeere2);
    document.getElementById("EisVanille2")!.addEventListener("click", handleEisVanille2);
    document.getElementById("EisHeidelbeere2")!.addEventListener("click", handleEisHeidelbeere2);
    document.getElementById("EisHaselnuss2")!.addEventListener("click", handleEisHaselnuss2);

    function handleEisSchoko2(_eventSetEis: Event): void {
        eisSorte2.setAttribute("src", "Sortiment/EisSchoko.png");
        eisSorte2.setAttribute("alt", "Schokoladeneis");
        finalEiskugel2 = "Sortiment/EisSchoko.png";
        showToppingButtons();
        produktPreisBerechnen();
    }
    function handleEisErdbeere2(_eventSetEis: Event): void {
        eisSorte2.setAttribute("src", "Sortiment/EisErdbeere.png");
        eisSorte2.setAttribute("alt", "Erdbeereis");
        finalEiskugel2 = "Sortiment/EisErdbeere.png";
        showToppingButtons();
        produktPreisBerechnen();
    }
    function handleEisVanille2(_eventSetEis: Event): void {
        eisSorte2.setAttribute("src", "Sortiment/EisVanille.png");
        eisSorte2.setAttribute("alt", "Vanilleeis");
        finalEiskugel2 = "Sortiment/EisVanille.png";
        showToppingButtons();
        produktPreisBerechnen();
    }
    function handleEisHeidelbeere2(_eventSetEis: Event): void {
        eisSorte2.setAttribute("src", "Sortiment/EisHeidelbeere.png");
        eisSorte2.setAttribute("alt", "Heidelbeereis");
        finalEiskugel2 = "Sortiment/EisHeidelbeere.png";
        showToppingButtons();
        produktPreisBerechnen();
    }
    function handleEisHaselnuss2(_eventSetEis: Event): void {
        eisSorte2.setAttribute("src", "Sortiment/EisHaselnuss.png");
        eisSorte2.setAttribute("alt", "Haselnusseis");
        finalEiskugel2 = "Sortiment/EisHaselnuss.png";
        showToppingButtons();
        produktPreisBerechnen();
    }
    

    //Eiskugel1 -> untere Kugel
    document.getElementById("EisSchoko")!.addEventListener("click", handleEisSchoko);
    document.getElementById("EisErdbeere")!.addEventListener("click", handleEisErdbeere);
    document.getElementById("EisVanille")!.addEventListener("click", handleEisVanille);
    document.getElementById("EisHeidelbeere")!.addEventListener("click", handleEisHeidelbeere);
    document.getElementById("EisHaselnuss")!.addEventListener("click", handleEisHaselnuss);

    function handleEisSchoko(_eventSetEis: Event): void {
        eisSorte.setAttribute("src", "Sortiment/EisSchoko.png");
        eisSorte.setAttribute("alt", "Schokoladeneis");
        finalEiskugel = "Sortiment/EisSchoko.png";
        showEis2Buttons();
        produktPreisBerechnen();
    }
    function handleEisErdbeere(_eventSetEis: Event): void {
        eisSorte.setAttribute("src", "Sortiment/EisErdbeere.png");
        eisSorte.setAttribute("alt", "Erdbeereis");
        finalEiskugel = "Sortiment/EisErdbeere.png";
        showEis2Buttons();
        produktPreisBerechnen();
    }
    function handleEisVanille(_eventSetEis: Event): void {
        eisSorte.setAttribute("src", "Sortiment/EisVanille.png");
        eisSorte.setAttribute("alt", "Vanilleeis");
        finalEiskugel = "Sortiment/EisVanille.png";
        showEis2Buttons();
        produktPreisBerechnen();
    }
    function handleEisHeidelbeere(_eventSetEis: Event): void {
        eisSorte.setAttribute("src", "Sortiment/EisHeidelbeere.png");
        eisSorte.setAttribute("alt", "Heidelbeereis");
        finalEiskugel = "Sortiment/EisHeidelbeere.png";
        showEis2Buttons();
        produktPreisBerechnen();
    }
    function handleEisHaselnuss(_eventSetEis: Event): void {
        eisSorte.setAttribute("src", "Sortiment/EisHaselnuss.png");
        eisSorte.setAttribute("alt", "Haselnusseis");
        finalEiskugel = "Sortiment/EisHaselnuss.png";
        showEis2Buttons();
        produktPreisBerechnen();
    }


    //Behaelter
    document.getElementById("BehaelterWaffel")!.addEventListener("click", handleBehaelterWaffel);
    document.getElementById("BehaelterBecher")!.addEventListener("click", handleBehaelterBecher);

    function handleBehaelterWaffel(_eventSetBehaelter: Event): void {
        eisBehaelter.setAttribute("src", "Sortiment/Waffel.png");
        eisBehaelter.setAttribute("alt", "Waffel");
        eisBehaelter.setAttribute("id", "BehaelterWaffel");
        finalBehaelter = "Sortiment/Waffel.png";
        showEisButtons();
    }
    function handleBehaelterBecher(_eventSetBehaelter: Event): void {
        eisBehaelter.setAttribute("src", "Sortiment/Becher.png");
        eisBehaelter.setAttribute("alt", "Becher");
        eisBehaelter.setAttribute("id", "BehaelterBecher");
        finalBehaelter = "Sortiment/Becher.png";
        showEisButtons();
    }


    document.getElementById("bestellungHinzufuegen")!.addEventListener("click", handleBestellungHinzufuegen);

    document.getElementById("Reset")!.addEventListener("click", handeleReset);

    function handeleReset(_eventReset: Event): void {
        defaultDarstellung();
        hideToppingUndEisButtons();
    }

    function handleBestellungHinzufuegen(_eventHinzufuegen: Event): void {

       /*  let produkt: Produkt = {
            topping: finalTopping,
            eissorte2: finalEiskugel2,
            eissorte: finalEiskugel,
            behaelter: finalBehaelter,
            preis: finalPreis
        }; */

        localStorage.setItem("Topping", finalTopping);
        localStorage.setItem("Eis2", finalEiskugel2);
        localStorage.setItem("Eis1", finalEiskugel);
        localStorage.setItem("Behaelter", finalBehaelter);
        localStorage.setItem("Preis", finalPreis.toString());

        location.replace("KundeBestellungSenden.html");

    }


}
