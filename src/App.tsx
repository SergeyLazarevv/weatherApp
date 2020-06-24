import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
fetch("http://api.openweathermap.org/data/2.5/weather?q=Samara,ru&APPID=0cb0672cbaa9d7e3d59356e1bdbb7a31")
.then(res => res.json())
.then(data => console.log(data))
.catch(err => {
	console.log(err);
});
  return (
    <div className="App">
      <header>
        <img src='sun.png' className='logo' />
        <ul className='menu'>
          <li>About</li>
          <li>News</li>
          <li>Contacts</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
