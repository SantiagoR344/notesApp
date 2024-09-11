
import React, { useState, useEffect } from 'react';
import Navbar from '../src/components/Navbar/Navbar';
import Sidebar from '../src/components/Sidebar/Sidebar';
import NoteEditor from '../src/components/NoteEditor/NoteEditor';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
  const [notes, setNotes] = useState([]);
  const [authToken, setAuthToken] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  // Obtener las notas del backend
  useEffect(() => {
    const fetchNotes = async () => {
      if (authToken) {
        const res = await fetch('http://localhost:5000/api/notes', {
          headers: {
            'Authorization': `Bearer ${authToken}`
          }
        });
        const data = await res.json();
        setNotes(data);
      }
    };
    fetchNotes();
  }, [authToken]);

  // Función para añadir una nueva nota
  const addNote = async (title, content) => {
    try {
      const res = await fetch('http://localhost:5000/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`,  // Incluir el token de autenticación
        },
        body: JSON.stringify({ title, content }),
      });
  
      const newNote = await res.json();  // Obtener la respuesta con la nueva nota desde el backend
      setNotes([...notes, newNote]);  // Actualiza el estado con la nota guardada en MongoDB
    } catch (error) {
      console.error('Error al guardar la nota:', error);
    }
  };
  
  // Estado para manejar el modo edición
const [editNoteId, setEditNoteId] = useState(null);
const [editTitle, setEditTitle] = useState('');
const [editContent, setEditContent] = useState('');

// Función para eliminar una nota
const deleteNote = async (noteId) => {
  try {
    await fetch(`http://localhost:5000/api/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${authToken}`,  // Incluir el token de autenticación
      },
    });

    // Actualizar el estado local eliminando la nota borrada
    setNotes(notes.filter(note => note._id !== noteId));
  } catch (error) {
    console.error('Error al eliminar la nota:', error);
  }
};

// Función para actualizar una nota
const updateNote = async (noteId) => {
  try {
    const res = await fetch(`http://localhost:5000/api/notes/${noteId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authToken}`,
      },
      body: JSON.stringify({ title: editTitle, content: editContent }),
    });

    const updatedNote = await res.json();
    
    // Actualizar el estado local con la nota editada
    setNotes(notes.map(note => note._id === noteId ? updatedNote : note));
    
    setEditNoteId(null);  // Salir del modo edición
  } catch (error) {
    console.error('Error al actualizar la nota:', error);
  }
};

  // Guardar el token en localStorage cuando se inicie sesión
  const handleLogin = (token) => {
    setAuthToken(token);
    localStorage.setItem('authToken', token);
  };

  // Cargar el token desde localStorage cuando la página se recargue
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setAuthToken(token);
    }
  }, []);

  // Función para cerrar sesión
  const handleLogout = () => {
    setAuthToken(null);
    localStorage.removeItem('authToken'); // Elimina el token del localStorage
  };

  return (
    <div className="App h-screen flex">
      {!authToken ? (
        <div className="w-full p-8">
          {showLogin ? (
            <>
              <Login setAuthToken={handleLogin} />
              <p className="mt-4 text-center">
                ¿No tienes cuenta?{' '}
                <button className="text-blue-500" onClick={() => setShowLogin(false)}>
                  Regístrate aquí
                </button>
              </p>
            </>
          ) : (
            <>
              <Register />
              <p className="mt-4 text-center">
                ¿Ya tienes una cuenta?{' '}
                <button className="text-blue-500" onClick={() => setShowLogin(true)}>
                  Inicia sesión aquí
                </button>
              </p>
            </>
          )}
        </div>
      ) : (
        <>
          <Sidebar />
          <div className="flex-1">
            <Navbar />
            {/* Agregar botón de cerrar sesión */}
            <div className="flex justify-end p-4">
              <button onClick={handleLogout} className="text-red-500 bg-gray-200 px-4 py-2 rounded-lg">
                Cerrar sesión
              </button>
            </div>
            <NoteEditor addNote={addNote} />
            <div className="notes-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl p-4">
              {notes.map((note, index) => (
                <div key={index} className="note bg-white rounded-lg shadow-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-700">{note.title}</h3>
                  <p className="text-gray-500">{note.content}</p>
                  <span className="text-gray-400 text-sm block mt-2">{note.date}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;



