import { useLoaderData } from "react-router-dom";
import { getAppliedJob } from "../Utilities/AppliedJob";
import AppliedJob from "./AppliedJob";
import { useEffect, useState } from "react";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    // applied job id from local storage
    const appliedJobsId = getAppliedJob();
    // applied jobs
    const applied = jobs.filter((job) => appliedJobsId.includes(job.id));
    // display applied jobs
    const [displayJob, setDisplayJob] = useState([]);
    // setDisplayJob(applied);

    useEffect(() => {
        setDisplayJob(applied);
    }, [jobs]);

    // handleFilter function to update the selected filter
    const handleFilter = (e) => {
        const filterValue = e.target.value;
        if (filterValue !== 'all') {
            const filterJob = applied.filter((job) => job.remote_or_onsite.includes(filterValue));
            setDisplayJob(filterJob);
        }else{
            setDisplayJob(applied);
        }

    }

    return (
        <div className="max-w-5xl my-8 mx-auto">
            <div className="flex justify-end">
                <select id="category" className="bg-[#F4F4F4] p-2 px-1 border-none rounded" onChange={handleFilter}>
                    <option value="all">All</option>

                    {jobs.map((job) => (
                        <option key={job.id} value={job.remote_or_onsite}>
                            {job.remote_or_onsite}
                        </option>
                    ))}
                    
                </select>
            </div>
            <div className="flex flex-col">
                {
                    displayJob?.map((job) => <AppliedJob key={job.id} job={job} />)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;
