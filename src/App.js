import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{

constructor(){
  super()
  this.state = {

        squares: Array (48).fill (null),
      // square: [0,1,2,3,4,5,6,
      //         7,8,9,10,11,12,13,
      //         14,15,16,17,18,19,20,
      //         21,22,23,24,25,26,28,
      //         28,29,30,31,32,33,34,
      //         35,36,37,38,39,40,41,
      //         42,43,44,45,46,47,48
      //       ],
      winning: false,
}
}

shipSetter =() =>{
  // change values in array to "carrier"x5, "destroyer"x4,"battleship" x3, "submarine" x3, "patrolBoat" x2
}
hitSetter = () => {
  //player anouces target ~ "b4" translate to object index ~ rowB [3] change value to hit if value was "carrier,destroyer,battleship, submarine, patrolboat" if value was not a ~boat~ then change value to "miss"
}
hitMissAlert = () => {
 //shows an alert that says "hit" or "miss"
}
shipSunkAlert = () => {
  //shows an alert "you sunk the ~~~~~~ ship"
}


  render(){
    let square = this.state.squares.map
    ((value,index)=> {
      return(
         <Square
         value = { value }
         index = { index }
         shipSetter = { this.shipSetter }
         hitSetter = { this.hitSetter }
          /> )
    })


    return(
      <React.Fragment>
        <h1>Battleship App</h1>

        <Square />
      </React.Fragment>
    )
  }
}
export default App
