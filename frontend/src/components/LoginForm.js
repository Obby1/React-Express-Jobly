import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';



function LoginForm({ login }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: '', password: '' });

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(data => ({ ...data, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        login(formData);
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
                        <Button type="submit">Log In</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';



// function LoginForm({ login }) {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({ username: '', password: '' });

//     function handleChange(e) {
//         const { name, value } = e.target;
//         setFormData(data => ({ ...data, [name]: value }));
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         login(formData);
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
//             <button type="submit">Log In</button>
//         </form>
//     );
// }

// export default LoginForm;
