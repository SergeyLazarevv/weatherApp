import React from 'react';
import background from './img/background.svg';
import './App.css';
import Header from './header';
import WeatherInfo from './WeatherInfo'

interface AppComponentState {
  sity: string,
  infoVisible: boolean,
  data: any
}

class App extends React.Component <any,AppComponentState>{
  constructor(props: any) {
    super(props)
    this.state = {
      sity: "",
      infoVisible: false,
      data: 'no data'
    }
  }
  componentDidMount() {
    console.log('component did mount')
  }
  shouldComponentUpdate() {
    console.log('should update?----')
    console.log(this.state.data)
    return true
  }
  conponentDidUpdate() {
    console.log('component was update')
  }
  getData = (event: any) => {
    event.preventDefault();
    let sity: string = this.state.sity;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${sity},ru&APPID=0cb0672cbaa9d7e3d59356e1bdbb7a31`)
    .then(res => res.json())
    .then((data)=> {
      console.log(data.main)
      console.log(this.state.data)
      return data
    })
    .then(data => this.setState({data}))
    .then(data=>this.setState({sity: ''}))
    .then(data=>this.setState({infoVisible: true}))
    .catch(err => {
      console.log(err);
    });
  }
  setData = (event: any) => {
    this.setState({sity: event.target.value})
  }
  render() {
    console.log('render!!!')
    return (
      <div className="app">
        <Header />
        <form className={this.state.infoVisible ? "input-wrap toTop" : "input-wrap"} onSubmit={this.getData} >
          <input className={this.state.infoVisible ? "input input-close" : "input"} type="text" 
                  placeholder={this.state.infoVisible ? "X" : "Enter sity"} 
                  onChange={this.setData} value={this.state.sity} />
        </form>
        {this.state.infoVisible ? <WeatherInfo weatherInfo={this.state.data} /> : ''}
      </div>
    );
  }
}

export default App;
