import { LiaMapMarkerAltSolid, LiaDollarSignSolid } from "react-icons/lia";
import { Link } from "react-router-dom";


const Job = ({ job }) => {
    const { id, job_title, job_type, logo, company_name, remote_or_onsite, salary, location } = job;
    return (
        <div className="border rounded p-4">
            <div>
                <img className="w-[8rem]" src={logo} alt="" />
            </div>
            <div>
                <h4 className="font-bold text-2xl">{job_title}</h4>
                <p className="text-xl color-[#757575]">{company_name}</p>
                <div className="flex gap-4">
                    <p><span className="font-color text-[14px] font-bold border border-blue-800 text-blue-800 p-1 px-2 my-2 inline-block rounded">{remote_or_onsite}</span></p>
                    <p><span className="font-color text-[14px] font-bold border border-blue-800 text-blue-800 p-1 px-2 my-2 inline-block rounded">{job_type}</span></p>
                </div>
                <div className="flex gap-6">
                    <div className="flex items-center gap-2">
                        <LiaMapMarkerAltSolid />
                        <p>{location}</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <LiaDollarSignSolid />
                        <p>{salary}</p>
                    </div>
                </div>
                <Link to={`/job/${id}`}>
                    <button className="py-1 px-2 bg-blue-800 text-white rounded mt-2">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Job; 