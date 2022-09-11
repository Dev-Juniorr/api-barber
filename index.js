require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");

const port = process.env.PORT || 5000;

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(console.log('Conectado'))
  .catch((err) => console.log(err));


const app = express();

app.use(cors())
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  respuesta = {
    error: false,
    codigo: 200,
    mensaje: "Servidor Activo",
  };
  res.send(respuesta);
});

app.use('/', require('./routes/styles'))

app.listen(port, () => console.log(`Perfect Port ${port}`));