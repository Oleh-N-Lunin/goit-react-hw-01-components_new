import Props from "prop-types";
import styles from "./TransactionHistory.module.css";

function TransactionTable({ type, amount, currency }) {
    return (
        <tr>
            <td className={styles.type}>{type}</td>
            <td className={styles.amount}>{amount}</td>
            <td className={styles.currency}>{currency}</td>
        </tr>
    );
}

export default TransactionTable;

TransactionTable.propTypes = {
    type: Props.string.isRequired,
    amount: Props.number.isRequired,
    currency: Props.string.isRequired,
};