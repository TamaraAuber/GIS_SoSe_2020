import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";

/* import { ParsedUrlQuery } from "querystring";
import { url } from "inspector"; */

export namespace A11Server {
  console.log("Starting server");

  interface Order {
    [type: string]: string | string[] | undefined;
  }

  let orders: Mongo.Collection;

  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  /* let databaseUrl: string = "mongodb://localhost:27017"; */
  let databaseUrl: string = "mongodb+srv://TestUser:TestUserPasswort@supermegagiscluster-ox4h7.mongodb.net/Test?retryWrites=true&w=majority";

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
    orders = mongoClient.db("Test").collection("Students");
    console.log("Database Connection", orders != undefined);
  }


  //gibt "Listening" in der Konsole aus
  function handleListen(): void {
    console.log("Listening");
  }

  //antwortet auf Anfrage in der Konsole mit "I hear voices"
  async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

    console.log(_request.url);

    //richtet HTML Seite ein
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    if (_request.url) {
      let q: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      /* console.log(q); */

      /* if (q.pathname == "/html") {
        for (let key in q.query) {
          _response.write(key + ": " + q.query[key] + "<br/>");
        }
      }
      if (q.pathname == "/json") {
        let jsonString: String = JSON.stringify(q.query);
        _response.write(jsonString);
      } */
      if (q.pathname == "/retrieve") {
        _response.write(await retrieveOrders());
      }
      if (q.pathname == "/send") {
        storeOrder(q.query);
      }

      let jsonString: String = JSON.stringify(q.query);
      _response.write(jsonString);


    }

    _response.end();
  }

  function storeOrder(_order: Order): void {
    orders.insertOne(_order);
  }

  async function retrieveOrders(): Promise<string> {
    /*  orders.find(); */
    let ausgabe: string[] = await orders.find().toArray();

    return JSON.stringify(ausgabe);
  }
}

//mongodb+srv://TestUser:<password>@supermegagiscluster-ox4h7.mongodb.net/<dbname>?retryWrites=true&w=majority