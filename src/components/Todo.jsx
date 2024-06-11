import { useState } from "react";

const Todo = (props) => {

    const [done, setDone] = useState(false);

    return(
        <div className="flex justify-between w-[80%] gap-7 mb-4">
            <h3 className={`flex flex-1 bg-red-300 px-4 py-3
            border-4 border-dotted border-red-700 font-semibold
            rounded-md ${
                done
                    ? "line-through decoration-wavy bg-red-500 border-red-900" : ""
            }`}
            >
                {props.todo}
            </h3>
            <div className="flex gap-4">
                <button type="button" className={`bg-red-500 text-red-50 px-4 rounded-md *:
                ${
                    done ? "cursor-not-allowed" : "cursor-pointer"
                }`}
                onClick={() => setDone(true)}
                >
                    Tick
                </button>
                <button type="button" className="bg-red-500 text-red-50 px-4 rounded-md" onClick={props.deleteTodo}>
                    Trash
                </button>
            </div>
        </div>    
    );
}

export default Todo;