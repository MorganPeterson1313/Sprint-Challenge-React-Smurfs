import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.


  componentDidMount() {
    axios
    .get(`http://localhost:3333/smurfs`)
    .then(response => {
      this.setState(() => ({ smurfs: response.data }));
      console.log(this.state.smurfs)
    })
    .catch(error => {
      console.error('Server Error', error);
    });


  }

  // addSmurfs = ( newSmurf) => {
  


  //   axios
  //     .post("http://localhost:3333/smurfs", newSmurf)
  //     .then(response => {
  //       this.setState({
  //         smurfs: response.data
  //       });
  //       // this.props.history.push("/");
  //     })
  //     .catch(err => console.error(err));
  // };





  
  render() {
    return (
      <div className="App">
         <nav>
          <div >
            <NavLink exact to="/smurf-form">
              Smurf Form
            </NavLink>
            <NavLink exact to="/">
              Home
            </NavLink>
           
          </div>
        </nav>
        <Route exact path="/smurf-form"    component={SmurfForm}/>
        <Route  path="/"  render= {props => <Smurfs {...props} smurfs={this.state.smurfs} />}/>
      </div>
    );
  }
}

export default App;
