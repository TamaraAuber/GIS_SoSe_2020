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
    //gibt "Listening" in der Konsole aus
    function handleListen() {
        console.log("Listening");
    }
    async function handleRequest(_request, _response) {
        console.log(_request.url);
        //richtet HTML Seite ein
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let q = Url.parse(_request.url, true);
            if (q.pathname == "/retrieve") {
                _response.write(await retrieveBestellungen());
                /* await retrieveBestellungen(); */
            }
            if (q.pathname == "/send") {
                storeBestellungen(q.query);
            }
            if (q.pathname == "/delete") {
                console.log("Really delete all?");
                deleteBestellungen();
            }
            if (q.pathname == "/deleteOneOrder") {
                /*  deleteEinzelneBestellung(q.query); */
                _response.write(await deleteEinzelneBestellung(q.query));
            }
            /* let jsonString: String = JSON.stringify(q.query);
            _response.write(jsonString); */
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
        for (let key in _übergebeneUrl) {
            let wert = _übergebeneUrl[key];
            let object = new Mongo.ObjectID(wert);
            bestellungLoeschen = JSON.stringify(await bestellung.deleteOne({ "_id": object }));
            /* _response.write(bestellungLoeschen); */
            return bestellungLoeschen;
        }
        return bestellungLoeschen;
    }
    async function retrieveBestellungen() {
        let ausgabe = await bestellung.find().toArray();
        return JSON.stringify(ausgabe);
    }
})(EisdieleServer = exports.EisdieleServer || (exports.EisdieleServer = {}));
//# sourceMappingURL=EisdieleServer.js.map