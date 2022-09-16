import css from './Statistic.module.css';
import { StatsItem } from './StatsItem';

export const Statistic = ({ title, stats }) => {
  return (
    <div className={css.statistic}>
      <h3 className={css.title}>{title}</h3>

      <ul className={css.statsList}>
        {stats.map(stat => (
          <StatsItem
            key={stat.id}
            label={stat.label}
            percentage={stat.percentage}
          />
        ))}
      </ul>
    </div>
  );
};
