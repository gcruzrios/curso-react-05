import React, { useEffect, useState } from 'react'
import './effects.css';
import { Message } from './Message';
export const SimpleForm = () => {

    
    const [formState, setFormState] = useState({
        name:'',
        email: ''
     });
    
    const { name, email } = formState;

    useEffect(() => {

       // console.log('hey!')       
    },[] );

    useEffect(() => {

      //console.log('FormState Cambio')
       
    },[formState] );

    useEffect(() => {

        //console.log('email Cambio')
       
    },[email] );

    const handleInputChange =({ target }) => {
        //console.log(target.name);
        setFormState({
            ...formState,
            [target.name ]: target.value

        });
        ///console.log(e.target.value);

    }

    return (
        <>
        <h1>Use Effect (Simple Form)</h1>  

        <div className="form-group">
            <input 
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu nombre"
                autoComplete="off"
                value={ name }
                onChange= { handleInputChange }
            />
        </div>

        <div className="form-group">
            <input 
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value={ email }
                onChange= { handleInputChange }
            />
        </div>

        { (name ==='123') && <Message/>}

        </>
    )
}
