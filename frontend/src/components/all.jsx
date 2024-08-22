import React, { useEffect, useState } from 'react';
import Card from './card'; // Make sure to import your Card component

const All = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000");
        const result = await response.json();

        if (response.ok) {
          setData(result); // Set the fetched data to state
        } else {
          console.log(result.error);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center p-4 gap-4">
      {data.length > 0 ? (
        data.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            age={item.age}
            email={item.email}
            onEdit={() => console.log("Edit", item)}
            onDelete={() => console.log("Delete", item)}
          />
        ))
      ) : (
        <p>No cards to display.</p>
      )}
    </div>
  );
};

export default All;
