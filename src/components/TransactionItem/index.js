// Write your code here

import './index.css'

const TransactionItem = props => {
  const {transactionId, title, amount, type, onDelete} = props

  // const firstLetter = type[0]
  // const remainingLetters = type.slice(1).toLowerCase()
  // const res = firstLetter + remainingLetters

  const onDeleteEachTransaction = () => {
    onDelete(transactionId)
  }

  return (
    <li className="transactionListItem">
      <div className="title-data-container">
        <p className="title"> {title} </p>
      </div>

      <div className="amount-data-container">
        <p className="sourceType amount">{`Rs ${amount}`}</p>
      </div>

      <div className="type-data-container">
        <p className="sourceType type"> {type} </p>
      </div>

      <div className="delete-button-container">
        <button
          className="deleteBtn"
          onClick={onDeleteEachTransaction}
          data-testid="delete"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="deleteLogo"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
