"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EisdieleServer = void 0;
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var EisdieleServer;
(function (EisdieleServer) {
    console.log("Starting server");
    let bestellung;
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    /* let databaseUrl: string = "mongodb://localhost:27017"; */
    let databaseUrl = "mongodb+srv://TestUser:TestUserPasswort@supermegagiscluster-ox4h7.mongodb.net/Eisdiele?retryWrites=true&w=majority";
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
        bestellung = mongoClient.db("Eisdiele").collection("Bestellungen");
        console.log("Database Connection", bestellung != undefined);
    }
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = Url.parse(_request.url, true);
            if (q.pathname == "/retrieve") {
                _response.write(await retrieveBestellungen());
            }
            if (q.pathname == "/send") {
                storeBestellungen(q.query);
            }
            if (q.pathname == "/delete") {
                deleteBestellungen();
            }
            if (q.pathname == "/deleteOneOrder") {
                _response.write(await deleteEinzelneBestellung(q.query));
            }
            if (q.pathname == "/status") {
                _response.write(await statusAendern(q.query));
            }
        }
        _response.end();
    }
    function storeBestellungen(_bestellung) {
        bestellung.insertOne(_bestellung);
    }
    async function deleteBestellungen() {
        bestellung.drop();
    }
    async function deleteEinzelneBestellung(_übergebeneUrl) {
        let bestellungLoeschen = "";
        for (let z in _übergebeneUrl) {
            let wert = _übergebeneUrl[z];
            let object = new Mongo.ObjectID(wert);
            bestellungLoeschen = JSON.stringify(await bestellung.deleteOne({ "_id": object }));
        }
        return bestellungLoeschen;
    }
    async function statusAendern(_übergebeneUrl) {
        let statusAenderung = "";
        for (let z in _übergebeneUrl) {
            let wert = _übergebeneUrl[z];
            let object = new Mongo.ObjectID(wert);
            statusAenderung = JSON.stringify(await bestellung.updateOne({ "_id": object }, { $set: { "status": "versendet" } }));
        }
        return statusAenderung;
    }
    async function retrieveBestellungen() {
        let ausgabe = await bestellung.find().toArray();
        return JSON.stringify(ausgabe);
    }
})(EisdieleServer = exports.EisdieleServer || (exports.EisdieleServer = {}));
//# sourceMappingURL=EisdieleServer.js.map