import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JobCard from './JobCard';
import JoblyApi from '../api';

function CompanyDetail() {
    const [company, setCompany] = useState(null);
    const { handle } = useParams();

    useEffect(() => {
        async function fetchCompany() {
            const fetchedCompany = await JoblyApi.getCompany(handle);
            setCompany(fetchedCompany);
        }

        fetchCompany();
    }, [handle]);

    if (!company) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{company.name}</h2>
            <p>{company.description}</p>
            <h3>Jobs</h3>
            <ul>
                {company.jobs.map(job => (
                    // <li key={job.id}>{job.title}</li>
                    <JobCard key={job.id} job={job} />
                ))}
            </ul>
        </div>
    );
}

export default CompanyDetail;
