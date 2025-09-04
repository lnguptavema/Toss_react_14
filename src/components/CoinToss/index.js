import './index.css'

import {Component} from 'react'

class CoinToss extends Component {
  state = {
    Total: 0,
    Heads: 0,
    Tails: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClicked = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => {
        return {
          Heads: prevState.Heads + 1,
          Total: prevState.Total + 1,
          imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
        }
      })
    } else {
      this.setState(prevState => {
        return {
          Tails: prevState.Tails + 1,
          Total: prevState.Total + 1,
          imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
        }
      })
    }
  }

  render() {
    const {Tails, Heads, Total, imgUrl} = this.state
    return (
      <div className="mainContainer">
        <div className="cardItem">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img alt="toss result" src={imgUrl} />
          <button type="button" onClick={this.onClicked}>
            Toss Coin
          </button>
          <div className="cards">
            <p>Total: {Total}</p>
            <p>Heads: {Heads}</p>
            <p>Tails: {Tails} </p>
          </div>{' '}
        </div>
      </div>
    )
  }
}

export default CoinToss
