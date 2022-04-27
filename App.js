const express = require("express");
const app = express();
const satelize = require("satelize");

const port = 3000;
//Jeżeli chcemy pracować na innym porcie, należy go również zmienić w req_port

app.set("trust proxy", true);

app.get("/", (req, res) => {
  //1.b
  const ipAddress = req.ip;
  //Testowe ip: "46.19.37.108";
  console.log("Twoje IP: " + ipAddress);

  satelize.satelize({ ip: ipAddress }, function (err, payload) {
    if (!(payload instanceof Object && Object.keys(payload).length)) {
      const data = Intl.DateTimeFormat().resolvedOptions();
      payload = {
        timezone: data.timeZone,
        country: new Intl.DisplayNames(["pl"], { type: "region" }).of(
          data.locale.split("-")[0].toUpperCase()
        ),
      };
    }
    let options = {
        timeZone: payload.timezone,
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      },
      formatter = new Intl.DateTimeFormat([], options);
    console.log(formatter.format(new Date()));

    res.send("Dokładna data i czas: " + formatter.format(new Date()));
  });
});

app.listen(port, () => {
  //1.a
  console.log("Autor: Jakub Kozlowski");
  let date_ob = new Date();
  console.log("Data uruchomienia: ", date_ob);
  console.log(`Serwer działa na porcie: ${port}`);
});
