import PropTypes from 'prop-types';

import css from './FriendList.module.css';
import { Friend } from './Friend';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <Friend
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        ></Friend>
      ))}
    </ul>
  );
};

// ------------------- PropTypes ----------------

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
