import PropTypes from 'prop-types';
import styles from './FriendItem.module.css';

function FriendItem(props) {
  const { avatar, name, isOnline } = props;
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: isOnline ? 'green' : 'red' }}
      ></span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendItem;
