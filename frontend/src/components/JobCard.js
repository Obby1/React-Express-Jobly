import React from 'react';
import { Link } from 'react-router-dom';

function JobCard({ job }) {
    return (
        <div className="JobCard">
            <h4>
                <Link to={`/jobs/${job.id}`}>{job.title}</Link>
            </h4>
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity}</p>
            {/* Add apply button later */}
        </div>
    );
}

export default JobCard;



