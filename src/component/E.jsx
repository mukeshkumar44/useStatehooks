import React,{useState} from 'react'

const E = () => {
    const [isLiked, setIsLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    const Like = () => {
        setIsLiked(!isLiked);
        setLikeCount(prevCount => (isLiked ? prevCount - 1 : prevCount + 1));
    };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="text-center">
        <button
            className={`px-4 py-2 text-white font-semibold rounded-lg transition-colors duration-300 
                ${isLiked ? 'bg-green-500 hover:bg-green-600' : 'bg-blue-500 hover:bg-blue-600'}`}
            onClick={Like}
        >
            {isLiked ? 'Unlike' : 'Like'}
        </button>
        <span className="ml-4 text-xl">{likeCount}</span>
    </div>
</div>
  )
}

export default E
