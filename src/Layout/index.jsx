import Todo from '../components/Todo'
import { useState } from 'react';

const Layout = () => {

    const[todo, setTodo] = useState([]);
    const[input, setInput] = useState("");

    const handlechange = (e) => {
        setInput(e.target.value)
    };

    const addTodo = () => {
        todo.push(input);
        setInput("");
    };

    const deleteTodo = (index) => {
        const updatedTodo = todo.filter((a, i) => i != index);
        setTodo(updatedTodo);
    };

    return(
        <>
            <div className="w-svw h-svh bg-red-200 flex flex-col justify-center items-center">
                <h1 className="text-4xl font-bold text-bold text-red-900 mb-5">
                    Todo app using react vite
                </h1>
                <form className="flex w-[80%] gap-6 mb-16">
                    <input type="text" className="flex flex-1 p-4 rounded-md
                    focus:outline-none border-2 border-transparent
                    focus:border-red-700 focus:border-2"
                    placeholder="Enter todo..."
                    onChange={handlechange}
                    value={input}
                    />
                    <button type='button' className="bg-red-500 px-12 rounded-md text-red-50 flex items-center justify-center" onClick={() => addTodo()}>
                        Add
                    </button>
                </form>
                {todo.map((td, index) => {
                    return <Todo key={index} todo={td} deleteTodo = {() => deleteTodo(index)}/>
                })}
            </div>
        </>
    );
}

export default Layout;