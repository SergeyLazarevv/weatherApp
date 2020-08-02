import React from 'react';
import background from './img/background.svg';
import './App.css';
import Header from './header';
import WeatherInfo from './WeatherInfo'
//create interface for state
interface AppComponentState {
  sity: string,
  infoVisible: boolean,
  data: any
}

class App extends React.Component <any,AppComponentState>{
  private inputRef: React.RefObject<HTMLInputElement>;
  constructor(props: any) {
    super(props)
    //create ref for input field
    this.inputRef = React.createRef();
    this.state = {
      sity: "",
      infoVisible: false,
      data: 'no data'
    }
  }
  getData = (event: any) => {
    event.preventDefault();
    let sity: string = this.state.sity;
    //get weather info
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${sity},ru&APPID=0cb0672cbaa9d7e3d59356e1bdbb7a31`)
    .then(res => res.json())
    .then((data)=> {
      console.log(data.main)
      console.log(this.state.data)
      return data
    })
     //set data to state for using in child component
    .then(data => this.setState({data}))
    //clear input field
    .then(data=>this.setState({sity: ''}))
    //ifovisible for child information component rendering 
    .then(data=>this.setState({infoVisible: true}))
    //remove focus from input and trasform them in close button
    .then(data=>this.inputRef.current?.blur())
    .catch(err => {
      console.log(err);
    });
  }
  setData = (event: any) => {
    this.setState({sity: event.target.value})
  }
  newSearch = () => {
    this.setState({infoVisible: false})
  }
  render() {
    console.log('render!!!')
    return (
      <div className="app">
        <Header />
        <form className={this.state.infoVisible ? "input-wrap toTop" : "input-wrap"} onSubmit={this.getData} >
          <input className={this.state.infoVisible ? "input input-close input-hover" : "input"} type="text" 
                  placeholder={this.state.infoVisible ? "X" : "Enter sity"} 
                  onChange={this.setData} value={this.state.sity}
                  ref={this.inputRef} 
                  onClick={this.newSearch} />
        </form>
        {this.state.infoVisible ? <WeatherInfo weatherInfo={this.state.data} /> : ''}
      </div>
    );
  }
}

export default App;
