import { useLoaderData, useParams } from "react-router-dom";
import './Jobs.css'
import { saveAppliedJobs } from "../Utilities/AppliedJob";

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);

    const job = jobs.find((job) => job.id === intId);
    const { job_description, job_responsibility, educational_requirements, experiences, job_title, company_name,salary,contact_information } = job;

    // handle applied job
    const handleApplyJob = (id) =>{
        saveAppliedJobs(id);
    }

    return (
        <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto my-8">
            <div className="col-span-2">
                <p className="mb-4"><b>Job Description:</b> {job_description}</p>
                <p className="mb-4"><b>Job Responsibility:</b> {job_responsibility}</p>
                <p className="mb-4"><b>Educational Requirements:</b></p>
                <p className="mb-4">{educational_requirements}</p>
                <p className="mb-4"><b>Experiences:</b></p>
                <p> {experiences}</p>

            </div>
            <div>
                <div className="bg-color p-4 rounded">
                    <div>
                        <h2 className="pb-2 border-b"><b>Job Details</b></h2>
                        <div className="mb-4">
                            <p><b>Salary: </b>{salary}</p>
                            <p><b>Job Title: </b>{job_title}</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="pb-2 border-b"><b>Contact Information</b></h2>
                        <div className="mb-4">
                            <p><b>Phone: </b>{contact_information.phone}</p>
                            <p><b>Phone: </b>{contact_information.email}</p>
                            <p><b>Address: </b>{contact_information.address}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button onClick={()=> handleApplyJob(intId) } className="btn-bg rounded py-2 w-full mt-4 text-white">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;