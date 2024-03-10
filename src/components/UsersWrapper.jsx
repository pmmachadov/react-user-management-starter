import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Modal } from './Modal';

const UsersWrapper = () => {
    const [users, setUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        birthDay: '',
        gender: '',
        isAdmin: false,
        isFunny: true,
    });

    useEffect(() => {
        fetch('/api/users')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setUsers(data);
            })
            .catch(error => console.error("Error fetching users:", error));
    }, []);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Failed to add user.');
            })
            .then(newUser => {
                setUsers(currentUsers => [...currentUsers, newUser]);
                toast.success('User added successfully!');
                setIsModalOpen(false);
            })
            .catch(error => {
                console.error("Error adding user:", error);
                toast.error(error.toString());
            });
    };

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    return (
        <div>
            <Modal isOpen={ isModalOpen } onClose={ toggleModal } formData={ formData } onChange={ onChange } onSubmit={ handleSubmit } />
            <button type="button" onClick={ toggleModal } className="btn btn-dark">Add User</button>
            <div className="table-responsive">
                <table className="table table-dark table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Birth Day</th>
                            <th>Gender</th>
                            <th>Is Admin</th>
                            <th>Is Funny</th>
                        </tr>
                    </thead>
                    <tbody>
                        { users.map(user => (
                            <tr key={ user.id }>
                                <td>{ user.firstName }</td>
                                <td>{ user.lastName }</td>
                                <td>{ user.birthDay }</td>
                                <td>{ user.gender }</td>
                                <td>{ user.isAdmin ? 'Yes' : 'No' }</td>
                                <td>{ user.isFunny ? 'Yes' : 'No' }</td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UsersWrapper;