import React from 'react'
import renderIf from 'render-if'

const RenderIf = () => {
  const canShowSecretData = renderIf(true && (true || false))

  return <div>{canShowSecretData(<p>Secret data</p>)}</div>
}

export default RenderIf
