import React,{useState} from 'react'

const G = () => {
    const [message, setMessage] = useState('');
    const max = 200;

    const change = (e) => {
        if (e.target.value.length <= max) {
            setMessage(e.target.value);
        }
    };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-2xl font-bold mb-4">Character Counter</h1>
            <textarea
                value={message}
                onChange={change}
                className="w-full max-w-md h-40 p-2 border border-gray-300 rounded-lg"
                placeholder="Type your message here..."
            />
            <div className="mt-2 text-sm text-gray-600">
                {message.length} / {max} characters
            </div>
            <div className="text-sm text-gray-600">
                {max - message.length} characters remaining
            </div>
        </div>
  )
}

export default G
