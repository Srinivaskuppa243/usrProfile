// src/EditUser Modal.jsx
import React, { useState } from 'react';

const EditUsr = ({ user, onSave, onCancel }) => {
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [website, setWebsite] = useState(user.website);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser  = {
            ...user,
            name,
            email,
            phone,
            website,
        };
        onSave(updatedUser );
    };

    return (
        <div className="modal show" style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Edit User</h5>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Name:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input
                                type='text'
                                className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    />
                            </div>
                            <div className="form-group">
                                <label>Phone:</label>
                                <input
                                type='text'
                                className="form-control"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    required
                                    />
                            </div>
                            <div className="form-group">
                                <label>Website:</label>
                                <input
                                type='text'
                                className="form-control"
                                    value={website}
                                    onChange={(e) => setWebsite(e.target.value)}
                                    required
                                    />
                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Save</button>
                                <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
         )}
export default EditUsr;