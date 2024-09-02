// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <>
      <div className="listItem">
        <div className="yourBalanceContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            className="logo"
            alt="balance"
          />
          <div className="amountContainer">
            <p className="balTitle"> Your Balance </p>
            <p className="balValue" data-testid="balanceAmount">
              {' '}
              {`Rs ${balance}`}{' '}
            </p>
          </div>
        </div>
      </div>

      <div className="listItem">
        <div className="yourIncomeContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            className="logo"
            alt="income"
          />
          <div className="amountContainer">
            <p className="balTitle"> Your income </p>
            <p className="balValue" data-testid="incomeAmount">
              {' '}
              {`Rs ${income}`}{' '}
            </p>
          </div>
        </div>
      </div>

      <div className="listItem">
        <div className="yourExpensesContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            className="logo"
            alt="expenses"
          />
          <div className="amountContainer">
            <p className="balTitle"> Your expenses </p>
            <p className="balValue" data-testid="expensesAmount">
              {' '}
              {`Rs ${expenses}`}{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
