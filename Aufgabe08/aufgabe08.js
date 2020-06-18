"use strict";
var aufgabe08;
(function (aufgabe08) {
    document.getElementById("button").addEventListener("click", handleButton);
    async function handleButton() {
        let formData = new FormData(document.forms[0]);
        let url = "https://gissose2020justkeepswimming.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        console.log((await fetch(url)).url);
    }
})(aufgabe08 || (aufgabe08 = {}));
//# sourceMappingURL=aufgabe08.js.map