namespace KundeClient {

    document.getElementById("Senden")!.addEventListener("click", handleBestellungSenden);

    async function handleBestellungSenden(): Promise<void> {

        (<HTMLInputElement>document.getElementById("BestellungTopping"))!.value = localStorage.getItem("Topping")!;
        (<HTMLInputElement>document.getElementById("BestellungEis2"))!.value = localStorage.getItem("Eis2")!;
        (<HTMLInputElement>document.getElementById("BestellungEis1"))!.value = localStorage.getItem("Eis1")!;
        (<HTMLInputElement>document.getElementById("BestellungBehaelter"))!.value = localStorage.getItem("Behaelter")!;
        (<HTMLInputElement>document.getElementById("BestellungPreis"))!.value = localStorage.getItem("Preis")!;

        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020justkeepswimming.herokuapp.com";
        /* let url: string = "http://localhost:8100"; */
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/send" + "?" + query.toString();

        let response: Response = await fetch(url);
        await response.text();
    }

}