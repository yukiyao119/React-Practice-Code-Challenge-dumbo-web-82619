import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    startIndex: 0,
    // amIEaten: false,
    budget: 100,
    noMoreSushis: false
  }

  loadNextSushi = () => {
    this.setState({
      startIndex: (this.state.startIndex + 4)
    })
  }


  eatenSushis = () => {
    return this.state.sushis.filter(sushi => sushi.amIEaten)
  } 

  whatWeAlreadySpent = () => {
    return this.eatenSushis().reduce((memo, sushi) => memo + sushi.price, 0)
  }

  remainingBudget() {
    return this.state.budget - this.whatWeAlreadySpent()  
  }

  weCanAffordThisSushi(sushi) {
    return this.remainingBudget() > sushi.price
  }

  eatMe = (sushiObj) => {
    // sushiObj.amIEaten = true
    // console.log(sushiObj.id)
    if (this.weCanAffordThisSushi(sushiObj)) {
      const newSushis = this.state.sushis.map(sushi => {
        // return
        // console.log(sushi)
        if(sushi.id === sushiObj.id){
          return {
                    ...sushi, 
                    amIEaten:true
                    // name: "FUCK"
                  }
           // sushi.amIEaten = !sushi.amIEaten
        }
        return sushi
      })
      // console.log(newSushis)
      this.setState({
        sushis: newSushis,
        noMoreSushis: false
      })
    } else {
      this.setState({
        noMoreSushis: true
      })
    }
  }


  componentDidMount(){
    fetch(API)
    .then(r => r.json())
    .then(res => {
      res.forEach((sushiObject) => {
        sushiObject.amIEaten = false
      })
      this.setState({
        sushis: res
      })
    })

  }

  render() {

    const { sushis, startIndex } = this.state
    const fourSushis = sushis.slice(startIndex, (startIndex + 4))
    return (

      <div className="app">
        {
          this.state.noMoreSushis ? "Fuck off!" : ""
        }
        <SushiContainer loadNextSushi={this.loadNextSushi} 
                        sushis={fourSushis}
                        eatMe={this.eatMe} />
        <Table remainingBudget={ this.remainingBudget() }  
               eatenSushis={ this.eatenSushis() }/>
      </div>
    );
  }
}

export default App;