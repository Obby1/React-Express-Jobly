import React, { useState, useEffect } from 'react';
import JoblyApi from '../api';
import JobCard from './JobCard';
import '../css/JobList.css'
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

function JobList() {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchJobs() {
            const searchFilters = searchTerm ? { title: searchTerm } : {};
            const fetchedJobs = await JoblyApi.getJobs(searchFilters);
            setJobs(fetchedJobs);
        }

        fetchJobs();
    }, [searchTerm]);

    function handleSearch(e) {
        setSearchTerm(e.target.value);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <h2>Jobs</h2>
                        <input
                            type="text"
                            placeholder="Search jobs"
                            value={searchTerm}
                            onChange={handleSearch}
                            className="search-input"
                        />
                        {
                            jobs.length === 0 ? (
                                <div>
                                    <h2>No Results</h2>
                                </div>
                            ) : (
                                <ListGroup>
                                    {jobs.map(job => (
                                        <JobCard key={job.id} job={job} />
                                    ))}
                                </ListGroup>
                            )
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default JobList;