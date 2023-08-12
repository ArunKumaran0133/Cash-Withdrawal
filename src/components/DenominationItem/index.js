import './index.css'

const DenominationItem = props => {
  const {eachValue, updateBalance} = props
  const {value} = eachValue
  const valueBtn = () => {
    updateBalance(value)
  }

  return (
    <li className="item-container">
      <button type="button" className="button" onClick={valueBtn}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
