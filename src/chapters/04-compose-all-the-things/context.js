// Receive value as prop and currency as context
const Price = ({ value }, { currency }) => (
  <div>
    {currency}
    {value}
  </div>
)

Price.propTypes = {
  value: React.PropTypes.number,
}

Price.contextTypes = {
  currency: React.PropTypes.string,
}

// Let's pass context from a HoC

// getContext from recompose
const withCurrency = getContext({
  currency: React.PropTypes.string,
})

// Now it receives from as props
const Price = ({ currency, value }) => (
  <div>
    {currency}
    {value}
  </div>
)

Price.propTypes = {
  currency: React.PropTypes.string,
  value: React.PropTypes.number,
}

// Then apply it
const PriceWithCurrency = withCurrency(Price)
