import css from './Statistic.module.css';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const Statistic = ({ title, stats }) => {
  return (
    <div className={css.statistic}>
      <h3 className={css.title}>{title}</h3>

      <ul className={css.statsList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={css.item}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
