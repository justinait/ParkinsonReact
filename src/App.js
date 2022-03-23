import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react';
import { db } from './firebase.js';
import Painting from './Painting';

<script src="https://kit.fontawesome.com/cbff21ecde.js" crossorigin="anonymous"></script>

function App() {

  const [paintings, setPaintings] = useState([]);

  useEffect(()=> {
    db.collection("paintings").onSnapshot(s => {
      setPaintings(s.docs.map(d => ({
        id: d.id,
        painting: d.data()
      })))
    })
  }, [])

  return (
    <div className="app">
      <header className="header">

        <div className="leftHeader">
          <img src="https://cdn-icons-png.flaticon.com/512/2972/2972163.png" className="App-logo" alt="logo" width="80"/>
          <h1>Jorgelina Parkinson</h1>
        </div>

        <div className="rightHeader">
          <h3>Home</h3>
          <h3>Series</h3>
          <h3>Awards</h3>
          <h3>About</h3>
        </div>

      </header>

      <div className='gallery'>
        {
          paintings.map(({id, painting}) => (  
            <Painting
              key={`painting-${id}`}
              image = {painting.image}
              title = {painting.title}
              category = {painting.category}
            />            
          ))
        }

      </div>

    </div>
  );
}

export default App;
