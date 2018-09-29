import React from 'react'
import { storiesOf } from '@storybook/react'
import { List } from '../chapters/03-create-truly-reusable-components/reusable-component'

const posts = [
  {
    id: 1,
    title: 'Create Apps with No Configuration',
  },
  {
    id: 2,
    title: 'Mixins Considered Harmful',
  },
]

storiesOf('List', module).add('without text field', () => (
  <List collection={posts} titleKey="title" />
))

storiesOf('Text', module).add('without text field', () => <h1>Text</h1>)
