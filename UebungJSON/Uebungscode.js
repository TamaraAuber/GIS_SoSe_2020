"use strict";
console.log("Start");
communicate("https://hs-furtwangen.github.io/GIS-SoSe-2020/L07/test.txt");
console.log("End");
async function communicate(_url) {
    let response = await fetch(_url);
    console.log("Response", response);
    console.log(await response.text());
}
//# sourceMappingURL=Uebungscode.js.map