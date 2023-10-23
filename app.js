const dotenv = require('dotenv');
dotenv.config()

require('./mongo')

const express = require('express');
const app = express();

const handleErrors = require('./middleware/handleErrors');
const notFound = require('./middleware/notFound')

const itemsRouter = require('./routes/items')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.use('/api/items', itemsRouter)

app.use(notFound)

app.use(handleErrors)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
});