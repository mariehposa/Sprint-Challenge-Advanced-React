import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

const playerApi = 'http://localhost:5000/api/players';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerDetails: {},
    };
  }

  componentDidMount() {
    axios.get(playerApi)
      .then(res => {
        console.log(res.data)
        this.setState({ playerDetails: res.data });
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

