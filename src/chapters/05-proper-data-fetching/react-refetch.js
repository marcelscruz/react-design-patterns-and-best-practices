import { connect } from 'react-refetch'

// In the function below:
// If the values of the requests are strings, then the data is fetched as soon as the props are available.

// If the value of a request key is a function instead, it gets passed into the component, and it can be fired lazily.

// As string
const connectWithGists = connect(({ username }) => ({
  gists: `https://api.github.com/users/${username}/gists`,
}))

// --------------

// As function
const token = 'access_token=123'
const connectWithStar = connect(({ id }) => ({
  star: () => ({
    starResponse: {
      url: `https://api.github.com/gists/${id}/star?${token}`,
      method: 'PUT',
    },
  }),
}))

// -------------

const Gist = ({ description, star }) => (
  <li>
    {description}
    <button onClick={star}>+1</button>
  </li>
)

Gist.propTypes = {
  description: React.PropTypes.string,
  star: React.PropTypes.func,
}

const GistWithStar = connectWithStar(Gist)

// ------------

const List = ({ gists }) =>
  gists.fulfilled && (
    <ul>
      {gists.value.map(gist => (
        <Gist key={gist.id} {...gist} />
      ))}
    </ul>
  )

List.propTypes = {
  gists: React.PropTypes.object,
}

const ListWithGists = connectWithGists(List)
