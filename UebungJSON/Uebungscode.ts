console.log("Start");
communicate("https://hs-furtwangen.github.io/GIS-SoSe-2020/L07/test.txt");
console.log("End");


async function communicate(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    console.log("Response", response);
    console.log(await response.text());
  }



