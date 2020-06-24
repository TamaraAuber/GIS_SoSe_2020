import * as Http from "http";
import * as Url from "url";
/* import { ParsedUrlQuery } from "querystring";
import { url } from "inspector"; */

export namespace A09Server {
  console.log("Starting server");
  let port: number = Number(process.env.PORT);
  if (!port)
    port = 8100;

  let server: Http.Server = Http.createServer();
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  server.listen(port);


  //gibt "Listening" in der Konsole aus
  function handleListen(): void {
    console.log("Listening");
  }

  //antwortet auf Anfrage in der Konsole mit "I hear voices"
  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {

    console.log(_request.url);

    //richtet HTML Seite ein
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    if (_request.url) {
      let q: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      /* console.log(q); */

      if (q.pathname == "/html") {
        for (let key in q.query) {
          _response.write(key + ": " + q.query[key] + "<br/>");
        }
      }
      if (q.pathname == "/json") {
        let jsonString: String = JSON.stringify(q.query);
        _response.write(jsonString);
      }
    }

    _response.end();
  }
}