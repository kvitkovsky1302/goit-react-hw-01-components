import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import Avatar from 'components/ProfileCard/Avatar';
import Stats from 'components/ProfileCard/Stats';

function Profile(props) {
  const { stats, ...avatarInfo } = props;
  return (
    <div className={styles.profile}>
      <Avatar {...avatarInfo} />
      <Stats {...stats} />
    </div>
  );
}

Profile.propTypes = {
  stats: PropTypes.object,
};

export default Profile;
