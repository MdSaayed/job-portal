const getAppliedJob = () => {
    const appliedJobs = localStorage.getItem('applied-jobs');
    if (appliedJobs) {
        return JSON.parse(appliedJobs);
    }
    return [];
}


// save on local storage
const saveAppliedJobs = (id) => {
    const appliedJobs = getAppliedJob();
    console.log(appliedJobs);
    const isExist = appliedJobs.find((jobId) => jobId == id);
    if (!isExist) {
        appliedJobs.push(id);
        console.log(id);
        localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs));
        alert('Apply sucessful.');
    } else {
        alert('Already applied this job.');
    }
}
export { getAppliedJob, saveAppliedJobs }
