import { useState } from 'react';
import Cards from './Cards/Cards';
import './App.css';
import NiceButton from './NiceButton/NiceButton';

function App() {
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
export default App
