import PropTypes from 'prop-types';
import defaultImg from './default-avatar.jpeg';

function Avatar(props) {
    const {avatar = defaultImg, name, tag, location} = props;
    return (
         <div className="description">
            <img
            src={avatar}
            alt="Аватар пользователя"
            className="avatar"
            />
            <p className="name">{name}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>
    );
};

Avatar.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
}

export default Avatar;
