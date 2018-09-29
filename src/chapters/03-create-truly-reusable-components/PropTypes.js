import React from 'react'
import PropTypes from 'prop-types'

/**
 * A generic button with text.
 */

export const Button = ({ text }) => <button>{text}</button>

Button.propTypes = {
  text: PropTypes.string.isRequired,
}

// Avoid passing objects as props, always try to pass primitives

// After running docgen
{
  "description": "A generic button with text.","displayName": "Button",
  "methods": [],
  "props": {
    "text": {
      "type": { 
        "name": "string"
      },
      "required": true,
      "description": ""
    }
  }
}