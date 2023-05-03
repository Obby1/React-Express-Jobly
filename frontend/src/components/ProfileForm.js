import React, { useState, useContext } from 'react';
import { UserContext } from '../App';
import JoblyApi from '../api';

function ProfileForm() {
    const { currentUser, updateCurrentUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: currentUser.firstName || '',
        lastName: currentUser.lastName || '',
        email: currentUser.email || '',
    });

    async function handleSubmit(evt) {
        evt.preventDefault();
        const updatedUser = await JoblyApi.updateUser(currentUser.username, formData);
        updateCurrentUser(updatedUser);
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(data => ({ ...data, [name]: value }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name:</label>
            <input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />
            <label htmlFor="lastName">Last Name:</label>
            <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />
            <label htmlFor="email">Email:</label>
            <input
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <button>Save Changes</button>
        </form>
    );
}

export default ProfileForm;
