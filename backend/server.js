const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const cors = require("cors");

dotenv.config();

const productsRoute = require("./routes/products");
const categoriesRoute = require("./routes/categories");

mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Zalogowano do bazy danych")
);

app.use(express.json());
app.use(cors({ origin: true, credentials: true }));

app.use("/api/products", productsRoute);
app.use("/api/categories", categoriesRoute);

const PORT = 5000;

app.listen(PORT, () => console.log(`Serwer włączony na porcie: ${PORT} `));
