import prop from "prop-types";

import CreateFriendCard from "./FriendCard";
import styles from './FriendList.module.css';

export default function CreateFriendList({ friends }) {
    return (
        <ul className={styles.friendList}>
            {friends.map(e => (
                <CreateFriendCard key={e.id} isOnline={e.isOnline} name={e.name} avatar={e.avatar}/>
            ))}
        </ul>
    );
}

CreateFriendList.propTypes = {
    friends: prop.arrayOf(
        prop.shape({
            id: prop.string.isRequired
        }),
    ),
};