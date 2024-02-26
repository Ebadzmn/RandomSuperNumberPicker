import React, { useState } from 'react';

function RandomNumberPicker({ numbers }) {
  const [randomNumber, setRandomNumber] = useState(null);

  const pickRandomNumber = () => {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    setRandomNumber(numbers[randomIndex]);
  };

  return (
    <div className='w-full h-screen bg-black text-white font-bold text-center pt-10'>
      <h2 className='text-3xl mb-3'>Random Number Picker</h2>
      <ul className='list-disc list-inside mb-4'>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <button onClick={pickRandomNumber} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Pick Random Number</button>
      {randomNumber && (
        <p className='mt-4'>Randomly selected number: <span className='text-red-500 font-bold text-3xl'>{randomNumber}</span></p>
        
      )}
    </div>
  );
}

export default RandomNumberPicker;
