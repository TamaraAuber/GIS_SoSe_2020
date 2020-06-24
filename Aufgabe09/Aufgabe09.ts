namespace aufgabe09 {

    document.getElementById("button1")!.addEventListener("click", handleButton1);
    document.getElementById("button2")!.addEventListener("click", handleButton2);

    //gibt antwort in HTML Seite aus
    async function handleButton1(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020justkeepswimming.herokuapp.com/";
       /*  let url: string = "http://localhost:8100"; */
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/html" + "?" + query.toString();
    
        /* console.log((await fetch(url)).url);   */
        
        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        /* console.log(responseText); */

        let antwort: HTMLElement = document.createElement("p");
        antwort.innerHTML = responseText;
        document.body.appendChild(antwort);
    }

    //gibt Antwort in Konsole aus
    async function handleButton2(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020justkeepswimming.herokuapp.com/";
        /* let url: string = "http://localhost:8100"; */
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "/json" + "?" + query.toString();


        let response: Response = await fetch(url);
        let responseText: string = await response.json();
        
        console.log(responseText);
    }

}