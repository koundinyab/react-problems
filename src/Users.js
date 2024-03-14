import UseUserNavigation from "./custom-hooks/useUserNavigation";
import styles from "./Users.module.css";

export default function Users() {
    const [user, previousUser, nextUser, currentUserPointer] =
        UseUserNavigation();

    return (
        <>
            {user && (
                <div className={styles.userTile} data-testid='user-tile'>
                    <div className={styles.userTileHeader}>
                        <div className={styles.userTileImagHeader}>
                            <img
                                src={user.picture.large}
                                alt='user thumbnail'
                            ></img>
                        </div>
                    </div>
                    <div className={styles.userTileBody}>
                        <span>Hi, My name is</span>
                        <h3>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h3>
                    </div>
                    <div className={styles.userTileFooter}>
                        <button
                            onClick={previousUser}
                            disabled={currentUserPointer === 0}
                        >
                            previous user
                        </button>
                        <button onClick={nextUser}>next user</button>
                    </div>
                </div>
            )}
        </>
    );
}
