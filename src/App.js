// import { useEffect, useState } from "react";
import "./App.css";
import GridCells from "./GridCells";
import HackerNewsJobs from "./Hacker-news-jobs";
import LoanCalculator from "./Loan-calculator";
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
        <div className='App'>
            {/* <TimerIncrement></TimerIncrement> */}
            {/* <JiiraReplica></JiiraReplica> */}
            {/* <Button></Button> */}
            {/* <ProgressBar value={progressBarProp}></ProgressBar> */}
            {/* <HackerNewsJobs></HackerNewsJobs> */}
            {/* <GridCells></GridCells> */}
            <LoanCalculator></LoanCalculator>
        </div>
    );
}

export default App;
