import React, { Component } from 'react';
import Smurf from './Smurf';
import styled from 'styled-components';

const SmurfDiv = styled.div `
width: 200px;
height: 200px;
color: yellow;
border: 2px solid white;
margin: 5%;
font-family: fantasy;
background-color: rgba(0, 0, 0, 0.3);
margin-left: 42%;


`;
const H1 = styled.h1 `
color: yellow;

`;


class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <H1>Smurf Village</H1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <SmurfDiv>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
              </SmurfDiv>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
