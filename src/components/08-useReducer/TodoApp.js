import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../hooks/useForm';
import './styles.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState = [{
    
}];

const init = ()=> {

        return JSON.parse(localStorage.getItem('todos')) || [];

        // return[{
        //     id: new Date().getTime(),
        //     desc: 'Aprender React',
        //     done: false 
        // }]

}


export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer(todoReducer, [], init);


   
    

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleDelete =( todoId ) => {
        console.log(todoId)

        const action={
            type:'delete',
            payload: todoId
        }

        dispatch(action);
    }
    

    const handleToggle = (todoId) => {

        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    //console.log ( description );

    const handleAddTodo = ( newTodo ) => {
        dispatch( {
            type: 'add',
            payload : newTodo
        } );
        
    }


 


    return (
        <div>
            <h1>TodoApp ({ todos.length }) </h1>
            <hr/>

            <div className="row">

                <div className="col-7">

                   <TodoList 
                        todos={ todos }
                        handleDelete = { handleDelete }
                        handleToggle = { handleToggle }
                   />

                </div>

                <div className="col-5  gap-2">

                    <TodoAdd
                        handleAddTodo={ handleAddTodo }
                    />

                </div>


            </div>

           

        </div>
    )
}
