import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import JoblyApi from '../api';
import { Card, Button } from 'react-bootstrap';

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
        <Card className="JobCard mb-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
            <Card.Body>
                <Card.Title>
                    <Link to={`/jobs/${job.id}`}>{job.title}</Link>
                </Card.Title>
                <Card.Text>Salary: {job.salary}</Card.Text>
                <Card.Text>Equity: {job.equity}</Card.Text>
                {isApplied ? (
                    <Button variant="danger" onClick={handleUnapply}>
                        Un-apply
                    </Button>
                ) : (
                    <Button variant="primary" onClick={handleApply}>
                        Apply
                    </Button>
                )}
            </Card.Body>
        </Card>
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



