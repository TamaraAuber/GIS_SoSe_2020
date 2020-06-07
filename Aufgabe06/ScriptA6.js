"use strict";
var Aufgabe06;
(function (Aufgabe06) {
    //Kategorie 1: Figuren, Kategorie 2: Film-Replika, Kategorie 3: Standard-Brieföffner
    //Produkte Kategorie 1
    let produktF1 = {
        name: "Ritter mit Schwert und Schild",
        info: "<li>Ritter mit Schwert und Schild</li><li>Material: Kunststein/Metall</li>",
        preis: 18.95,
        bild: "Figuren/F1.PNG",
        kategorie: 1
    };
    let produktF2 = {
        name: "zwei Drachen",
        info: "<li>Brieföffner gehalten von zwei Drachen</li><li>Material: Kunststein/Metall</li>",
        preis: 24.95,
        bild: "Figuren/F2.PNG",
        kategorie: 1
    };
    let produktF3 = {
        name: "Vast Sword",
        info: "<li>Drache - Vast Sword</li><li>Material: Kunststein/Metall</li>",
        preis: 44.95,
        bild: "Figuren/F3.PNG",
        kategorie: 1
    };
    let produktF4 = {
        name: "Litche Blade",
        info: "<li>Drache - Litche Blade</li><li>Material: Kunststein/Metall</li>",
        preis: 54.95,
        bild: "Figuren/F4.PNG",
        kategorie: 1
    };
    let produktF5 = {
        name: "The Evil Subject",
        info: "<li>The Evil Subject</li><li>Material: Kunststein/Metall</li>",
        preis: 24.95,
        bild: "Figuren/F5.PNG",
        kategorie: 1
    };
    let produktF6 = {
        name: "Herrin vom See",
        info: "<li>Herrin vom See</li><li>Material: Kunststein/Metall</li>",
        preis: 149.99,
        bild: "Figuren/F6.PNG",
        kategorie: 1
    };
    let produktF7 = {
        name: "Ritter",
        info: " <li>Ritter kniend</li><li>Material: Kunststein/Metall</li>",
        preis: 36.95,
        bild: "Figuren/F7.PNG",
        kategorie: 1
    };
    let produktF8 = {
        name: "Zenturio",
        info: " <li>Römischer Zenturio</li><li>mit Vertiefung für Füller o.ä.</li>",
        preis: 54.88,
        bild: "Figuren/F8.PNG",
        kategorie: 1
    };
    let produktF9 = {
        name: "King Arthur",
        info: "<li>König Arthur zieht Schwert aus dem Stein</li><li>Material: Bronziert/Metall</li>",
        preis: 51.89,
        bild: "Figuren/F9.PNG",
        kategorie: 1
    };
    let produktF10 = {
        name: "Precious Sword",
        info: " <li>Drache - Precious Sword</li><li>Material: Kunststein/Metall</li>",
        preis: 25.95,
        bild: "Figuren/F10.PNG",
        kategorie: 1
    };
    let produktF11 = {
        name: "Sword of Alastar",
        info: " <li>Drache - Sword of Alastar</li><li>Material: Kunststein/Metall</li>",
        preis: 23.95,
        bild: "Figuren/F11.PNG",
        kategorie: 1
    };
    let produktF12 = {
        name: "Flame Blade",
        info: " <li>Drache - Flame Blade</li><li>Material: Kunststein/Metall</li>",
        preis: 47.55,
        bild: "Figuren/F12.PNG",
        kategorie: 1
    };
    //Produkte Kategorie 2
    let produktM1 = {
        name: "Sich",
        info: "<li>Schwert Stich</li><li>inkl. Schmuckbox</li>",
        preis: 39.99,
        bild: "Movie/M1.jpg",
        kategorie: 2
    };
    let produktM2 = {
        name: "Andruil - Flamme des Westens",
        info: " <li>Schwert Andruil</li><li>inkl. Schmuckbox</li>",
        preis: 39.99,
        bild: "Movie/M2.jpg",
        kategorie: 2
    };
    let produktM3 = {
        name: "Stich, Glamdring, Orcrist",
        info: "<li>Set: Stich, Glamdring, Orcrist</li><li>inkl. Schmuckbox</li>",
        preis: 78.99,
        bild: "Movie/M3.jpg",
        kategorie: 2
    };
    let produktM4 = {
        name: "Longclaw",
        info: " <li>Schwert Longclaw</li><li>Länge 25 cm</li>",
        preis: 34.99,
        bild: "Movie/M4.jpg",
        kategorie: 2
    };
    let produktM5 = {
        name: "Elben-Dolch",
        info: "<li>Tauriels Dolch</li><li>inkl. Schmuckbox</li>",
        preis: 39.99,
        bild: "Movie/M5.jpg",
        kategorie: 2
    };
    let produktM6 = {
        name: "Herugrim",
        info: "<li>Schwert Herugrim</li><li>inkl. Schmuckbox</li>",
        preis: 39.99,
        bild: "Movie/M6.jpg",
        kategorie: 2
    };
    let produktM7 = {
        name: "Hadhafang",
        info: "<li>Schwert Hadhafang</li><li>inkl. Schmuckbox</li>",
        preis: 39.99,
        bild: "Movie/M7.jpg",
        kategorie: 2
    };
    let produktM8 = {
        name: "Ice",
        info: "<li>Schwert Ice</li><li>Länge 24cm</li>",
        preis: 34.99,
        bild: "Movie/M8.jpg",
        kategorie: 2
    };
    let produktM9 = {
        name: "Zwergenschwert",
        info: "<li>Thorins Schwert</li><li>inkl. Schmuckbox</li>",
        preis: 39.99,
        bild: "Movie/M9.jpg",
        kategorie: 2
    };
    let produktM10 = {
        name: "Narsil",
        info: "<li>Schwert Narsil</li><li>inkl. Schmuckbox</li>",
        preis: 39.99,
        bild: "Movie/M10.jpg",
        kategorie: 2
    };
    let produktM11 = {
        name: "Luke Skywalker - Lichtschwert",
        info: "<li>Lichtschwert</li><li>handbemalt</li>",
        preis: 24.99,
        bild: "Movie/M11.jpg",
        kategorie: 2
    };
    let produktM12 = {
        name: "Darth Vader - Lichtschwert",
        info: " <li>Lichtschwert</li><li>handbemalt</li>",
        preis: 24.99,
        bild: "Movie/M12.jpg",
        kategorie: 2
    };
    let produktM13 = {
        name: "Hogwarts Brieföffner",
        info: "<li>Hogwarts Brieföffner</li><li>inkl. Geschenbox</li>",
        preis: 12.99,
        bild: "Movie/M13.PNG",
        kategorie: 2
    };
    //Produkte Kategorie 3
    let produktB1 = {
        name: "Brieföffner Stahl",
        info: "<li>rostfreier Stahlgriff</li><li>Klinge 24,5cm</li>",
        preis: 2.99,
        bild: "Standard/B1.PNG",
        kategorie: 3
    };
    let produktB2 = {
        name: "Brieföffner Kunststoff",
        info: "<li>Klinge aus Metall</li><li>Griffzone aus Kunststoff</li>",
        preis: 0.55,
        bild: "Standard/B2.jpg",
        kategorie: 3
    };
    let produktB3 = {
        name: "Brieföffner Holz",
        info: "<li>Holzgriff</li><li>gebogene Klinge</li>",
        preis: 4.55,
        bild: "Standard/B3.PNG",
        kategorie: 3
    };
    //Gesammelte Produkte
    let produktsortiment = [produktF1, produktF2, produktF3, produktF4, produktF5, produktF6, produktF7, produktF8, produktF9, produktF10, produktF11, produktF12, produktM1, produktM2, produktM3, produktM4, produktM5, produktM6, produktM7, produktM8, produktM9, produktM10, produktM11, produktM12, produktM13, produktB1, produktB2, produktB3];
    let warenkorbGesamtpreis = 0;
    let artikelAnzahl = 0;
    /* let showWhat: number = 123; */
    /* document.getElementById("auswahlFiguren")!.addEventListener("click", handleFigurenAnzeigen); */
    /*   function handleFigurenAnzeigen(_eventZeigeFiguren: Event): void {
          console.log("Hi");
          showWhat = 2;
          console.log(showWhat);
      } */
    //Produkterstellung in Shop
    for (let x = 0; x < produktsortiment.length; x++) {
        let produktkasten = document.createElement("div");
        produktkasten.setAttribute("class", "Produkt");
        produktkasten.setAttribute("id", "idProduktkasten" + x);
        //ordnet Produkt in entsprechender Kategorie an
        if (produktsortiment[x].kategorie == 1) {
            document.getElementById("Kategorie-Figuren").appendChild(produktkasten);
            /* if (showWhat == 1 || showWhat == 123) {
                produktkasten.hidden = false;
            }
            else {
                produktkasten.hidden = true;
            } */
        }
        if (produktsortiment[x].kategorie == 2) {
            document.getElementById("Kategorie-FilmReplika").appendChild(produktkasten);
            /*  if (showWhat == 2 || showWhat == 123) {
                 produktkasten.hidden = false;
             }
             else {
                 produktkasten.hidden = true;
             } */
        }
        if (produktsortiment[x].kategorie == 3) {
            document.getElementById("Kategorie-StandardBrieföffner").appendChild(produktkasten);
            /*  if (showWhat == 3 || showWhat == 123) {
                 produktkasten.hidden = false;
             }
             else {
                 produktkasten.hidden = true;
             } */
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
        function handleWarenkorb(_eventbutton) {
            warenkorbGesamtpreis = warenkorbGesamtpreis + produktsortiment[x].preis;
            console.log(warenkorbGesamtpreis);
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
    if (artikelAnzahl == 0) {
        warenkorbAnzeige.hidden = true;
    }
    function handleAnzeige(_eventAnzeige) {
        warenkorbAnzeige.hidden = false;
        artikelAnzahl += 1;
        anzeigeZahl.innerHTML = artikelAnzahl + "";
    }
})(Aufgabe06 || (Aufgabe06 = {}));
//# sourceMappingURL=ScriptA6.js.map