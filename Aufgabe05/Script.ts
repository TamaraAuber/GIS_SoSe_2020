namespace Aufgabe05 {

    interface Produkt {
        name: string;
        info: string;
        preis: number;
        bild: string;
        kategorie: number;
    }
    //Kategorie 1: Figuren, Kategorie 2: Film-Replika, Kategorie 3: Standard-Brieföffner


    //Produkte Kategorie 1
    let produktF1: Produkt = {
        name: "Ritter mit Schwert und Schild",
        info: "<li>Ritter mit Schwert und Schild</li><li>Material: Kunststein/Metall</li>",
        preis: 18.95,
        bild: "Figuren/F1.PNG",
        kategorie: 1
    };
    let produktF2: Produkt = {
        name: "zwei Drachen",
        info: "<li>Brieföffner gehalten von zwei Drachen</li><li>Material: Kunststein/Metall</li>",
        preis: 24.95,
        bild: "Figuren/F2.PNG",
        kategorie: 1
    };
    let produktF3: Produkt = {
        name: "Vast Sword",
        info: "<li>Drache - Vast Sword</li><li>Material: Kunststein/Metall</li>",
        preis: 44.95,
        bild: "Figuren/F3.PNG",
        kategorie: 1
    };
    let produktF4: Produkt = {
        name: "Litche Blade",
        info: "<li>Drache - Litche Blade</li><li>Material: Kunststein/Metall</li>",
        preis: 54.95,
        bild: "Figuren/F4.PNG",
        kategorie: 1
    };
    let produktF5: Produkt = {
        name: "The Evil Subject",
        info: "<li>The Evil Subject</li><li>Material: Kunststein/Metall</li>",
        preis: 24.95,
        bild: "Figuren/F5.PNG",
        kategorie: 1
    };
    let produktF6: Produkt = {
        name: "Herrin vom See",
        info: "<li>Herrin vom See</li><li>Material: Kunststein/Metall</li>",
        preis: 149.95,
        bild: "Figuren/F6.PNG",
        kategorie: 1
    };
    let produktF7: Produkt = {
        name: "Ritter",
        info: " <li>Ritter kniend</li><li>Material: Kunststein/Metall</li>",
        preis: 36.95,
        bild: "Figuren/F7.PNG",
        kategorie: 1
    };
    let produktF8: Produkt = {
        name: "Zenturio",
        info: " <li>Römischer Zenturio</li><li>mit Vertiefung für Füller o.ä.</li>",
        preis: 54.88,
        bild: "Figuren/F8.PNG",
        kategorie: 1
    };
    let produktF9: Produkt = {
        name: "King Arthur",
        info: "<li>König Arthur zieht Schwert aus dem Stein</li><li>Material: Bronziert/Metall</li>",
        preis: 51.89,
        bild: "Figuren/F9.PNG",
        kategorie: 1
    };
    let produktF10: Produkt = {
        name: "Precious Sword",
        info: " <li>Drache - Precious Sword</li><li>Material: Kunststein/Metall</li>",
        preis: 25.95,
        bild: "Figuren/F10.PNG",
        kategorie: 1
    };
    let produktF11: Produkt = {
        name: "Sword of Alastar",
        info: " <li>Drache - Sword of Alastar</li><li>Material: Kunststein/Metall</li>",
        preis: 23.95,
        bild: "Figuren/F11.PNG",
        kategorie: 1
    };
    let produktF12: Produkt = {
        name: "Flame Blade",
        info: " <li>Drache - Flame Blade</li><li>Material: Kunststein/Metall</li>",
        preis: 47.55,
        bild: "Figuren/F12.PNG",
        kategorie: 1
    };


    //Produkte Kategorie 2
    let produktM1: Produkt = {
        name: "Sich",
        info: "<li>Schwert Stich</li><li>inkl. Schmuckbox</li>",
        preis: 39.99,
        bild: "Movie/M1.jpg",
        kategorie: 2
    };
    let produktM2: Produkt = {
        name: "Andruil - Flamme des Westens",
        info: " <li>Schwert Andruil</li><li>inkl. Schmuckbox</li>",
        preis: 39.99,
        bild: "Movie/M2.jpg",
        kategorie: 2
    };
    let produktM3: Produkt = {
        name: "Stich, Glamdring, Orcrist",
        info: "<li>Set: Stich, Glamdring, Orcrist</li><li>inkl. Schmuckbox</li>",
        preis: 78.99,
        bild: "Movie/M3.jpg",
        kategorie: 2
    };
    let produktM4: Produkt = {
        name: "Longclaw",
        info: " <li>Schwert Longclaw</li><li>Länge 25 cm</li>",
        preis: 34.99,
        bild: "Movie/M4.jpg",
        kategorie: 2
    };
    let produktM5: Produkt = {
        name: "Elben-Dolch",
        info: "<li>Tauriels Dolch</li><li>inkl. Schmuckbox</li>",
        preis: 39.99,
        bild: "Movie/M5.jpg",
        kategorie: 2
    };
    let produktM6: Produkt = {
        name: "Herugrim",
        info: "<li>Schwert Herugrim</li><li>inkl. Schmuckbox</li>",
        preis: 39.99,
        bild: "Movie/M6.jpg",
        kategorie: 2
    };
    let produktM7: Produkt = {
        name: "Hadhafang",
        info: "<li>Schwert Hadhafang</li><li>inkl. Schmuckbox</li>",
        preis: 39.99,
        bild: "Movie/M7.jpg",
        kategorie: 2
    };
    let produktM8: Produkt = {
        name: "Ice",
        info: "<li>Schwert Ice</li><li>Länge 24cm</li>",
        preis: 34.99,
        bild: "Movie/M8.jpg",
        kategorie: 2
    };
    let produktM9: Produkt = {
        name: "Zwergenschwert",
        info: "<li>Thorins Schwert</li><li>inkl. Schmuckbox</li>",
        preis: 39.99,
        bild: "Movie/M9.jpg",
        kategorie: 2
    };
    let produktM10: Produkt = {
        name: "Narsil",
        info: "<li>Schwert Narsil</li><li>inkl. Schmuckbox</li>",
        preis: 39.99,
        bild: "Movie/M10.jpg",
        kategorie: 2
    };
    let produktM11: Produkt = {
        name: "Luke Skywalker - Lichtschwert",
        info: "<li>Lichtschwert</li><li>handbemalt</li>",
        preis: 24.99,
        bild: "Movie/M11.jpg",
        kategorie: 2
    };
    let produktM12: Produkt = {
        name: "Darth Vader - Lichtschwert",
        info: " <li>Lichtschwert</li><li>handbemalt</li>",
        preis: 24.99,
        bild: "Movie/M12.jpg",
        kategorie: 2
    };
    let produktM13: Produkt = {
        name: "Hogwarts Brieföffner",
        info: "<li>Hogwarts Brieföffner</li><li>inkl. Geschenbox</li>",
        preis: 12.99,
        bild: "Movie/M13.PNG",
        kategorie: 2
    };


    //Produkte Kategorie 3
    let produktB1: Produkt = {
        name: "Brieföffner Stahl",
        info: "<li>rostfreier Stahlgriff</li><li>Klinge 24,5cm</li>",
        preis: 2.99,
        bild: "Standard/B1.PNG",
        kategorie: 3
    };
    let produktB2: Produkt = {
        name: "Brieföffner Kunststoff",
        info: "<li>Klinge aus Metall</li><li>Griffzone aus Kunststoff</li>",
        preis: 0.55,
        bild: "Standard/B2.jpg",
        kategorie: 3
    };
    let produktB3: Produkt = {
        name: "Brieföffner Holz",
        info: "<li>Holzgriff</li><li>gebogene Klinge</li>",
        preis: 4.55,
        bild: "Standard/B3.PNG",
        kategorie: 3
    };



    //Gesammelte Produkte
    let produktsortiment: Produkt[] = [produktF1, produktF2, produktF3, produktF4, produktF5, produktF6, produktF7, produktF8, produktF9, produktF10, produktF11, produktF12, produktM1, produktM2, produktM3, produktM4, produktM5, produktM6, produktM7, produktM8, produktM9, produktM10, produktM11, produktM12, produktM13, produktB1, produktB2, produktB3];


    //Produkterstellung in Shop
    for (let x: number = 0; x < produktsortiment.length; x++) {

        let produktkasten: HTMLElement = document.createElement("div");
        produktkasten.setAttribute("class", "Produkt");
        produktkasten.setAttribute("id", "idProduktkasten" + x);

        //ordnet Produkt in entsprechender Kategorie an
        if (produktsortiment[x].kategorie == 1) {
            document.getElementById("Kategorie-Figuren")!.appendChild(produktkasten);
        }
        if (produktsortiment[x].kategorie == 2) {
            document.getElementById("Kategorie-FilmReplika")!.appendChild(produktkasten);
        }
        if (produktsortiment[x].kategorie == 3) {
            document.getElementById("Kategorie-StandardBrieföffner")!.appendChild(produktkasten);
        }


        let produktueberschrift: HTMLElement = document.createElement("h3");
        document.getElementById("idProduktkasten" + x)!.appendChild(produktueberschrift);
        produktueberschrift.innerHTML = produktsortiment[x].name;

        let produktbild: HTMLElement = document.createElement("img");
        document.getElementById("idProduktkasten" + x)!.appendChild(produktbild);
        produktbild.setAttribute("src", produktsortiment[x].bild);

        let produktinfo: HTMLElement = document.createElement("ul");
        document.getElementById("idProduktkasten" + x)!.appendChild(produktinfo);
        produktinfo.innerHTML = produktsortiment[x].info;

        let produktpreis: HTMLElement = document.createElement("p");
        document.getElementById("idProduktkasten" + x)!.appendChild(produktpreis);
        produktpreis.innerHTML = produktsortiment[x].preis + " €";

        let einkaufsbutton: HTMLElement = document.createElement("button");
        document.getElementById("idProduktkasten" + x)!.appendChild(einkaufsbutton);
        einkaufsbutton.innerHTML = "In den Warenkorb";
    }
}
