import { flattenProp, enhance, renameProp } from 'recompose'

const Profile = ({ username, age }) => (
  <div>
    <div>Username: {user.username}</div>
    <div>Age: {user.age}</div>
  </div>
)

Profile.propTypes = {
  username: React.PropTypes.string,
  age: React.PropTypes.number,
}

// Pass an object to the HoC and receive primitives
const ProfileWithFlattenUser = flattenProp('user')(Profile)
// or
const withFlattenUser = flattenProp('user')
const ProfileWithFlattenUser = withFlattenUser(Profile)

// Use more than one HoC at once

const enhance = compose(
  flattenProp('user'),
  renameProp('username', 'name'),
)

const EnhancedProfile = enhance(Profile)

// It's also possible to pass custom HoC to compose

// It is important not to abuse HoCs because with every abstraction come some problems; in this case, the trade-off is related to performance.

// You have to think that, every time you wrap a component into a higher-order one, you are adding a new render function, a new lifecycle method call, and memory allocation.
