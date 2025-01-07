// src/UsrDet.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UsrDet = ({ users }) => {
    const { id } = useParams(); // Get the employee ID from the URL parameters
    const navigate = useNavigate();

    // Find the user based on the ID
    const user = users.find(user => user.id === parseInt(id));

    const handleBack = () => {
        navigate(-1); // Go back to the previous page
    };

    if (!user) {
        return <div>User not found</div>; // Handle case where user is not found
    }

    return (
        <div className="container mt-4">
            <h2>{user.name}</h2>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
            <h4>Address</h4>
            <p>
                {user.address.suite}, {user.address.street}, {user.address.city}, {user.address.zipcode}
            </p>
            <h4>Company</h4>
            <p><strong>Name:</strong> {user.company.name}</p>
            <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
            <p><strong>Business:</strong> {user.company.bs}</p>
            <button className="btn btn-secondary" onClick={handleBack}>Back</button>
        </div>
    );
};

export default UsrDet;