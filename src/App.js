import React, { Component } from 'react';
import moment from 'moment'

class App extends Component {
  changeDateFormat() {
    const data = [
      {timestamp:1531150524, order:'papaya'},
      {timestamp:1531150524, order:'orange'},
      {timestamp:1533828924, order:'orange'},
      {timestamp:1533828924, order:'coconut'},
      {timestamp:1536507324, order:'coconut'},
      {timestamp:1536593724, order:'lemon'},
      {timestamp:1536766524, order:'lemon'},
      {timestamp:1536766524, order:'mango'},
      {timestamp:1536766524, order:'grape'},
      {timestamp:1536939324, order:'banana'},
      {timestamp:1536939324, order:'apple'},
    ]
    const changeData = data.map((value) => {
     return(
      <div> 
        <div>{moment(value.timestamp).format('L')}</div>
        <div>{value.order}</div>
      </div>
    )})
    return changeData
  }

  render() {
    return (
      <div>
        {this.changeDateFormat()}
      </div>
    );
  }
}

export default App;
