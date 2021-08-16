import PropTypes from 'prop-types';
import styles from './OneTransaction.module.css';

function OneTransaction(props) {
  const { type, amount, currency } = props;
  return (
    <tr className={styles.transactionRow}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

OneTransaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default OneTransaction;
