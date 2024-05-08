const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Hola Mundo');
});

app.post('/cadena', function(req, res){
  let cadena = req.body.cadena;
  let letras = cadena.match(/[a-zA-Z ]/g);
  if (!cadena.trim()) {
    res.send('La cadena está vacia');
  } else if (!letras || cadena.trim().length !== letras.length) {
    res.send('La cadena contiene caracteres no validos');
  } else {
    res.send(letras);
  }
});

app.post('/cadena-invertida', function(req, res){
  let cadena = req.body.cadena;
  let cadenaInvertida = cadena.split('').reverse().join('');
  res.send(cadenaInvertida);
});


app.listen(3000, function() {
  console.log('La aplicacion se ejecuta en el puerto 3000');
});
