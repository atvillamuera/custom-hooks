import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/TodoReducer";

export const useTodo = () => {
    const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('todos')) || null;
    }
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
    

    const handleNewTodo = (todo) => {

        const action = {
            type: 'Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        const action = {
            type: 'Remove Todo',
            payload: id,
        }

        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: 'Toggle Todo',
            payload: id,
        }

        dispatch(action);
    }

      

  return (
    {
        todos,
        todosCounter: todos?.length || 0,
        pendingTodos: todos?.filter(todo => !todo.done).length || 0,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
  )
}
