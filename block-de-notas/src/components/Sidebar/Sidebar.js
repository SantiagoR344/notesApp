import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-cyan-900 h-screen">
      <div className="p-6">
        <h1 className="text-white text-3xl font-bold">Notas</h1>
      </div>
      <nav className="mt-6">
        <ul>
          <li>
            <a href="#" className="flex items-center py-2 px-4 text-white hover:bg-cyan-700">
              <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="ml-3">Notas</span>
            </a>
          </li>
          {/* Repetir para otras opciones */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
