import React, {Component} from 'react';
import Ports from './components/ports';

class App extends Component {
  state = {
    ports: []
  } 

  componentDidMount() {
    fetch('https:hsalah.net/ports_app/', { 
      method: 'get', 
      headers: new Headers({
        'Authorization': "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHAiOjE1NTkwODI2NzV9.-YOAxjnp1B3cyxIepM7s_My6391NgjnpO_jA2fR-IhI", 
        'Content-Type': 'application/json'
    })})
    .then(res => res.json())
    .then(data => {
      this.setState({ ports: data['data'] })
    })
    .catch(console.log)
  }

  render() {
    return (
      <Ports ports={this.state.ports} />
    );
  }
}



export default App;
