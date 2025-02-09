import React from 'react';
import './App.css';
import images from './assets/images/images.jpeg'

function App() {

    const logoutHandler = () => {
        alert('Logged out');
    }

    return (
        <div>
            <div>
                <h1>login</h1>
                <input type="text" placeholder="login"/>
            </div>
            <div>
                <h2>profile</h2>
                <img src={images} alt="avatar"/>
            </div>
            <button onClick={logoutHandler}>logout</button>
        </div>
    );
}

export default App;
