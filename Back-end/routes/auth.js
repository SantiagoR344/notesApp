// backend/routes/auth.js
const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret_key';  // Cambia esto por una clave más segura

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo ya está en uso.' });
    }
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado exitosamente.' });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor.' });
  }
});

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Correo o contraseña incorrecta.' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Correo o contraseña incorrecta.' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor.' });
  }
});

module.exports = router;
