// Each component turns into an element

const element = {
  type: Title,
  prop: {
    color: 'red',
    children: 'Hello, Title',
  },
}

// Reconciliation - React calls function elements passing the props to get back the underlying elements until the tree of DOM nodes are complete

// CSS-in-JS

var divStyle = {
  color: 'white',
  backgroundImage: 'url(' + imgUrl + ')',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all', // 'ms' is the only lowercase vendor prefix
}

ReactDOM.render(<div style={divStyle}>Hello World!</div>, mountNode)
