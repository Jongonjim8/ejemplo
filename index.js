const express = require('express');
const app = express();

app.use(express.json());

app.get('/saludo', (req, res) => {
    res.json({ mensaje: "Hola desde mi servicio REST en VS Code" });
});

app.listen(3000, () => {
    console.log("Servidor corriendo en http://localhost:3000");
});