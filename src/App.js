// import { useEffect, useState } from "react";
import "./App.css";
import MoveLeftRight from "./MoveLeftRight";
// import Users from "./Users";
// import Stopwatch from "./Stopwatch";
// import Tabs from "./tabs";
// import GridCells from "./GridCells";
// import HackerNewsJobs from "./Hacker-news-jobs";
// import LoanCalculator from "./Loan-calculator";
// import ProgressBar from "./ProgressBar";
// import Button from "./Button";
// import JiiraReplica from "./JiiraReplica";
// import TimerIncrement from "./Timer-increment";

function App() {
    // const [progressBarProp, setProgressBarProp] = useState(0);
    // useEffect(() => {
    //     setInterval(() => {
    //         setProgressBarProp((prev) => prev + 1);
    //     }, 100);
    // }, []);
    return (
        <div className='App' data-testid='app'>
            {/* <TimerIncrement></TimerIncrement> */}
            {/* <JiiraReplica></JiiraReplica> */}
            {/* <Button></Button> */}
            {/* <ProgressBar value={progressBarProp}></ProgressBar> */}
            {/* <HackerNewsJobs></HackerNewsJobs> */}
            {/* <GridCells></GridCells> */}
            {/* <LoanCalculator></LoanCalculator> */}
            {/* <Tabs numberOfTabs={3}></Tabs> */}
            {/* <Stopwatch></Stopwatch> */}
            {/* <Users></Users> */}
            <MoveLeftRight></MoveLeftRight>
        </div>
    );
}

export default App;
