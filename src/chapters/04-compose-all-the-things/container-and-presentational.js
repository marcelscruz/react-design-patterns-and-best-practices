// geolocation-container.js

class GeolocationContainer extends React.Component {
  constructor() {
    super(props)

    this.state = {
      latitude: null,
      longitude: null,
    }

    this.handleSuccess = this.handleSuccess.bind(this)
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.handleSuccess)
    }
  }

  handleSuccess({ coords }) {
    this.setState({
      latitude: coords.latitude,
      longitude: coords.longitude,
    })
  }

  render() {
    return (
      <Geolocation {...this.state}
    )
  }
}

// geolocation.js

const Geolocation = ({ latitude, longitude }) => ( 
  <div> 
    <div>Latitude: {latitude}</div> 
    <div>Longitude: {longitude}</div> 
  </div> 
) 

Geolocation.propTypes = { 
  latitude: React.PropTypes.number, 
  longitude: React.PropTypes.number, 
} 

// Container components:

// They are more concerned about the behavior
// They render their presentational components
// They make API calls and manipulate data
// They define event handlers
// They are written as classes

// Presentational components:

// They are more concerned with the visual representation
// They render the HTML markup (or other components)
// They receive data from the parents in the form of props
// They are often written as stateless functional components