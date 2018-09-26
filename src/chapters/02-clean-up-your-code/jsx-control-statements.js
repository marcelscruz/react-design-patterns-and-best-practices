import React from 'react'

const JSXControlStatements = () => (
  <div>
    <If condition={bool}>
      <h1>Secret data</h1>
    </If>

    <Choose>
      <When condition={bool}>
        <span>if</span>
      </When>
      <When condition={bool}>
        <span>else if</span>
      </When>
      <Otherwise>
        <span>else</span>
      </Otherwise>
    </Choose>

    <ul>
      <For each="user" of={this.props.users}>
        <li>{user.name}</li>
      </For>
    </ul>
  </div>
)

export default JSXControlStatements
