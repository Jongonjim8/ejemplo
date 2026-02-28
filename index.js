const express = require('express');
const soap = require('soap');
const fs = require('fs');

const app = express();

// REST
app.get('/saludo', (req, res) => {
    res.json({ mensaje: "Hola Este es un ejemplo para la clase de Minero" });
});

// SOAP service definition
const service = {
  SaludoService: {
    SaludoPort: {
      saludar: function(args) {
        return { respuesta: "Hola " + args.nombre };
      }
    }
  }
};

const xml = fs.readFileSync('service.wsdl', 'utf8');

const PORT = process.env.PORT;

app.listen(PORT, () => {
    soap.listen(app, '/wsdl', service, xml);
    console.log(`Servidor corriendo en puerto ${PORT}`);
});