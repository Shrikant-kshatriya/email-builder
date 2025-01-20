import React from 'react';

const Navbar = () => {
  return (
    <header className="lg:px-16 px-4 flex flex-wrap items-center py-2 shadow-md">
      <div className="flex-1 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          RapidQuest
        </a>
      </div>
      <input className="hidden" type="checkbox" id="menu-toggle" />
      <div className="hidden md:flex md:items-center md:w-auto w-full" id="menu">
        <nav>
          <ul className="md:flex items-center justify-between text-sm pt-2 md:pt-0">
            <li>
              <a
                className="md:p-2 py-1 px-3 block md:mb-0 text-white bg-blue-500 hover:bg-teal-500 rounded transition-colors duration-300"
                href="/selectTemplate"
              >
                Create Template
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
