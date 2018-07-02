import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import axios from 'axios';

class App extends Component {
  state = {
    repos: null
  }
  getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
   if (user) {
    axios.get(`https://api.github.com/users/${user}`)
    .then((res) => {
      const repos = res.data.public_repos;
      this.setState({repos});//name of the property and the value are the same ( ({repos: repos}))
    })
   } else return;//close the function and don't do anything
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTTP Calls in React</h1>
        </header>
        <UserForm getUser={this.getUser} />
        { this.state.repos ? <p>Number of repos: {this.state.repos}</p> :
      <p>Please enter a username.</p>}
        
      </div>
    );
  }
}

export default App;
