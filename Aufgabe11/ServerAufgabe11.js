"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A11Server = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var A11Server;
(function (A11Server) {
    console.log("Starting server");
    let orders;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    /* let databaseUrl: string = "mongodb://localhost:27017"; */
    let databaseUrl = "mongodb+srv://TestUser:TestUserPasswort@supermegagiscluster-ox4h7.mongodb.net/Test?retryWrites=true&w=majority";
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("Test").collection("Students");
        console.log("Database Connection", orders != undefined);
    }
    //gibt "Listening" in der Konsole aus
    function handleListen() {
        console.log("Listening");
    }
    //antwortet auf Anfrage in der Konsole mit "I hear voices"
    async function handleRequest(_request, _response) {
        console.log(_request.url);
        //richtet HTML Seite ein
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = Url.parse(_request.url, true);
            if (q.pathname == "/retrieve") {
                _response.write(await retrieveOrders());
            }
            if (q.pathname == "/send") {
                storeOrder(q.query);
            }
            let jsonString = JSON.stringify(q.query);
            _response.write(jsonString);
        }
        _response.end();
    }
    function storeOrder(_order) {
        orders.insert(_order);
    }
    async function retrieveOrders() {
        /*  orders.find(); */
        let ausgabe = await orders.find().toArray();
        return JSON.stringify(ausgabe);
    }
})(A11Server = exports.A11Server || (exports.A11Server = {}));
//mongodb+srv://TestUser:<password>@supermegagiscluster-ox4h7.mongodb.net/<dbname>?retryWrites=true&w=majority
//# sourceMappingURL=ServerAufgabe11.js.map