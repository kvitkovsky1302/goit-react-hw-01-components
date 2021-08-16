import PropTypes from 'prop-types';
import styles from './StatisticItem.module.css';

function StatisticItem(props) {
  const { label, percentage } = props;
  return (
    <li className={styles.item}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticItem;
