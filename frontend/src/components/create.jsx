import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"; 

const Create = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const addUser = {name, email, age};

        const response = await fetch("http://localhost:5000", {
            method: "POST",
            body: JSON.stringify(addUser),
            headers: {
                "content-type": "application/json",
            },
        });
        const result = await response.json();
        if(!response.ok){
            console.log(result.error);
            setError(result.error);
        }
        if(response.ok){
            console.log(result);
            setError("");
            setName("");
            setAge("");
            setEmail("");
            navigate("/all")
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-800 text-white rounded-lg shadow-md">

          <h2 className="text-2xl font-bold mb-6 text-center">Enter Data</h2>
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2">Enter Name:</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                className="w-full p-2 border border-gray-600 rounded bg-gray-700"
                placeholder="John Doe"
              />
            </div>
    
            {/* Age Input */}
            <div className="mb-4">
              <label htmlFor="age" className="block mb-2">Enter Age:</label>
              <input 
                type="number" 
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="w-full p-2 border border-gray-600 rounded bg-gray-700"
                placeholder="25"
              />
            </div>
    
            {/* Email Input */}
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2">Enter Email:</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-600 rounded bg-gray-700"
                placeholder="john.doe@example.com"
              />
            </div>
    
            {/* Submit Button */}
            <button 
              type="submit" 
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </form>
          {error && (
        <div className="mt-4 p-2 text-sm text-red-800 bg-red-200 rounded">
          {error}
        </div>
      )}
        </div>
      );
}

export default Create