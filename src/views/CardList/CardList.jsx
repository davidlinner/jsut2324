import { useState } from 'react';
import Cards from '../../components/Cards/Cards';
import Card from '../../components/Card/Card';

function CardList() {

  const [items, setItems] = useState([
    {title: 'One', text : 'One is the first non-neutral number.'},
    {title: 'Two', text : 'Two is the next number following one.'},
  ])

  function mapItemToCard(item){
    return <Card title={item.title} text={item.text}></Card>;
  }

  function handleSubmit(event){
    event.preventDefault();

    const form = new FormData(event.target);

    const title = form.get('title');
    const text = form.get('text');

    const newItem = {title, text};
    setItems([...items, newItem]);
  }

  return (
  <main>
    <Cards> {items.map(mapItemToCard)} </Cards>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" name="title"/>
      </div>
      <div>
        <label>Text</label>
        <input type="text" name="text"/>
      </div>
      <button type="submit">Add card</button>
    </form>

  </main>
  )  
}

export default CardList
