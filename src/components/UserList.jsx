// src/UserList.jsx
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import UserProfile from './UserProfile';
import Loading from './Loading';
import EditUsr from './EditUsr';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editUsr, setEditUsr] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setUsers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
                setLoading(false);
            });
    }, []);

    const handleEdit = (user) => {
        setEditUsr(user); // Set the user to be edited
    };

    const handleDelete = (userId) => {
        setUsers(users.filter(user => user.id !== userId)); // Remove the user from the state
    };

    const handleSave = (updatedUser ) => {
        setUsers(users.map(user => (user.id === updatedUser .id ? updatedUser  : user))); // Update the user in the state
        setEditUsr(null); // Clear the editing user
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="container mt-4">
            <div className="row">
                {users.map(user => (
                    <div className="col-md-3" key={user.id}>
                         <UserProfile
                            user={user}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                        />
                    </div>
                ))}
            </div>
            {editUsr && (
                <EditUsr
                    user={editUsr}
                    onSave={handleSave}
                    onCancel={() => setEditUsr(null)}
                />
            )}
        </div>
    );
};

export default UserList;