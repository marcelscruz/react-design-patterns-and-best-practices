// ------------------- //
// createClass factory

const Button = React.createClass({
  getInitialState() {
    return {
      text: 'Click me!',
    }
  },

  propTypes: {
    text: React.PropTypes.string,
  },

  getDefaultProps() {
    return {
      text: 'Click me!',
    }
  },
  render() {
    return <button>{this.props.text}</button>
  },
})

// or in plain JS

const Button = React.createClass({
  render() {
    return React.createElement('button')
  },
})

// ------------------- //
// React.Component

class Button extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      text: 'Click me!',
    }
  }

  render() {
    return <button />
  }
}

Button.propTypes = {
  text: React.PropTypes.string,
}

Button.defaultProps = {
  text: 'Click me!',
}

// ------------------- //
// Stateless component

const Button = (props, context) => {
  let input

  const onClick = () => input.focus()

  return (
    <div>
      <input ref={el => (input = el)} />
      <button onClick={onClick}>Focus</button>
    </div>
  )
}
