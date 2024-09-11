import React, { useState } from 'react';
import './NoteEditor.css';

const NoteEditor = ({ addNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Función que maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      addNote(title, content);  // Añadir la nueva nota
      setTitle('');  // Limpiar el título
      setContent('');  // Limpiar el contenido
    }
  };

  return (
    <section className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-lg mx-auto">
      <div className="bg-gray-700 p-4 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              className="bg-gray-600 text-white placeholder-gray-400 rounded-md w-full p-3 mb-2"
              placeholder="Título...."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className="bg-gray-600 text-white placeholder-gray-400 rounded-md w-full p-3"
              placeholder="Añade contenido..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center mt-4">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full focus:outline-none"
              onClick={() => {
                setTitle('');
                setContent('');
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default NoteEditor;
