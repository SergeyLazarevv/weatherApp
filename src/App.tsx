import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './header';

interface IMyComponentState {
  sity: string
}

class App extends React.Component <any,IMyComponentState>{
  constructor(props: any) {
    super(props)
    this.state = {
      sity: ""
    }
  }
  getData = (event: any) => {
    event.preventDefault();
    let sity: string = this.state.sity;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${sity},ru&APPID=0cb0672cbaa9d7e3d59356e1bdbb7a31`)
    .then(res => res.json())
    .then(data => console.log(data))
    .then(data=>this.setState({sity: ''}))
    .catch(err => {
	  console.log(err);
    });
  }
  setData = (event: any) => {
    this.setState({sity: event.target.value})
  }
  render() {
    return (
      <div className="App">
        <Header />
        <form className="input-wrap" onSubmit={this.getData} >
          <input className="input" type="text" placeholder="Enter sity" onChange={this.setData} value={this.state.sity} />
        </form>
      </div>
    );
  }
}

export default App;
