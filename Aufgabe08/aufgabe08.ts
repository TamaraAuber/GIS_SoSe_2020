namespace aufgabe08 {

    document.getElementById("button")!.addEventListener("click", handleButton);

    async function handleButton(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://gissose2020justkeepswimming.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
    
        console.log((await fetch(url)).url);          
    }

}