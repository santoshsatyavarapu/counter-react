import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          The Button has been clicked <br />
          <span>{count}</span> times
        </h1>
        <p>Click the button to increase the count!</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Click Me
        </button>
      </div>
    )
  }
}

export default Counter
