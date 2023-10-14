import React, { useState } from 'react';
import './App.css';
import './index.css';

const App = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const birthDate = new Date(dob);
    const currentDate = new Date();

    const differenceInMilliseconds = currentDate - birthDate;
    const ageDate = new Date(differenceInMilliseconds);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);

    setAge(calculatedAge);
  };

  return (
    <div className="container">
      <center>
        <h1>Age Calculator</h1>
        <h3>Enter your date of birth</h3>
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)}/>
        <p>
          <button
            onClick={calculateAge}
            style={{ backgroundColor: '#3498db', color: 'white'}}
          >
            Calculate Age
          </button>
        </p>
        {age && <h2 className="result">You are {age} years old</h2>}
      </center>
    </div>
  );
};

export default App;

