const myDiv = (
  <div>
    <a href="https://facebook.github.io/react/">Click me!</a>
  </div>
)

// Translates to

React.createElement(
  'div',
  null,
  React.createElement(
    'a',
    { href: 'https://facebook.github.io/react/' },
    'Click me!',
  ),
)

// ------------------------------ //
// Helper functions

// Regular function
canShowSecretData() {
  const { dataIsReady, isAdmin, userHasPermissions } = this.props
  return dataIsReady && (isAdmin || userHasPermissions)
  }

  <div>
    {this.canShowSecretData() && <SecretData />}
  </div>

// Getter
get canShowSecretData() {
  const { dataIsReady, isAdmin, userHasPermissions } = this.props
  return dataIsReady && (isAdmin || userHasPermissions)
  }

  <div>
  {this.canShowSecretData && <SecretData />}
  </div>
