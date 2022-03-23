import './App.css';
import { useEffect, useState } from 'react';
import { db } from './firebase.js';
import Painting from './Painting';
import Header from './Header';

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
      
      <Header />

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
