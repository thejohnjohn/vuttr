import { useEffect, useState } from 'react';
import axios from 'axios';

import Login from './Login';
import Card from '../components/Card';

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

function Home() {
  const [screen, setScreen] = useState(true);
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    deck.length === 0 && getTools(setDeck);
  }, [deck]);

  return (
    <main>
      {
        screen 
        ? (
          <>
            <button className='login' onClick={() => {setScreen(!screen)}}>Login</button>
            <div className='deck'>
              {
                deck.length !== 0 
                  ? deck.map(card => <Card key={card.id} tool={card.title}/>)
                  : null
              }
            </div>
          </>
        ) : (
          <Login />
        )
      }
    </main>
  );
}

export default Home;

