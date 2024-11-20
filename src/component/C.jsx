import React, {useState} from 'react'

const C = () => {
    const [color, setColor] = useState(''); 

    const ColorChange = (event) => {
        setColor(event.target.value); 
    };
  return (
    <div className='ml-[200px] mt-10'>
       <select onChange={ColorChange} value={color}>
                <option value="">Select  color</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="purple">Purple</option>
            </select>
            <div
                style={{
                    marginTop: '20px',
                    width: '900px',
                    height: '300px',
                    backgroundColor: color || 'transparent',
                    border: '1px solid #000',
                }}
            >
                
            </div>
    </div>
  )
}

export default C
