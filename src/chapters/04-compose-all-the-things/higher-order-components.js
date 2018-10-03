const withClassName = Component => props => (
  <Component {...props} className="my-class" />
)

// the component to be inhanced

const MyComponent = ({ className }) => <div className={className} />

MyComponent.propTypes = {
  className: React.PropTypes.string,
}

// how we use it

const MyComponentWithClass = withClassName(MyComponent)

// --------------------------- //
// now let's recreate the mixin from before in HoC

const withInnerWidth = Component =>
  class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        innerWidth: window.innerWidth,
      }

      this.handleResize = this.handleResize.bind(this)
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize)
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize)
    }

    handleResize() {
      this.setState({
        innerWidth: window.innerWidth,
      })
    }

    render() {
      return <Component {...this.props} {...this.state} />
    }
  }

// create the component to be enhanced

const MyComponent = ({ innerWidth }) => {
  console.log('window.innerWidth', innerWidth)
}

MyComponent.propTypes = {
  innerWidth: React.PropTypes.number,
}

// and use it

const MyComponentWithInnerWidth = withInnerWidth(MyComponent)
