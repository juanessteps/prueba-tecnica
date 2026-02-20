const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { crearTablaUsuarios } = require('./models/userModel');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensaje: 'Bienvenido a la API de la Prueba Técnica Junior' });
});

const iniciar = async () => {
  try {
    await crearTablaUsuarios();
    app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto ${port}`);
    });
  } catch (error) {
    console.error('Error al iniciar el servidor:', error.message);
    process.exit(1);
  }
};

iniciar();
