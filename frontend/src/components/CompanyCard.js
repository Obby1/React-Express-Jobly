import React from 'react';
import { Link } from 'react-router-dom';

function CompanyCard({ company }) {
    return (
        <div>
            <h3>
                <Link to={`/companies/${company.handle}`}>{company.name}</Link>
            </h3>
            {/* <p>Company Description:</p> */}
            <p>{company.description}</p>
        </div>
    );
}

export default CompanyCard;
