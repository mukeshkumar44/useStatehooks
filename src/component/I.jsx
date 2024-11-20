import React,{useState} from 'react'

const I = () => {
    const [randomNumber, setRandomNu] = useState(null);

    const genRandomNum = () => {
        const number = Math.floor(Math.random() * 500) + 1; 
        setRandomNu(number);
    };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Random Number Generator</h1>
            <p className="text-lg mb-4">
                {randomNumber !== null ? `Random Number: ${randomNumber}` : 'Click the button!'}
            </p>
            <button
                onClick={genRandomNum}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Generate Random Number
            </button>
        </div>
  )
}

export default I
