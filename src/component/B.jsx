
import React, { useState } from 'react';
const B = () => {
    const [isVisible, setIsVisible] = useState(false); 

    const toggleVisibility = () => {
        setIsVisible(!isVisible); 
    };

  return (
    <div className='ml-[200px] mt-16'>
      <button className=' bg-red-500 mt-5 w-[200px] h-[50px] rounded-xl' onClick={toggleVisibility}>
                {isVisible ? 'Hide' : 'Show'} Text
            </button>
            {isVisible && (
                <p>Mukesh Verma </p>
            )}
        
    </div>
  )
}

export default B
