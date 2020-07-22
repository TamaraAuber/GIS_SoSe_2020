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


    //gibt "Listening" in der Konsole aus
    function handleListen(): void {
        console.log("Listening");
    }

    async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

        console.log(_request.url);

        //richtet HTML Seite ein
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");

        if (_request.url) {
            let q: Url.UrlWithParsedQuery = Url.parse(_request.url, true);

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

    function storeBestellungen(_bestellung: Bestellung): void {
        bestellung.insertOne(_bestellung);
    }

    async function deleteBestellungen(): Promise<void> {
        bestellung.drop();
    }

    async function deleteEinzelneBestellung(_übergebeneUrl: Bestellung): Promise<string> {
        let bestellungLoeschen: string = "";
        for (let key in _übergebeneUrl) {
            let wert: string = <string>_übergebeneUrl[key];
            let object: Mongo.ObjectID = new Mongo.ObjectID(wert);
            bestellungLoeschen = JSON.stringify(await bestellung.deleteOne({"_id": object}));
            /* _response.write(bestellungLoeschen); */
            return bestellungLoeschen;
        }
        return bestellungLoeschen;
    }

    async function retrieveBestellungen(): Promise<string> {

        let ausgabe: string[] = await bestellung.find().toArray();

        return JSON.stringify(ausgabe);
    }


}