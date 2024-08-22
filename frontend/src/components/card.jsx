import React from 'react';

const Card = ({ name, age, email, onEdit, onDelete }) => {
  return (
    <div className="max-w-sm w-full bg-gray-800 text-white p-4 rounded-lg shadow-md flex flex-col justify-between">
      <div className="mb-4">
        <h3 className="text-lg font-bold">{name}</h3>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
      </div>
      <div className="flex justify-end space-x-2">
        <button 
          onClick={onEdit}
          className="bg-yellow-500 hover:bg-yellow-700 text-white py-1 px-3 rounded"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
