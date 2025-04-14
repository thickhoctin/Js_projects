const express = require("express");
const morgan = require("morgan");
const app = express();

const { quotes } = require("./data");
const { getRandomElement } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

app.listen(PORT, () =>
  console.log(`Simple server running on http://localhost:${PORT}`)
);
app.get("/api/quotes/random", (req, res, next) => {
  const randomQuote = { quote: getRandomElement(quotes) };
  res.send(randomQuote);
});
app.get("/api/quotes", (req, res, next) => {
  const isPerson = req.query.person;
  if (isPerson) {
    const filter = quotes.filter((quote) => quote.person === isPerson);
    res.send({ quotes: filter });
  } else {
    res.send({ quotes: quotes });
  }
});

app.post("/api/quotes", (req, res, next) => {
  const newQuote = req.query.quote;
  const newPerson = req.query.person;
  if (newQuote && newPerson) {
    const object = { quote: newQuote, person: newPerson };
    quotes.push(object);
    res.status(201).send({ quote: object });
  } else {
    res.status(400).send();
  }
});
