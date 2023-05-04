import React, { useState, useEffect } from 'react';
import JoblyApi from '../api';
import CompanyCard from './CompanyCard';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';


function CompanyList() {
    const [companies, setCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        async function fetchCompanies() {
            try {
                const params = searchTerm ? { name: searchTerm } : {};
                const response = await JoblyApi.getCompanies(params);
                // console.log(response);
                setCompanies(response);
            } catch (error) {
                // Handle error
            }

        }

        fetchCompanies();
    }, [searchTerm]);

    function handleSearch(e) {
        setSearchTerm(e.target.value);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div>
                        <h2>Companies</h2>
                        <input
                            type="text"
                            placeholder="Search companies"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        {companies.length === 0 ? (
                            <div>
                                <h2>No Results</h2>
                            </div>
                        ) : (
                            <ListGroup>
                                {companies.map(company => (
                                    <CompanyCard key={company.handle} company={company} />
                                ))}
                            </ListGroup>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default CompanyList;



