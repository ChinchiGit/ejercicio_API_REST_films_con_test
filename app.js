const express = require('express')
const app = express()
const port = 3000

const filmsRoutes = require("./routes/films")

// Rutas
app.use('/api/film/',filmsRoutes);

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Bienvenido al buscador de Películas')
  })






//Errores
app.use(({ statusCode, error }, req, res, next) => {
  res.status(statusCode).json({
      success: false,
      message: error.message,
  })
})





app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`)
})

module.exports = app