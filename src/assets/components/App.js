import { Outlet } from 'react-router-dom';
import '../css/App.css';
import ContentWrapper from './ContentWrapper';
//import { db } from './firebase.js';
import Header from './Header';


function App() {


  return (
    <div className="app">
      <ContentWrapper />
      
    </div>
  );
}

export default App;
