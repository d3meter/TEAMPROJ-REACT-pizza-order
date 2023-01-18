const express = require('express')
const fs = require('fs')
// const cors = require('cors')
const app = express()

app.use(express.json()) 
// app.use(cors())

app.use("/img", express.static(`${__dirname}/data/img`));

app.get("/pizzas", (req, res) => {
  fs.readFile(`${__dirname}/data/pizza.json`, function (err, data) {
    if (err) {
      console.log(err);
      return res.status(500).send(err);
    } else {
      let pizzaData = JSON.parse(data);
      return res.send(pizzaData);
    }
  });
});

app.post("/input", (req, res) => {
  let orderData = JSON.stringify(req.body);
  let currentDate = Date.now();
  let filePath = `${__dirname}/data/orders/pizzas-order-${currentDate}.json`;
  fs.writeFile(filePath, orderData, (err) => {
    if (err) {
      return res.send(err);
    } else {
      return res.send({ response: "done" });
    }
  });
});

app.listen(2022, console.log('server listening on http://127.0.0.1:2022'))