"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A08Server = void 0;
const Http = require("http");
var A08Server;
(function (A08Server) {
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
        /* console.log("I hear voices!"); */
        console.log(_request.url);
        console.log(_response);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //schreibt url von der Anfrage kommt
        _response.write(_request.url);
        _response.end();
    }
})(A08Server = exports.A08Server || (exports.A08Server = {}));
//# sourceMappingURL=aufgabe08server.js.map