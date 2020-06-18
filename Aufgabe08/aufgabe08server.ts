import * as Http from "http";

export namespace A08Server {
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
    /* console.log("I hear voices!"); */

    console.log(_request.url);
    console.log(_response);

    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");

    //schreibt url von der Anfrage kommt
    _response.write(_request.url);

    _response.end();
  }
}