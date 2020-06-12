"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    let produktsortiment;
    let warenkorbGesamtpreis = 0;
    let artikelAnzahl = 0;
    communicate("Daten.json");
    async function communicate(_url) {
        let response = await fetch(_url);
        produktsortiment = await response.json();
        warenErstellung();
    }
    function warenErstellung() {
        localStorage.setItem("anzahlArtikel", produktsortiment.length.toString());
        for (let x = 0; x < produktsortiment.length; x++) {
            let produktkasten = document.createElement("div");
            produktkasten.setAttribute("class", "Produkt");
            produktkasten.setAttribute("id", "idProduktkasten" + x);
            //ordnet Produkt in entsprechender Kategorie an
            if (produktsortiment[x].kategorie == 1) {
                document.getElementById("Kategorie-Figuren").appendChild(produktkasten);
            }
            if (produktsortiment[x].kategorie == 2) {
                document.getElementById("Kategorie-FilmReplika").appendChild(produktkasten);
            }
            if (produktsortiment[x].kategorie == 3) {
                document.getElementById("Kategorie-StandardBrieföffner").appendChild(produktkasten);
            }
            let produktueberschrift = document.createElement("h3");
            document.getElementById("idProduktkasten" + x).appendChild(produktueberschrift);
            produktueberschrift.innerHTML = produktsortiment[x].name;
            let produktbild = document.createElement("img");
            document.getElementById("idProduktkasten" + x).appendChild(produktbild);
            produktbild.setAttribute("src", produktsortiment[x].bild);
            let produktinfo = document.createElement("ul");
            document.getElementById("idProduktkasten" + x).appendChild(produktinfo);
            produktinfo.innerHTML = produktsortiment[x].info;
            let produktpreis = document.createElement("p");
            document.getElementById("idProduktkasten" + x).appendChild(produktpreis);
            produktpreis.innerHTML = produktsortiment[x].preis + " €";
            let einkaufsbutton = document.createElement("button");
            document.getElementById("idProduktkasten" + x).appendChild(einkaufsbutton);
            einkaufsbutton.innerHTML = "In den Warenkorb";
            einkaufsbutton.addEventListener("click", handleWarenkorb);
            einkaufsbutton.addEventListener("click", handleAnzeige);
            let produktWieOft = 0;
            function handleWarenkorb(_eventbutton) {
                warenkorbGesamtpreis = warenkorbGesamtpreis + produktsortiment[x].preis;
                localStorage.setItem("gesamtPreis", warenkorbGesamtpreis.toFixed(2));
                localStorage.setItem("produkt" + x, JSON.stringify(produktsortiment[x]));
                if (localStorage.getItem("produkt" + x)) {
                    produktWieOft++;
                    localStorage.setItem("produktanzahl" + x, produktWieOft.toString());
                }
            }
            // Ein-/Ausblenden der Kategorien
            document.getElementById("auswahlFiguren").addEventListener("click", handleFigurenAnzeigen);
            function handleFigurenAnzeigen(_eventZeigeFiguren) {
                if (produktsortiment[x].kategorie == 1) {
                    produktkasten.hidden = false;
                }
                if (produktsortiment[x].kategorie == 3 || produktsortiment[x].kategorie == 2) {
                    produktkasten.hidden = true;
                }
                document.getElementById("Figuren").hidden = false;
                document.getElementById("Film-Replika").hidden = true;
                document.getElementById("Standard-Brieföffner").hidden = true;
            }
            document.getElementById("auswahlReplika").addEventListener("click", handleReplikaAnzeigen);
            function handleReplikaAnzeigen(_eventZeigeReplika) {
                if (produktsortiment[x].kategorie == 1 || produktsortiment[x].kategorie == 3) {
                    produktkasten.hidden = true;
                }
                if (produktsortiment[x].kategorie == 2) {
                    produktkasten.hidden = false;
                }
                document.getElementById("Figuren").hidden = true;
                document.getElementById("Film-Replika").hidden = false;
                document.getElementById("Standard-Brieföffner").hidden = true;
            }
            document.getElementById("auswahlStandard").addEventListener("click", handleStandardAnzeigen);
            function handleStandardAnzeigen(_eventZeigeStandard) {
                if (produktsortiment[x].kategorie == 1 || produktsortiment[x].kategorie == 2) {
                    produktkasten.hidden = true;
                }
                if (produktsortiment[x].kategorie == 3) {
                    produktkasten.hidden = false;
                }
                document.getElementById("Figuren").hidden = true;
                document.getElementById("Film-Replika").hidden = true;
                document.getElementById("Standard-Brieföffner").hidden = false;
            }
            document.getElementById("auswahlAlleArtikel").addEventListener("click", handleAllesAnzeigen);
            function handleAllesAnzeigen(_eventZeigeAlles) {
                produktkasten.hidden = false;
                document.getElementById("Figuren").hidden = false;
                document.getElementById("Film-Replika").hidden = false;
                document.getElementById("Standard-Brieföffner").hidden = false;
            }
        }
        //Warenkorb Artikelanzahl
        let warenkorbAnzeige = document.createElement("div");
        warenkorbAnzeige.setAttribute("id", "warenkorbAnzeige");
        document.getElementById("shoppingcart").appendChild(warenkorbAnzeige);
        let anzeigeZahl = document.createElement("p");
        document.getElementById("warenkorbAnzeige").appendChild(anzeigeZahl);
        if (artikelAnzahl == 0 || parseInt(localStorage.getItem("artikelWarenkorb")) == 0) {
            warenkorbAnzeige.hidden = true;
        }
        if (localStorage.getItem("artikelWarenkorb")) {
            warenkorbAnzeige.hidden = false;
            anzeigeZahl.innerHTML = localStorage.getItem("artikelWarenkorb");
            artikelAnzahl = parseInt(localStorage.getItem("artikelWarenkorb"));
        }
        function handleAnzeige(_eventAnzeige) {
            warenkorbAnzeige.hidden = false;
            artikelAnzahl += 1;
            localStorage.setItem("artikelWarenkorb", artikelAnzahl.toString());
            anzeigeZahl.innerHTML = localStorage.getItem("artikelWarenkorb");
            artikelAnzahl = parseInt(localStorage.getItem("artikelWarenkorb"));
        }
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=ScriptA7.js.map