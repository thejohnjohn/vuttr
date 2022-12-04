import { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '../../components/Card';

import './styles.css';

const getTools = async (funcParam) => {
  await axios('http://localhost:3001/tools')
    .then(response => {
      return response.data;
    })
    .then(data => {
      funcParam(data);
    })
    .catch(error => {
      console.log(error);
    });
}

function User() {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    deck.length === 0 && getTools(setDeck);
  }, [deck]);

  return (
  <main>
    <span className='user'>Hi, {'User'}</span>
    <div className='deck'>
      {
        deck.length !== 0 
          ? deck.map(card => <Card key={card.id} tool={card.title}/>)
          : null
      }
    </div>
  </main>
  );
}

export default User;

