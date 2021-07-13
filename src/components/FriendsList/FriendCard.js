import prop from "prop-types";
import styles from "./FriendList.module.css";

export default function CreateFriendCard({ isOnline, avatar, name }) {
    return (
        <li className={styles.item}>
            <span className={isOnline ? styles.statusOn : styles.statusOff}></span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{ name }</p>
        </li>
    );
}

CreateFriendCard.propTypes = {
    isOnline: prop.string.isRequired,
    avatar: prop.string.isRequired,
    name: prop.string.isRequired,
}