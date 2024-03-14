import React, { useState } from "react";
import styles from "./MoveLeftRight.module.css";
import useMoveLeftRight from "./custom-hooks/useMoveLeftRight";

export default function App() {
    const [fromItems, setFromItems] = useState([1, 2, 3, 4]);
    const [toItems, setToItems] = useState([]);
    const {
        fromCheckedItems,
        setFromCheckedItems,
        toCheckedItems,
        setToCheckedItems,
        handleFromTo,
    } = useMoveLeftRight();

    const onHandleFromChange = (item) => {
        const uniqueCheckedItesm = new Set(fromCheckedItems);
        if (uniqueCheckedItesm.has(item)) {
            uniqueCheckedItesm.delete(item);
        } else {
            uniqueCheckedItesm.add(item);
        }
        setFromCheckedItems(uniqueCheckedItesm);
    };
    const onHandleToChange = (item) => {
        const uniqueCheckedItesm = new Set(toCheckedItems);
        if (uniqueCheckedItesm.has(item)) {
            uniqueCheckedItesm.delete(item);
        } else {
            uniqueCheckedItesm.add(item);
        }
        setToCheckedItems(uniqueCheckedItesm);
    };
    const handleFromToEvent = (direction) => {
        if (direction === "to") {
            const { selectedItesm, nonSelected } = handleFromTo(
                fromItems,
                "to"
            );
            setFromItems(nonSelected);
            setToItems([...toItems, ...selectedItesm]);
            // setFromCheckedItems(new Set());
        } else {
            const { selectedItesm, nonSelected } = handleFromTo(
                toItems,
                "from"
            );
            setToItems(nonSelected);
            setFromItems([...fromItems, ...selectedItesm]);
            // setToCheckedItems(new Set());
        }
    };
    return (
        <div className={styles.container}>
            <div className={styles.itemContainer}>
                {fromItems.map((fi, index) => (
                    <div key={index}>
                        <input
                            type='checkbox'
                            checked={fromCheckedItems.has(fi)}
                            onChange={() => onHandleFromChange(fi)}
                        />
                        <label>{fi}</label>
                    </div>
                ))}
            </div>
            <div className={styles.buttonContainer}>
                <button onClick={() => handleFromToEvent("to")}>from</button>
                <button onClick={() => handleFromToEvent("from")}>to</button>
            </div>
            <div className={styles.itemContainer}>
                {toItems.map((ti, index) => (
                    <div key={index}>
                        <input
                            type='checkbox'
                            name=''
                            checked={toCheckedItems.has(ti)}
                            onChange={() => onHandleToChange(ti)}
                        />
                        <label>{ti}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}
