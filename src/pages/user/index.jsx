import { useEffect, useState } from 'react';
import axios from 'axios';

import history from '../../history';
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
      <button id="add-button" onClick={() => { history.push('/add-tool'); history.go('/add-player'); }}>+</button>
      <div className='deck-user'>
        {
          deck.length !== 0 
            ? deck.map((card) => {
              return(
                <div className='tool-space'>
                  <button id='delete-tool'>x</button>
                  <Card key={card.id} tool={card.title}/>
                </div>
              );
            })
            : null
        }
      </div>
    </main>
  );
}

export default User;

