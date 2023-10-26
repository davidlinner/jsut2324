import { useState } from 'react';
import NiceButton from '../../components/NiceButton/NiceButton';

function Counter() {
    const [counter, setCounter] = useState(0);

    function handleClick(){
        setCounter(counter + 1);
    }

    return (
        <>
            <h1>{counter}</h1>
            <NiceButton onClick={handleClick} variant={'primary'}>Count up</NiceButton>
            <NiceButton onClick={() => setCounter(0)} variant={'secondary'}>Reset</NiceButton>
        </>
    )
}
export default Counter