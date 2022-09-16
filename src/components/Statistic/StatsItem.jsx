import css from './StatsItem.module.css';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export const StatsItem = ({ key, label, percentage }) => {
  return (
    <li
      key={key}
      className={css.item}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
  );
};
