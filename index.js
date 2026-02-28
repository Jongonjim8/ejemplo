const express = require('express');
const app = express();

app.use(express.json());

app.get('/saludo', (req, res) => {
    res.json({ mensaje: "Hola desde mi servicio REST en Render 🚀" });
});


const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});