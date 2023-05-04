import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import JobCard from './JobCard';
import JoblyApi from '../api';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';

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
        <Container>
            <Row>
                <Col>
                    <h2>{company.name}</h2>
                    <p>{company.description}</p>
                    <h3>Jobs</h3>
                    <ListGroup>
                        {company.jobs.map(job => (
                            <ListGroup.Item key={job.id}>
                                <JobCard job={job} />
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    );
}

export default CompanyDetail;
