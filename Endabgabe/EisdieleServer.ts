import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

export namespace EisdieleServer {

    console.log("Starting server");

    interface Bestellung {
        [type: string]: string | string[] | undefined;
    }

    let bestellung: Mongo.Collection;

    let port: number = Number(process.env.PORT);
    if (!port)
        port = 8100;

    /* let databaseUrl: string = "mongodb://localhost:27017"; */
    let databaseUrl: string = "mongodb+srv://TestUser:TestUserPasswort@supermegagiscluster-ox4h7.mongodb.net/Eisdiele?retryWrites=true&w=majority";

    startServer(port);
    connectToDatabase(databaseUrl);

    function startServer(_port: number | string): void {

        let server: Http.Server = Http.createServer();
        server.addListener("request", handleRequest);
        server.addListener("listening", handleListen);
        server.listen(_port);
    }
    async function connectToDatabase(_url: string): Promise<void> {
        let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        bestellung = mongoClient.db("Eisdiele").collection("Bestellungen");
        console.log("Database Connection", bestellung != undefined);
    }

    function handleListen(): void {
        console.log("Listening");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

        console.log(_request.url);

        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let q: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

            if (q.pathname == "/retrieve") {
                _response.write(await retrieveBestellungen());
            }
            if (q.pathname == "/send") {
                storeBestellungen(q.query);
            }
            if (q.pathname == "/delete") {
                console.log("Really delete all?");
                deleteBestellungen();
            }
            if (q.pathname == "/deleteOneOrder") {
                _response.write(await deleteEinzelneBestellung(q.query));
            }
            if (q.pathname == "/statusr") {
                _response.write(await statusAendern(q.query));
            }
        }

        _response.end();
    }

    function storeBestellungen(_bestellung: Bestellung): void {
        bestellung.insertOne(_bestellung);
    }

    async function deleteBestellungen(): Promise<void> {
        bestellung.drop();
    }

    async function deleteEinzelneBestellung(_übergebeneUrl: Bestellung): Promise<string> {
        let bestellungLoeschen: string = "";
        for (let z in _übergebeneUrl) {
            let wert: string = <string>_übergebeneUrl[z];
            let object: Mongo.ObjectID = new Mongo.ObjectID(wert);
            bestellungLoeschen = JSON.stringify(await bestellung.deleteOne({ "_id": object }));
            return bestellungLoeschen;
        }
        return bestellungLoeschen;
    }

    async function statusAendern(_übergebeneUrl: Bestellung): Promise<void> {
        for (let z in _übergebeneUrl) {
            let wert: string = <string>_übergebeneUrl[z];
            let object: Mongo.ObjectID = new Mongo.ObjectID(wert);
            bestellung.updateOne({ "_id": object }, { $set: { "status": "versendet" } });
        }
    }

    async function retrieveBestellungen(): Promise<string> {

        let ausgabe: string[] = await bestellung.find().toArray();

        return JSON.stringify(ausgabe);
    }


}