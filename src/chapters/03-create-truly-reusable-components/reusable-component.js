import React from 'react'

class PostList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
    }
  }

  componentDidMount() {
    Posts.fetch().then(posts => {
      this.setState({ posts })
    })
  }

  render() {
    return (
      <ul>
        {this.state.posts.map(post => (
          <li key={post.id}>
            <h1>{post.title}</h1>
            {post.excerpt && <p>{post.excerpt}</p>}
          </li>
        ))}
      </ul>
    )
  }
}

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.id}>
        <h1>{user.username}</h1>
        {user.bio && <p>{user.bio}</p>}
      </li>
    ))}
  </ul>
)

//
// The above example is tighlty coupled to its data, so let's improve that
//

export const List = ({ collection, textKey, titleKey }) => (
  <ul>
    {collection.map(item => (
      <Item key={item.id} text={item[textKey]} title={item[titleKey]} />
    ))}
  </ul>
)

const Item = ({ text, title }) => (
  <li>
    <h1>{title}</h1>
    {text && <p>{text}</p>}
  </li>
)

Item.propTypes = {
  text: React.PropTypes.string,
  title: React.PropTypes.string,
}

// So now we can use it like this

// render() {
//   return (
//     <List
//       collection={this.state.posts}
//       textKey="excerpt"
//       titleKey="title"
//     />
//   )
// }

// const UserList = ({ users }) => (
//   <List collection={users} textKey="bio" titleKey="username" />
// )
