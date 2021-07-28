import React ,{ useState } from 'react'


function TodoList () {
    

    const initialTodos = ["My first todo", "My second todo"];
    const [todos, setTodos] = useState(initialTodos);
        return (
            <div>
            <hr />
<h2>Todo's</h2>

<ul>
      {todos.map((todo,index) => (
        <li key={index}>
          <input type="checkbox" /> {todo}
        </li>
      ))}
    </ul>
            </div>
        )
    
}

export default TodoList;