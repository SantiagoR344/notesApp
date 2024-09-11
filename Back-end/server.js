const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const noteRoutes = require('./routes/note');  // Importar las rutas de notas
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  // Para parsear JSON

// Conectar a MongoDB
mongoose.connect('')
  .then(() => console.log('Conectado a MongoDB'))
  .catch((err) => console.log('Error conectando a MongoDB', err));

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api', noteRoutes);  // Usar las rutas de notas

// Levantar el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});




// // backend/server.js
// const express = require('express');
// const mongoose = require('mongoose');
// const authRoutes = require('./routes/auth');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());  // Para parsear JSON

// // Conectar a MongoDB
// mongoose.connect('mongodb+srv://AFRAMOS12:Sapo30doblep@cluster0.oax05.mongodb.net/?retryWrites=true&w=majority')
//   .then(() => console.log('Conectado a MongoDB'))
//   .catch((err) => console.log('Error conectando a MongoDB', err));

// // Rutas
// app.use('/api/auth', authRoutes);

// // Levantar el servidor
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Servidor corriendo en el puerto ${PORT}`);
// });

