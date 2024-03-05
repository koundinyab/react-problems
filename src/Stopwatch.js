import { useEffect, useState } from "react";
import styles from "./stopwatch.module.css";

export default function Stopwatch() {
    const [secs, setSecs] = useState(0);
    const [time, setTime] = useState({
        hours: "",
        minutes: "",
        seconds: "",
    });
    const [isRunning, setIsRunning] = useState(false);
    function formatTime(seconds) {
        let curr = {
            hours: "",
            minutes: "",
            seconds: "",
        };
        curr.seconds = seconds % 60;
        curr.minutes = Math.floor(seconds / 60);
        curr.hours = Math.floor(seconds / 3600);
        curr.seconds =
            curr.seconds < 10
                ? "0" + curr.seconds.toString()
                : curr.seconds.toString();
        curr.minutes =
            curr.minutes < 10
                ? "0" + curr.minutes.toString()
                : curr.minutes.toString();
        curr.hours =
            curr.hours < 10
                ? "0" + curr.hours.toString()
                : curr.hours.toString();
        return curr;
    }
    useEffect(() => {
        let swInterval;
        if (!isRunning) {
            if (swInterval) {
                clearInterval(swInterval);
            }
        } else {
            swInterval = setInterval(() => {
                setSecs((prev) => {
                    return prev + 1;
                });
            }, 1000);
        }
        return () => {
            clearInterval(swInterval);
        };
    }, [isRunning]);
    useEffect(() => {
        setTime((prev) => {
            let currentTime = formatTime(secs);
            return currentTime;
        });
    }, [secs]);
    function handleStart() {
        setIsRunning(true);
    }
    function handleStop() {
        setIsRunning(false);
    }
    function handleReset() {
        setIsRunning(false);
        setSecs(0);
        setTime({
            hours: "",
            minutes: "",
            seconds: "",
        });
    }
    return (
        <>
            <div className={styles.stopwatch}>
                <span>
                    {time.hours !== "" ? time.hours : "00"}:
                    {time.minutes !== "" ? time.minutes : "00"}:
                    {time.seconds !== "" ? time.seconds : "00"}
                </span>
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={handleStart}>start</button>
                <button onClick={handleStop}>stop</button>
                <button onClick={handleReset}>rest</button>
            </div>
        </>
    );
}
