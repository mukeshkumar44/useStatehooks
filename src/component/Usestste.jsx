import React, { useEffect, useState } from 'react';

const Usestate = () => {
    const [count, setCount] = useState(0); 
    const [step, setStep] = useState(1); 
  
    const handleIncrement = () => {
        setCount(count + step);
    };
  
    const handleDecrement = () => {
        setCount(count - step);
    };
  
    const handleStepChange = (event) => {
        const newStep = parseInt(event.target.value);
        setStep(isNaN(newStep) ? 1 : newStep); 
    };
  
    return (
        <div className='ml-[200px]'>
            <h1 className=' mt-24 font-bold'>Counter: {count}</h1>
            <input className='mt-6 border-2 border-black w-[420px]'
                type="number"
                value={step}
                onChange={handleStepChange}
            />
            <br />
            <button className=' bg-red-500 mt-5 w-[200px] h-[50px] rounded-xl' onClick={handleIncrement}>Increase by {step}</button>
            <button className=' bg-red-500 mt-5 ml-4  w-[200px] h-[50px] rounded-xl' onClick={handleDecrement}>Decrease by {step}</button>
        </div>
    );
};

export default Usestate;
