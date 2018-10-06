const withData = url => Component =>
  class withData extends Component {
    constructor() {
      this.state = { data: [] }
    }

    componentDidMount() {
      const endpoint = typeof url === 'function' ? url(this.props) : url

      fetch(endpoint)
        .then(response => response.json())
        .then(data => this.setState({ data }))
    }

    render() {
      return <Component {...this.props} {...this.state} />
    }
  }

const List = ({ data: gists }) => (
  <ul>
    {gists.map(gist => (
      <li key={gist.id}>{gist.description}</li>
    ))}
  </ul>
)

List.propTypes = {
  data: React.PropTypes.array,
}

// Pass either a string or a function
const withGists = withData('https://api.github.com/users/gaearon/gists')
// OR
const withGists = withData(
  props => `https://api.github.com/users/${props.username}/gists`,
)

// Pass the list to it
const ListWithGists = withGists(List)

// And use it like this
<ListWithGists/>
// OR
<ListWithGists username="gaearon" />

