/** timer componenet that increments every second */
import { useEffect, useState } from "react";
export default function TimerIncrement() {
    const [time, setTime] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <>
            <p>Timer {time}</p>
        </>
    );
}
