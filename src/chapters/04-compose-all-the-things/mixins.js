// Mixins are used to shar functionality across many components

// A mixin can be defined as an object literal that has the same functions and attributes of a component

const WindowResize = {
  getInitialState() {
    return {
      innerWidth: window.innerWidth,
    }
  },

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  },

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  },

  handleResize() {
    this.setState({
      innerWidth: window.innerWidth,
    })
  },
}

// use it as

const MyComponent = React.createClass({
  mixins: [WindowResize],

  render() {
    console.log('window.innerWidth', this.state.innerWidth)
  },
})
