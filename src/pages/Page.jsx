import React, { useState, useEffect } from 'react';

function Page() {
  const [names, setNames] = useState([]);
  const [nameInput, setNameInput] = useState('');

  useEffect(() => {
    const storedNames = JSON.parse(localStorage.getItem('names')) || [];
    setNames(storedNames);
  }, []);

  const addName = () => {
    if (nameInput.trim() !== '') {
      const updatedNames = [...names, nameInput.trim()];
      setNames(updatedNames);
      localStorage.setItem('names', JSON.stringify(updatedNames));
      setNameInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <button onClick={addName}>add name</button>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
