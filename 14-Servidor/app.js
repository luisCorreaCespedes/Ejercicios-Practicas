const express = require('express');
const app = express();
const { infoCursos } = require('./datos/cursos.js');
const PORT = process.env.port || 3000;

const routerMatematicas = require('./routers/matematicas.js');
const routerProgramacion = require('./routers/programacion.js');

// Routers
app.use('/api/cursos/programacion', routerProgramacion);
app.use('/api/cursos/matematicas', routerMatematicas);

// Routing
app.get('/', (req, res) => {
  res.send('Servidor funcionando...');
});

app.get('/api/cursos', (req, res) => {
  res.send(JSON.stringify(infoCursos));
});

app.listen(PORT, () => {
  console.log(`Servidor en el puerto: ${PORT}`)
});