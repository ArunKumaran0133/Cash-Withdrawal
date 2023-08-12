import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  updateBalance = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const name = 'Sarah Williams'
    const firstName = name.slice(0, 1)
    const {amount} = this.state
    const {denominationsList} = this.props
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="name-container">
            <div className="name-icon">
              <h1>{firstName}</h1>
            </div>
            <h1 className="heading">{name}</h1>
          </div>
          <div className="amount-container">
            <p className="balance-heading">Your Balance</p>
            <div>
              <p className="amount">{amount}</p>
              <p className="rupee-text">in Rupees</p>
            </div>
          </div>
          <p className="withdraw-text">Withdraw</p>
          <p className="sum-text">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachValue => (
              <DenominationItem
                eachValue={eachValue}
                key={eachValue.id}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
