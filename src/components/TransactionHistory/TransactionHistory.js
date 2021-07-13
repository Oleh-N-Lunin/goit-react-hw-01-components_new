import Props from "prop-types";

import TransactionTable from "./TransactionTable";
import styles from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
    return (
        <table className={styles.TransactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody>
                {items.map(e => (
                    <TransactionTable key={e.id} type={e.type} amount={e.amount} currency={e.currency}/>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: Props.arrayOf(Props.shape({ id: Props.string.isRequired })),
};