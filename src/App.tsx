import React from 'react';
import './App.css';
import images from './assets/images/images.jpeg'

function App() {
  return (
   <div>
       <h1>profile</h1>
       <img src={images} alt="avatar"/>
   </div>
  );
}

export default App;
