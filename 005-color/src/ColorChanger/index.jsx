import React, { useState, useEffect } from 'react';
import MyButton from '../MyButton/MyButton';

const ColorChanger = () => {

    const [isBlue, setisBlue] = useState(true)

    useEffect(() => {
        console.log('Componente montado!')
        return () => { resetColor }
    })

    useEffect(() => {
        console.log('Componente alterado! - ' + isBlue)
    }, [isBlue])

    function actualizeColor() {
        setisBlue(!isBlue)
        isBlue ? document.body.style.backgroundColor = 'blue' : document.body.style.backgroundColor = 'red'
    }

    function resetColor() {
        console.log('Componente desmontado!')
        document.body.style.backgroundColor = 'white'
    }

    return (
        <div className='total'>
            <MyButton onclick={actualizeColor} name={'CHANGE COLOR'} />
            <MyButton onclick={resetColor} name={'RESET'} />
        </div>
    );
};

export default ColorChanger;