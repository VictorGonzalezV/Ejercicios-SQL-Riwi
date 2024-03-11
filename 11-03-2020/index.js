const express = require("express");
const mongoose = require("mongoose");


mongoose.connect(
  "mongodb+srv://juanatehortua97:Camilo1010036676@cluster0.mg3yga1.mongodb.net/"
);
const db = mongoose.connection;


db.on("error", console.error.bind(console, "connection error:"));


db.once("open", function() {
  console.log("Connected to MongoDB");


  const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String
  });


  const baseSchema = new mongoose.Schema({
    nombre: String,
    correo: String,
    edad: Number
  });


  const User = mongoose.model("empresas", userSchema);
  const base = mongoose.model("basecitas", baseSchema);
  const baseClase = mongoose.model("baseclase", baseSchema);


  const app = express();
  app.use(express.json());


  // llamar todas las empresas


  app.get("/api/empresas", async (req, res) => {
    const users = await User.find();
    res.json(users);
  });


  app.listen(3002, function() {
    console.log("Server arriba");
  });
  // listado todos los usuarios
  app.get("/api/users", async (req, res) => {
    const users = await User.find();
    res.json(users);
  });


  // limite 10 usuarios


  app.get("/api/users/limit10", async (req, res) => {
    const users = await User.find().limit(10);
    res.json(users);
  });


  // listado de usuarios que sean de la empresa id 5.


  app.get("/api/users", async (req, res) => {
    const users = await User.find().limit(10);
    res.json(users);
  });


// ejercicios clase


// todas edades de 30
// $eq equializa  igual a 30
app.get("/api/users/edad30", async (req, res) => {
  const users = await base.find({ edad: { $eq: 30 } });
  res.json(users);
});


// llamar todos los que no sean 20
// $ne llama los que no sean {el valor de la llave }


app.get("/api/users/difrente20", async (req, res) => {
  const users = await base.find({ edad: { $ne: 20 } });
  res.json(users);
});


// $gt mayor que 30
app.get("/api/users/mayorque", async (req, res) => {
  const users = await base.find({ edad: { $gt: 20 } });
  res.json(users);
});


// lt compara si un campo es menor que


app.get("/api/users/menorque", async (req, res) => {
  const users = await base.find({ edad: { $lt: 20 } });
  res.json(users);
});


// gte si un campo es mayor o igual a


app.get("/api/users/mayorigual", async (req, res) => {
  const users = await base.find({ edad: { $get: 20 } });
  res.json(users);
});


// $in se usa para buscar coicidencia
app.get("/api/users/coicidencias", async (req, res) => {
  const users = await base.find({ edad :{$in: [5, 10, 15]} });
  res.json(users);
});




// $nin se usa para buscar no coicidencia
// que traiga todo lo que no sea el valor buscado


app.get("/api/users/coicidencias", async (req, res) => {
  const users = await base.find({ edad : {$nin: [5, 10, 15]} });
  res.json(users);
});




});
