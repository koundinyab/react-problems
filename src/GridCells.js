import { useState } from "react";
import styles from "./GridCells.module.css";
export default function GridCells() {
    const [blocks, setBlocks] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    return (
        <>
            <div className={styles.gridContainer}>
                <div className={styles.gridItem}>1</div>
                <div className={styles.gridItem}>2</div>
                <div className={styles.gridItem}>3</div>
                <div className={styles.gridItem}>4</div>
                <div
                    className={`${styles.gridItem} ${styles.omitCenter}`}
                ></div>
                <div className={styles.gridItem}>6</div>
                <div className={styles.gridItem}>7</div>
                <div className={styles.gridItem}>8</div>
                <div className={styles.gridItem}>9</div>
            </div>
        </>
    );
}
