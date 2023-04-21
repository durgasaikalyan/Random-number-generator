// Write your code here

import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  getRandomNumber = () => {
    const number = Math.ceil(Math.random() * 100)
    this.setState({count: number})
    console.log(number)
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="random-generator-card">
          <h1 className="heading text-blue">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>

          <button type="button" onClick={this.getRandomNumber}>
            Generate
          </button>
          <p className="counter">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
