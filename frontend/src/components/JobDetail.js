import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../App';
import JoblyApi from '../api';
import JobCard from './JobCard';

// update this to display card

function JobDetail() {
    const [job, setJob] = useState(null);
    const { id } = useParams();
    const { currentUser, applyForJob } = useContext(UserContext);

    useEffect(() => {
        async function fetchJob() {
            const fetchedJob = await JoblyApi.getJob(id);
            setJob(fetchedJob);
        }

        fetchJob();
    }, [id]);

    if (!job) return <div>Loading...</div>;

    return (
        <div>

            <JobCard key={job.id} job={job} />

            {/* <h2>{job.title}</h2>
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity}</p>
            <button onClick={() => applyForJob(job.id)} disabled={isApplied}>
                {isApplied ? 'Applied' : 'Apply'}
            </button> */}
        </div>
    );
}

export default JobDetail;


// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import CompanyCard from './CompanyCard';
// import JoblyApi from '../api';

// function JobDetail() {
//     const [job, setJob] = useState(null);
//     const { id } = useParams();

//     useEffect(() => {
//         async function fetchJob() {
//             const fetchedJob = await JoblyApi.getJob(id);
//             console.log(fetchedJob)
//             setJob(fetchedJob);
//         }

//         fetchJob();
//     }, [id]);

//     if (!job) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h2>{job.title}</h2>
//             {/* <p>Company: {job.company.name}</p> */}
//             <h3>Company Details:</h3>
//             <CompanyCard key={job.company.handle} company={job.company} />
//             <p>Salary: {job.salary}</p>
//             <p>Equity: {job.equity}</p>
//             {/* Add apply button later */}
//         </div>
//     );
// }

// export default JobDetail;



// import CompanyCard from './CompanyCard';
// companies.map(company => (
//     <CompanyCard key={company.handle} company={company} />
// ))

