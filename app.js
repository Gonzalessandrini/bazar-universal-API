const express = require('express');
const app = express();

// Ruta de ejemplo que responde con "¡Hola, mundo!"
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});