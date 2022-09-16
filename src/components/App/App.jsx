import PropTypes from 'prop-types';

import { Section } from 'components/Section/Section';
import { Profile } from 'components/Profile/Profile';
import { Statistic } from 'components/Statistic/Statistic';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from 'dataFiles/user';
import data from 'dataFiles/data';
import friends from 'dataFiles/friends';
import transactions from 'dataFiles/transactions';

export const App = () => {
  return (
    <>
      <Section sectionTitle="Profile">
        <Profile
          username={user.username}
          tag={user.tag}
          avatar={user.avatar}
          location={user.location}
          stats={user.stats}
        />
      </Section>
      <Section sectionTitle="Statistic">
        <Statistic title="Upload stats" stats={data} />
      </Section>
      <Section sectionTitle="Friends list">
        <FriendList friends={friends} />
      </Section>
      <Section sectionTitle="Transactions history">
        <TransactionHistory transactions={transactions} />
      </Section>
    </>
  );
};

// ------------------------- PropTypes -------------------

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.exact({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

Statistic.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
