import styles from "./Tile.module.css";

export default function Tile({ data }) {
    return (
        <>
            <div className={styles.tileContainer}>
                <p className={styles.title}>{data.title}</p>
                <p className={styles.footer}>
                    <span>{data.by}</span>
                    {/* <span>{new Date(data.time)}</span> */}
                </p>
            </div>
        </>
    );
}
