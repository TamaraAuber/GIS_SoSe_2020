"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let eingekaufteProdukte;
    let artikelAnzahlGesamt = parseInt(localStorage.getItem("anzahlArtikel"));
    let preisabziehen = 0;
    let emptyCartImage = document.createElement("img");
    document.getElementById("leererWarenkorb").appendChild(emptyCartImage);
    let shoppingcartNegative = "shoppingcartNegative.png";
    emptyCartImage.setAttribute("src", shoppingcartNegative);
    let emptyCart = document.createElement("p");
    document.getElementById("leererWarenkorb").appendChild(emptyCart);
    emptyCart.innerHTML = "Dein Warenkorb ist leer";
    let wareGesamtPreis = document.createElement("p");
    document.getElementById("PreisGesamt").appendChild(wareGesamtPreis);
    if (localStorage.getItem("gesamtPreis")) {
        document.getElementById("leererWarenkorb").hidden = true;
        wareGesamtPreis.innerHTML = "Preis " + localStorage.getItem("gesamtPreis") + " €";
        let warenkorbLoeschen = document.createElement("button");
        document.getElementById("PreisGesamt").appendChild(warenkorbLoeschen);
        warenkorbLoeschen.innerHTML = "Warenkorb löschen";
        warenkorbLoeschen.addEventListener("click", handlerWarenkorbLoeschen);
    }
    function handlerWarenkorbLoeschen(_eventbutton) {
        leererWarenkorb();
    }
    function leererWarenkorb() {
        while (document.getElementById("ArtikelInWarenkorb").hasChildNodes()) {
            document.getElementById("ArtikelInWarenkorb").removeChild(document.getElementById("ArtikelInWarenkorb")?.firstChild);
        }
        while (document.getElementById("PreisGesamt").hasChildNodes()) {
            document.getElementById("PreisGesamt").removeChild(document.getElementById("PreisGesamt")?.firstChild);
        }
        localStorage.clear();
        document.getElementById("leererWarenkorb").hidden = false;
    }
    for (let x = 0; x < artikelAnzahlGesamt; x++) {
        let produktkasten = document.createElement("div");
        let anzahl = document.createElement("p");
        if (localStorage.getItem("produkt" + x)) {
            eingekaufteProdukte = JSON.parse(localStorage.getItem("produkt" + x));
            produktkasten.setAttribute("class", "Produkt");
            produktkasten.setAttribute("id", "idProduktkasten" + x);
            document.getElementById("ArtikelInWarenkorb").appendChild(produktkasten);
            document.getElementById("idProduktkasten" + x).appendChild(anzahl);
            anzahl.setAttribute("id", "ProduktAnzahl");
            artikelAnzahl();
            let produktueberschrift = document.createElement("h3");
            document.getElementById("idProduktkasten" + x).appendChild(produktueberschrift);
            produktueberschrift.innerHTML = eingekaufteProdukte.name;
            let produktbild = document.createElement("img");
            document.getElementById("idProduktkasten" + x).appendChild(produktbild);
            produktbild.setAttribute("src", eingekaufteProdukte.bild);
            let produktinfo = document.createElement("ul");
            document.getElementById("idProduktkasten" + x).appendChild(produktinfo);
            produktinfo.innerHTML = eingekaufteProdukte.info;
            let produktpreis = document.createElement("p");
            document.getElementById("idProduktkasten" + x).appendChild(produktpreis);
            produktpreis.innerHTML = eingekaufteProdukte.preis + " €";
            localStorage.setItem("preisProdukt" + x, eingekaufteProdukte.preis);
            let entfernenbutton = document.createElement("button");
            document.getElementById("idProduktkasten" + x).appendChild(entfernenbutton);
            entfernenbutton.innerHTML = "Artikel entfernen";
            entfernenbutton.addEventListener("click", handlerArtikelEntfernen);
        }
        let wieVielProdukte = parseInt(localStorage.getItem("produktanzahl" + x));
        function handlerArtikelEntfernen(_evententfernen) {
            if (parseInt(localStorage.getItem("produktanzahl" + x)) == 1) {
                produktkasten.remove();
                localStorage.removeItem("produkt" + x);
            }
            //bei Artikelentfernung wird entsprechender Preis abgezogen
            preisabziehen = parseFloat(localStorage.getItem("gesamtPreis")) - parseFloat(localStorage.getItem("preisProdukt" + x));
            localStorage.setItem("gesamtPreis", preisabziehen.toFixed(2));
            wareGesamtPreis.innerHTML = "Preis " + localStorage.getItem("gesamtPreis") + " €";
            //ändert Artikel-Anzeige der einzelnen Produkte im Warenkorb
            wieVielProdukte -= 1;
            localStorage.setItem("produktanzahl" + x, wieVielProdukte.toString());
            artikelAnzahl();
            if (parseInt(localStorage.getItem("gesamtPreis")) <= 0) {
                leererWarenkorb();
            }
            //neue Anzahl der Artikel im Warenkorb
            let neueArtikelAnzahl = parseInt(localStorage.getItem("artikelWarenkorb")) - 1;
            localStorage.setItem("artikelWarenkorb", neueArtikelAnzahl.toString());
        }
        function artikelAnzahl() {
            anzahl.innerHTML = localStorage.getItem("produktanzahl" + x);
        }
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=ScriptA7Warenkorb.js.map