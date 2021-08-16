import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import FriendItem from '../FriendItem';

function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem avatar={avatar} name={name} isOnline={isOnline} key={id} />
      ))}
    </ul>
  );
}

FriendItem.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
