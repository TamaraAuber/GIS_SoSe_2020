"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A09Server = void 0;
const Http = require("http");
const Url = require("url");
/* import { ParsedUrlQuery } from "querystring";
import { url } from "inspector"; */
var A09Server;
(function (A09Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    //gibt "Listening" in der Konsole aus
    function handleListen() {
        console.log("Listening");
    }
    //antwortet auf Anfrage in der Konsole mit "I hear voices"
    function handleRequest(_request, _response) {
        console.log(_request.url);
        //richtet HTML Seite ein
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = Url.parse(_request.url, true);
            /* console.log(q); */
            if (q.pathname == "/html") {
                for (let key in q.query) {
                    _response.write(key + ": " + q.query[key] + "<br/>");
                }
            }
            if (q.pathname == "/json") {
                let jsonString = JSON.stringify(q.query);
                _response.write(jsonString);
            }
        }
        _response.end();
    }
})(A09Server = exports.A09Server || (exports.A09Server = {}));
//mongodb+srv://TestUser:<password>@supermegagiscluster-ox4h7.mongodb.net/<dbname>?retryWrites=true&w=majority
//# sourceMappingURL=ServerAufgabe09.js.map