import { useEffect, useState } from "react";
import styles from "./Hacker-news-jobs.module.css";
import Tile from "./ui/Tile";
export default function HackerNewsJobs() {
    const [jobIds, setJobIds] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [isloading, setIsLoaind] = useState(false);

    useEffect(() => {
        const fetchJobIdss = async () => {
            try {
                const idResponse = await fetch(
                    "https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty"
                );
                const jobIdsReponse = await idResponse.json();
                setJobIds(jobIdsReponse);
            } catch (err) {}
        };
        fetchJobIdss();
    }, []);

    useEffect(() => {
        console.log("inside fetch jobs effect");
        if (jobIds.length > 0) {
            const fetchJobs = async () => {
                try {
                    setIsLoaind(true);
                    const startIndex = (pageNumber - 1) * 6;
                    const endIndex = pageNumber * 6;
                    const currentJobIds = jobIds.slice(startIndex, endIndex);
                    const jobsResponse = await Promise.all(
                        currentJobIds.map(async (id) => {
                            const response = await fetch(
                                `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
                            );
                            return await response.json();
                        })
                    );
                    setJobs((prevJobs) => {
                        return prevJobs.length === 0
                            ? jobsResponse
                            : [...prevJobs, ...jobsResponse];
                    });
                } catch (err) {
                } finally {
                    setIsLoaind(false);
                }
            };
            fetchJobs();
        }
    }, [jobIds, pageNumber]);
    function handleLoadMoreJobs() {
        setPageNumber((prev) => prev + 1);
    }
    return (
        <>
            <div className={styles.jobBoard}>
                <h3>Hacker news Jobs Board</h3>
                <div className={styles.jobTileContainer}>
                    {isloading && <p>Loading</p>}
                    {jobs.map((job, index) => (
                        <Tile data={job} key={`${job.id} + ${index}`}></Tile>
                    ))}
                    <button onClick={handleLoadMoreJobs}>Load more jobs</button>
                </div>
            </div>
        </>
    );
}
