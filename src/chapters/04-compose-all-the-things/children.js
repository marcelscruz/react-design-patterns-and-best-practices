import React from 'react';

const Button = ({children}) => (
  <button className="btn">{children}</button>
);

// children is an array if more than one element is passed

Button.propTypes = { 
  children: React.PropTypes.array, 
}

// it's not an array if only one element is passed, so we can use

Button.propTypes = { 
  children: React.PropTypes.oneOfType([ 
    React.PropTypes.array, 
    React.PropTypes.element, 
  ]), 
} 

export default Button;

// use the component like this

<Button>
  <img src="#" alt="text">
  <span>Click me!</span>
</Button>