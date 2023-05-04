import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


function SignupForm({ signup }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        email: '',
    });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        signup(formData);
        navigate('/');
    }


    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="username" className="mb-2">
                            <Form.Label>Username:</Form.Label>
                            <Form.Control
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="password" className="mb-2">
                            <Form.Label>Password:</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="firstName" className="mb-2">
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="lastName" className="mb-2">
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="email" className="mb-2">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Button type="submit">Sign Up</Button>
                    </Form>
                </Col>
            </Row>
        </Container >
    );
}

export default SignupForm;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';



// function SignupForm({ signup }) {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         username: '',
//         password: '',
//         firstName: '',
//         lastName: '',
//         email: '',
//     });

//     function handleChange(e) {
//         const { name, value } = e.target;
//         setFormData(data => ({ ...data, [name]: value }));
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         signup(formData);
//         navigate('/');
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="username">Username:</label>
//             <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//             />
//             <label htmlFor="password">Password:</label>
//             <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//             />
//             <label htmlFor="firstName">First Name:</label>
//             <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//             />
//             <label htmlFor="lastName">Last Name:</label>
//             <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//             />
//             <label htmlFor="email">Email:</label>
//             <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//             />
//             <button type="submit">Sign Up</button>
//         </form>
//     );
// }

// export default SignupForm;



