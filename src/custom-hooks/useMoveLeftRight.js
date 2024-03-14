import { useState } from "react";
export default function UseMoveLeftRight() {
    const [fromCheckedItems, setFromCheckedItems] = useState(new Set());
    const [toCheckedItems, setToCheckedItems] = useState(new Set());

    const handleFromTo = (items, direction) => {
        if (direction === "to") {
            const selectedItesm = items.filter((fi) => {
                return fromCheckedItems.has(fi);
            });
            const nonSelected = items.filter((fi) => {
                return !fromCheckedItems.has(fi);
            });
            setFromCheckedItems(new Set());
            return {
                selectedItesm,
                nonSelected,
            };
        } else {
            const selectedItesm = items.filter((fi) => {
                return toCheckedItems.has(fi);
            });
            const nonSelected = items.filter((fi) => {
                return !toCheckedItems.has(fi);
            });
            setToCheckedItems(new Set());
            return {
                selectedItesm,
                nonSelected,
            };
        }
    };

    return {
        fromCheckedItems,
        setFromCheckedItems,
        toCheckedItems,
        setToCheckedItems,
        handleFromTo,
    };
}
