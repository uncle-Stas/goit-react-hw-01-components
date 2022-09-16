import css from './TableRow.module.css';

export const TableRow = ({ amount, type, currency }) => {
  return (
    <tr className={css.tableRow}>
      <td className={css.tableData}>{type}</td>
      <td className={css.tableData}>{amount}</td>
      <td className={css.tableData}>{currency}</td>
    </tr>
  );
};
