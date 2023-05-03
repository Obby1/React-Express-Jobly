import React, { useState, useContext, useEffect, useCallback } from 'react';
import { UserContext } from '../App';
import JoblyApi from '../api';
import JobCard from './JobCard';

function ProfileForm() {
    const { currentUser, updateCurrentUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: currentUser.firstName || '',
        lastName: currentUser.lastName || '',
        email: currentUser.email || '',
    });
    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect(() => {
        async function fetchAppliedJobs() {
            const jobIds = await JoblyApi.getAppliedJobs(currentUser.username);
            const jobPromises = jobIds.map(jobId => JoblyApi.getJob(jobId));
            const fetchedJobs = await Promise.all(jobPromises);
            setAppliedJobs(fetchedJobs);
        }

        fetchAppliedJobs();
    }, [currentUser])

    // const fetchAppliedJobs = useCallback(async () => {
    //     const jobs = await JoblyApi.getAppliedJobs(currentUser.username);
    //     console.log(jobs);
    //     console.log('jobs:', jobs);
    //     setAppliedJobs(jobs);
    // }, [currentUser.username]);

    // useEffect(() => {
    //     fetchAppliedJobs();
    // }, [fetchAppliedJobs]);

    // async function handleUnapply(jobId) {
    //     await JoblyApi.unapplyToJob(currentUser.username, jobId);
    //     fetchAppliedJobs();
    // }

    async function handleSubmit(evt) {
        evt.preventDefault();
        const updatedUser = await JoblyApi.updateUser(currentUser.username, formData);
        updateCurrentUser(updatedUser);
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(data => ({ ...data, [name]: value }));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <label htmlFor="lastName">Last Name:</label>
                <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <button>Save Changes</button>
            </form>
            <div>
                <div>
                    <h2>Applied Jobs</h2>
                    {appliedJobs.length === 0 ? (
                        <div>
                            <h2>No Results</h2>
                        </div>
                    ) : (
                        appliedJobs.map(job => <JobCard key={job.id} job={job} />)
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProfileForm;

// handle unapply we need to map in or do the button in the job card component instead
// {appliedJobs.map(job => (
//     <div key={job.id} className="job-card">
//         <h3>{job.title}</h3>
//         <p>Company: {job.companyName}</p>
//         <p>Salary: {job.salary}</p>
//         <p>Equity: {job.equity}</p>
//         <button onClick={() => handleUnapply(job.id)}>Un-apply</button>
//     </div>
// ))}



// import React, { useState, useContext } from 'react';
// import { UserContext } from '../App';
// import JoblyApi from '../api';

// function ProfileForm() {
//     const { currentUser, updateCurrentUser } = useContext(UserContext);
//     const [formData, setFormData] = useState({
//         firstName: currentUser.firstName || '',
//         lastName: currentUser.lastName || '',
//         email: currentUser.email || '',
//     });

//     async function handleSubmit(evt) {
//         evt.preventDefault();
//         const updatedUser = await JoblyApi.updateUser(currentUser.username, formData);
//         updateCurrentUser(updatedUser);
//     }

//     function handleChange(evt) {
//         const { name, value } = evt.target;
//         setFormData(data => ({ ...data, [name]: value }));
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="firstName">First Name:</label>
//             <input
//                 id="firstName"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//             />
//             <label htmlFor="lastName">Last Name:</label>
//             <input
//                 id="lastName"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//             />
//             <label htmlFor="email">Email:</label>
//             <input
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//             />
//             <button>Save Changes</button>
//         </form>
//     );
// }

// export default ProfileForm;
