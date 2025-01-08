// src/UserProfile.jsx
import React, { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { createAvatar } from '@dicebear/core';
import { openPeeps } from '@dicebear/collection';

const UserProfile = ({ user, onEdit, onDelete }) => {
    const [isFavorited, setIsFavorited] = useState(false);
    
    const avatar = useMemo(() => {
        return createAvatar(openPeeps, {
            seed: user.username,
            size: 128
        }).toDataUri();
    }, [user.username]);

    const handleFavoriteToggle = () => {
        setIsFavorited(!isFavorited);
    };

    return (
        <div className="card shadow my-3 mx-3">
            <NavLink  to={`/usr/${user.id}`}>
                <img src={avatar} className="card-img-top" alt={`${user.name}'s avatar`} />
            </NavLink>
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text"><i className='bi bi-envelope'></i> {user.email}</p>
                <p className="card-text"><i className='bi bi-telephone-fill'></i> {user.phone}</p>
                <p className="card-text"><i className='bi bi-globe'></i> <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">{user.website}</a></p>
            </div>
            <div className='card-footer d-flex justify-content-between align-items-center'>
                <button className='btn fs-4' onClick={handleFavoriteToggle}>
                    <i className={`bi bi-heart${isFavorited ? '-fill' : ''}`} 
                        style={{ color: isFavorited ? 'red' : '' }}></i>
                </button>
                <button className="btn fs-4" onClick={() => onEdit(user)}>
                    <i className="bi bi-pen-fill"></i>
                </button>
                <button className="btn fs-4" onClick={() => onDelete(user.id)}>
                    <i className="bi bi-trash-fill"></i>
                </button>
            </div>
        </div>
    );
};

export default UserProfile;