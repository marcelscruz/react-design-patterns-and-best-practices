const withData = url => Component => (
  class withData extends Component {
    constructor() {
      this.state = { data: [] }
    }
  
    componentDidMount() {
      fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ data }))
    }
  
    render() { 
      return <Component {...this.props} {...this.state} /> 
      } 
  }
  
  export default withData
  
)