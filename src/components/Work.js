import React, { Component } from 'react';
class Work extends Component {
  render() {
    return (
      <div className="Work">
          <img src={require('../Vector.png')} className="Work" alt="extreme tic tac toe" />
          <br/>
        Extreme Tic Tac Toe
      </div>
    );
  }
}
export default Work;