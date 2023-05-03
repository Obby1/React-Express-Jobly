import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import JoblyApi from '../api';

// 5.3.23 save spot:
// unapply only shows on hard refresh
// server error on un apply ()
// manually test API with Insomnia to delete job apps. 
// check code 

function JobCard({ job }) {
    const { currentUser, updateCurrentUser } = useContext(UserContext);

    async function handleApply() {
        if (currentUser) {
            await JoblyApi.applyToJob(currentUser.username, job.id);
            updateCurrentUser({
                ...currentUser,
                applications: [...currentUser.applications, job.id],
            });
            alert('Applied successfully!');
        } else {
            alert('Please log in to apply for a job.');
        }
    }

    async function handleUnapply() {
        if (currentUser) {
            await JoblyApi.unapplyToJob(currentUser.username, job.id);
            updateCurrentUser({
                ...currentUser,
                applications: currentUser.applications.filter((jobId) => jobId !== job.id),
            });
            alert('Un-applied successfully!');
        } else {
            alert('Please log in to un-apply for a job.');
        }
    }

    const isApplied = currentUser?.applications?.includes(job.id);

    // const isApplied = currentUser?.jobs?.some((appliedJob) => appliedJob.id === job.id);

    return (
        <div className="JobCard">
            <h4>
                <Link to={`/jobs/${job.id}`}>{job.title}</Link>
            </h4>
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity}</p>
            {isApplied ? (
                <button onClick={handleUnapply}>Un-apply</button>
            ) : (
                <button onClick={handleApply}>Apply</button>
            )}
        </div>
    );
}

export default JobCard;


// async function handleApply() {
//     if (currentUser) {
//         await JoblyApi.applyToJob(currentUser.username, job.id);
//         alert('Applied successfully!');
//     } else {
//         alert('Please log in to apply for a job.');
//     }
// }

// async function handleUnapply() {
//     if (currentUser) {
//         await JoblyApi.unapplyToJob(currentUser.username, job.id);
//         updateCurrentUser({
//             ...currentUser,
//             jobs: currentUser.jobs.filter((appliedJob) => appliedJob.id !== job.id),
//         });
//         alert('Un-applied successfully!');
//     } else {
//         alert('Please log in to un-apply for a job.');
//     }
// }


// import React from 'react';
// import { Link } from 'react-router-dom';

// function JobCard({ job }) {
//     return (
//         <div className="JobCard">
//             <h4>
//                 <Link to={`/jobs/${job.id}`}>{job.title}</Link>
//             </h4>
//             <p>Salary: {job.salary}</p>
//             <p>Equity: {job.equity}</p>
//             {/* Add apply button later */}
//         </div>
//     );
// }

// export default JobCard;



