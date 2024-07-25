import axios from "axios";
import { useEffect } from "react";

function TodoBack() {

    function getTodos() {
        axios.get("http://localhost:3600/todos").then(({ data }) => {
            console.log(data);
        }).catch((error) => {
            console.error("There was an error fetching the todos!", error);
        });
    }

    useEffect(() => {
        getTodos();
    } , []);

    function addTodo(){
        axios.post('http://localhost:3600/todos' , {todo : "data from front"})
        .then(({ data }) => {
            console.log(data);
        })
    }
    return (
        <div>
            <button onClick={addTodo}> add todo </button>
        </div>
    );
}

export default TodoBack;
