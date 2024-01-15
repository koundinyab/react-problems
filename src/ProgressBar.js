import { useEffect, useState } from "react";
import styles from "./ProgressBar.module.css";
export default function ProgressBar({ value }) {
    const [progressValue, setProgressValue] = useState(0);
    useEffect(() => {
        setProgressValue(Math.min(100, Math.max(value, 0)));
    }, [value]);
    return (
        <>
            <div className={styles.progressBarContainer}>
                <h3 className={styles.progressBarItem}>Progress bar</h3>
                <div
                    className={`${styles.progressBarItem} ${styles.progressBar}`}
                >
                    <span>{progressValue}%</span>
                </div>
            </div>
        </>
    );
}
