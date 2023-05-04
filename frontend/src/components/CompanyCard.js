import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

function CompanyCard({ company }) {
    return (
        <Card className="CompanyCard mb-3">
            <Card.Body>
                <Card.Title>
                    <Link to={`/companies/${company.handle}`}>{company.name}</Link>
                </Card.Title>
                <Card.Text>{company.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CompanyCard;
