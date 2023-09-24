
import { LiaMapMarkerAltSolid, LiaDollarSignSolid } from "react-icons/lia";


const AppliedJob = ({ job }) => {
    const { job_title, logo, remote_or_onsite, job_type,location,salary } = job;
    return (
        <div className="border rounded grid grid-cols-5 gap-8 p-4 my-2">
            <div className="flex items-center bg-[#F4F4F4] p-4 rounded">
                <img src={logo} alt="" />
            </div>
            <div className="flex justify-between col-span-4 items-center">
                <div>
                    <h2>{job_title}</h2>
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
                </div>
                <div>
                    <button className="py-1 px-2 bg-blue-800 text-white rounded mt-2">View Details</button>

                </div>
            </div>
        </div>
    );
};

export default AppliedJob;