import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  // Estado para controlar si el menú está abierto
  const [isOpen, setIsOpen] = useState(false);

  // Función para mostrar/ocultar el menú desplegable
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow flex justify-between items-center px-6 py-4">
      <div className="flex items-center">
        <button className="text-gray-600 text-2xl focus:outline-none">
          <span className="material-icons">&#9776;</span>
        </button>
        <h1 className="text-xl font-semibold text-gray-800 ml-4">Notas</h1>
      </div>
      <div className="flex items-center">
        <input 
          type="text" 
          className="w-80 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
          placeholder="Busca lo que quieras"
        />
        <button className="ml-2 text-gray-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.92 10.61A7.4 7.4 0 1110.61 4.08a7.4 7.4 0 016.31 6.53z" />
          </svg>
        </button>
      </div>
      <div className="relative flex items-center space-x-4">
        <button className="text-gray-600 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18m-9 5h9" />
          </svg>
        </button>
        
        {/* Botón de usuario */}
        <button className="text-gray-600 focus:outline-none" onClick={toggleDropdown}>
          <svg className="user-icon" width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path
                d="M18.1316 0.318848C13.1929 0.318848 9.15222 5.60113 9.15222 12.1097C9.15222 18.6182 13.1929 23.9005 18.1316 23.9005C23.0702 23.9005 27.111 18.6182 27.111 12.1097C27.111 5.60113 23.0702 0.318848 18.1316 0.318848ZM8.74815 23.9005C3.98908 24.1363 0.172852 28.2395 0.172852 33.3331V38.0494H36.0903V33.3331C36.0903 28.2395 32.319 24.1363 27.515 23.9005C25.0906 26.7774 21.7682 28.6168 18.1316 28.6168C14.4949 28.6168 11.1726 26.7774 8.74815 23.9005Z"
                fill="#2980B9" />
            </g>
          </svg>
        </button>

        {/* Menú desplegable */}
        {isOpen && (
          <div className="absolute top-9 right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
            <a href="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Iniciar Sesión
            </a>
            <a href="/register" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
              Registrarse
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;


// import React from 'react';
// import './Navbar.css';


// const Navbar = () => {
//   return (
//     <header className="bg-white shadow flex justify-between items-center px-6 py-4">
//       <div className="flex items-center">
//         <button className="text-gray-600 text-2xl focus:outline-none">
//           <span className="material-icons">&#9776;</span>
//         </button>
//         <h1 className="text-xl font-semibold text-gray-800 ml-4">Notas</h1>
//       </div>
//       <div className="flex items-center">
//         <input 
//           type="text" 
//           className="w-80 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
//           placeholder="Busca lo que quieras"
//         />
//         <button className="ml-2 text-gray-600 focus:outline-none">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.92 10.61A7.4 7.4 0 1110.61 4.08a7.4 7.4 0 016.31 6.53z" />
//           </svg>
//         </button>
//       </div>
//       <div className="flex items-center space-x-4">
//         <button className="text-gray-600 focus:outline-none">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18m-9 5h9" />
//           </svg>
//         </button>
//         <button className="text-gray-600 focus:outline-none">
//           <svg className="user-icon" width="37" height="39" viewBox="0 0 37 39" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <g>
//               <path
//                 d="M18.1316 0.318848C13.1929 0.318848 9.15222 5.60113 9.15222 12.1097C9.15222 18.6182 13.1929 23.9005 18.1316 23.9005C23.0702 23.9005 27.111 18.6182 27.111 12.1097C27.111 5.60113 23.0702 0.318848 18.1316 0.318848ZM8.74815 23.9005C3.98908 24.1363 0.172852 28.2395 0.172852 33.3331V38.0494H36.0903V33.3331C36.0903 28.2395 32.319 24.1363 27.515 23.9005C25.0906 26.7774 21.7682 28.6168 18.1316 28.6168C14.4949 28.6168 11.1726 26.7774 8.74815 23.9005Z"
//                 fill="#2980B9" />
//             </g>
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
