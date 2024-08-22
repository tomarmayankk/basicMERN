import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4 px-8 flex justify-between items-center">
      <div className="text-2xl font-bold">
        Logo
      </div>
      <div className="flex space-x-4">
        <Link to= "/" className="nav-link">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Post
        </button>
        </Link>
        <Link to="/all">       
         <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          All Posts
        </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
