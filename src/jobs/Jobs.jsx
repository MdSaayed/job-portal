import { useEffect, useState } from "react";
import Job from "./Job";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    const [showData, setShowData] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(jobs => setJobs(jobs));
    }, []);

    return (
        <div>
            <div className="max-w-5xl mx-auto my-8">
                <div className="py-8">
                    <h2 className="text-3xl font-bold text-center">Featured Jobs</h2>
                    <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    {jobs.slice(0, showData).map((job) => <Job job={job} />)}
                </div>
                <div className="text-center mt-4">
                    <button onClick={() => setShowData(jobs.length)} className={showData === jobs.length? `hidden` :`py-2 inline-block px-4 bg-blue-800 text-white rounded mt-2`}>Show All</button>
                </div>
            </div>
        </div>
    );
};

export default Jobs;