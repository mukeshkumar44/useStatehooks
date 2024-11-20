import React,{useState} from 'react'

const H = () => {
    const [count, setCount] = useState(0);

    const inc = () => {
        setTimeout(() => {
            setCount((preCount) => preCount + 1);
        }, 2000); 
    };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Increment  Delay</h1>
            <p className="text-lg">Count: {count}</p>
            <button
                onClick={inc}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
                Increment
            </button>
        </div>
  )
}

export default H
