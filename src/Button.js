import { useState } from "react";
import styles from "./Button.module.css";
export default function Button() {
    const [clicked, setClicked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [fetchCounter, setFecthCounter] = useState(0);
    const [err, setErr] = useState(false);
    const classNames = `${styles.button} ${
        clicked ? styles.buttonClicked : ""
    }`;
    function fakeFetch() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (fetchCounter % 2 === 0) {
                    setFecthCounter((prev) => prev + 1);
                    resolve("hi");
                } else {
                    setFecthCounter((prev) => prev + 1);
                    reject("bye");
                }
            }, 1000);
        });
    }
    function handleButtonClicked() {
        setLoading(true);
        const getData = async () => {
            try {
                await fakeFetch();
                setErr(false);
                setLoading(false);
                setClicked(!clicked);
            } catch (err) {
                setErr(true);
                setLoading(false);
                setClicked(!clicked);
            }
        };
        getData();
    }
    return (
        <>
            <button className={classNames} onClick={handleButtonClicked}>
                {loading ? <span>lo</span> : <span>&#10084;</span>}
                Like
            </button>
            {err && "error"}
        </>
    );
}
