import { useState, useEffect } from "react";
import styles from "./tabs.module.css";
export default function Tabs(props) {
    const [tabs, setTabs] = useState([]);
    const [tabData, setTabData] = useState("");
    const [selectedTab, setSelectedTab] = useState(0);
    useEffect(() => {
        let tabArr = [];
        for (let i = 0; i < props.numberOfTabs; i++) {
            tabArr.push(`job${i}`);
        }
        setTabs(tabArr);
        setTabData([
            "tab1 data is displayed",
            "tab2 data is displayed",
            "tab3 data is displayed",
        ]);
    }, [props.numberOfTabs]);

    function handleTabData(index) {
        setSelectedTab(index);
    }

    return (
        <>
            <div className={styles.tabsContainer}>
                {tabs.map((tab, index) => {
                    return (
                        <button
                            onClick={() => handleTabData(index)}
                            className={styles.tab}
                            key={tab + index}
                        >
                            {tab}
                        </button>
                    );
                })}
            </div>
            <div className={styles.paraContainer}>
                <span>{tabData[selectedTab]}</span>
            </div>
        </>
    );
}
