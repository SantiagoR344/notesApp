const express = require('express');
const Note = require('../models/Note');
const authMiddleware = require('../middleware/auth'); // Middleware para verificar el token

const router = express.Router();

// Crear una nueva nota
router.post('/notes', authMiddleware, async (req, res) => {
  try {
    const newNote = new Note({
      title: req.body.title,
      content: req.body.content,
      userId: req.user.id, // ID del usuario autenticado
    });
    const savedNote = await newNote.save();
    res.json(savedNote);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la nota' });
  }
});

// Obtener todas las notas del usuario autenticado
router.get('/notes', authMiddleware, async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las notas' });
  }
});

// Actualizar una nota por su ID
router.put('/notes/:id', authMiddleware, async (req, res) => {
  const { title, content } = req.body;
  try {
    const updatedNote = await Note.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id }, // Solo actualizar si la nota pertenece al usuario
      { title, content },
      { new: true } // Devuelve la nota actualizada
    );

    if (!updatedNote) {
      return res.status(404).json({ message: 'Nota no encontrada' });
    }

    res.json(updatedNote);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la nota' });
  }
});

// Eliminar una nota por su ID
router.delete('/notes/:id', authMiddleware, async (req, res) => {
  try {
    const deletedNote = await Note.findOneAndDelete({ _id: req.params.id, userId: req.user.id });
    if (!deletedNote) {
      return res.status(404).json({ message: 'Nota no encontrada' });
    }

    res.json({ message: 'Nota eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la nota' });
  }
});

module.exports = router;


