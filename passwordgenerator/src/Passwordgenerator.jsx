import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);

  const generatePassword = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let passwordString = '';
    for (let i = 0; i < length; i++) {
      passwordString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(passwordString);
  };

  return (
    <div className='w-[100vw] h-[100vh] bg-[blue]'>
      <div className='w-[400px] bg-[white] fw-bold m-[auto]'>
      <h2 className='fw-bold px-5'>Password Generator</h2>
      <div>
        <input className='mx-5' type="range" min="4" max="32"value={length} onChange={(e) => setLength(e.target.value)}/><br></br>
        <span className='mx-5'>Length: {length}</span>
      </div>
      <p className='border-solid border-2 border-red-600 p-2 bg-black  text-[white] my-2'> {password}</p>
      <button className='border-solid border-2 border-red-600 p-2 bg-[blue] text-[white] mx-[100px] my-2'type="password" onClick={generatePassword}>Generate Password</button>
      
      </div>
     
    </div>
  );
};

export default PasswordGenerator;