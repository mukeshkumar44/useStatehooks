import React,{useState} from 'react'

const F = () => {
    const [task, setTask] = useState('');
    const [tasks, setTasks] = useState([]);

    const Add = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const Delete = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };
  return (
    <div className="flex flex-col items-center  min-h-screen ">
            <h1 className="text-2xl font-bold mb-4">Todo List</h1>
            <div className="mb-4">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-lg"
                    placeholder="Enter a new task"
                />
                <button
                    onClick={Add}
                    className="ml-2 px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                >
                    Add Task
                </button>
            </div>
            <ul className="w-full max-w-md bg-white rounded-lg shadow-lg">
                {tasks.map((task, index) => (
                    <li key={index} className="flex justify-between items-center p-4 border-b">
                        <span>{task}</span>
                        <button
                            onClick={() => Delete(index)}
                            className="text-red-500 hover:text-red-700"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
  )
}

export default F
