import { Section } from 'components/Section/Section';
import { Profile } from 'components/Profile/Profile';
import { Statistic } from 'components/Statistic/Statistic';
import { FriendList } from 'components/FriendList/FriendList';
import user from 'dataFiles/user';
import data from 'dataFiles/data';
import friends from 'dataFiles/friends';

export const App = () => {
  return (
    <>
      <Section sectionTitle="Profile">
        <Profile
          userName={user.username}
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
    </>
  );
};
