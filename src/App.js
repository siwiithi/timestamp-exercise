import React, { Component } from 'react';
import moment from 'moment'
import _ from 'lodash'
// date 10/10/2018
// date 10/10/2018
// xxxx
// xxxx
// date 10/11/2018
// xxx
// date 10/12/2018
// xxx
// .
// .
// .
// date xx/xx/2018
// xxxx
// วันเดียวกันไม่ต้อง show date ซ้ำ
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
    const newDate = data
      .map((value, key)=>  {
        return(
          {
            date: moment.unix(value.timestamp).format("MM/DD/YYYY"),
            order: value.order
            
          }
        )
      })

    const filterData = _.groupBy(newDate, (value) => (value.date))
    const convertedData = Object.keys(filterData).map(function(key) {
      return [key, filterData[key]]
    })  
    // console.log('convert', convertedData)
    let test1 = convertedData.forEach(function(element){
      console.log('date', element[0])
      element[1].forEach(function(testData){
        console.log('order', testData.order)
      })
    })
    
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
