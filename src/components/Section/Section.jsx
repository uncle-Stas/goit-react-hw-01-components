import css from './Section.module.css';
import { Profile } from 'components/Profile/Profile';

import user from 'user';

export const Section = props => (
  <section className={css.section}>
    <div className={css.container}>
      <h2 className={css.title}>{props.sectionTitle}</h2>
      <Profile
        userName={user.username}
        tag={user.tag}
        avatar={user.avatar}
        location={user.location}
        stats={user.stats}
      />
    </div>
  </section>
);
