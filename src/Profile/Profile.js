import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import Stats from '../Stats/Stats';

function Profile(props) {
    const {stats, ...avatarInfo } = props;
  return (
    <div className="profile">
          <Avatar {...avatarInfo} />
          <Stats {...stats}/>
    </div>
  );
}

Profile.propTypes = {
    stats: PropTypes.object,
}

export default Profile;
