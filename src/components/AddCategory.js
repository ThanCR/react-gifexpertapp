

import React, { useState } from 'react'

import PropTypes from 'prop-types'

                            //recibe el valor de props del componente, en este caso se desestructura en setCategories
export const AddCategory = ({ setCategories }) => {

    //bloque de codigo JS para modificar  o alterar los comportamientos de los componentes


    const [inputValue, setInputValue] = useState('Hola mundo');

    const handleInputValue = (e) => {

        setInputValue(e.target.value);

    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }

    }

    return (
        //////Se retornan los elementos html cambiados mediante el Componente
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputValue}></input>
            </form>
        </>
    )
}



AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}



