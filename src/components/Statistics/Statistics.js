import React from "react";
import PropTypes from "prop-types";

import StatisticsItems from "./StatisticsItems";
import styles from './Statistics.module.css';


function Statistics({ stats, title }) {
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{ title }</h2>}
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

export default Statistics;

Statistics.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })),
};
