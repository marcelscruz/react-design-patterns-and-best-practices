import React from 'react'
import onlyIf from 'react-only-if'

const SecretDataOnlyIf = onlyIf(
  ({ dataIsReady, isAdmin, userHasPermissions }) => {
    return dataIsReady && (isAdmin || userHasPermissions)
  },
)(ReactOnlyIf)

const ReactOnlyIf = () => (
  <div>
    <SecretDataOnlyIf
      dataIsReady={true}
      isAdmin={true}
      userHasPermissions={true}
    />
  </div>
)

export default SecretDataOnlyIf
