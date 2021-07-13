import React from "react";
import PropTypes from "prop-types";

import StatisticsItems from "./StatisticsItems";
import styles from './Statistics.module.css';

export default function Statistics({ stats }) {
    return (
        <section className={styles.statistics}>
            <h2 className={styles.title} >Upload stats</h2>
            <ul className={styles.statList}>
                {stats.map(item => (
                    <StatisticsItems
                        key={item.id}
                        label={item.label}
                        percentage={item.percentage}
                    />
                ))}
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })),
};