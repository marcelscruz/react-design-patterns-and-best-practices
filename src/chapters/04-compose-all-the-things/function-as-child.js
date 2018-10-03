const FunctionAsChild = ({ children }) => children()

FunctionAsChild.propTypes = {
  children: React.PropTypes.func.isRequired,
}

// Use it like this

<FunctionAsChild> 
  {() => <div>Hello, World!</div>} 
</FunctionAsChild>

// A better example
const Name = ({ children }) => children('World')

Name.propTypes = { 
  children: React.PropTypes.func.isRequired, 
} 

<Name> 
  {name => <div>Hello, {name}!</div>} 
</Name>

// This approach allows the children to have the "name" value passed at runtime