import PropTypes from 'prop-types';
import styles from './Avatar.module.css';
import defaultImg from './default-avatar.jpeg';

function Avatar(props) {
  const { avatar = defaultImg, name, tag, location } = props;
  return (
    <div className={styles.description}>
      <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
}

Avatar.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Avatar;
