import React, { Component } from 'react';
import Home from './Home.js';
import Login from './Login.js';
import { BrowserRouter , Route ,Redirect} from 'react-router-dom';
import fire from './config/fire';


class App extends Component {

  constructor(props){

    super(props);

    this.state = {
      user: null,
    }

    this.authListener = this.authListener.bind(this);

  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user});
      }else{
        this.setState({ user: null });
      }
    })
  }



    render(){
      return (
        <div>
          {this.state.user ? (<Redirect to='/Customer' />) : (<Login/>)}
        </div>
      );
    }
}

export default App;
