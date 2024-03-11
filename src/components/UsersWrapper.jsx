import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify'; // Importing the toast function from react-toastify for user notifications.
import { Modal } from './Modal'; // Importing a custom Modal component from a local file.

const UsersWrapper = () => {
    // useState is used to manage the state in functional components.
    const [users, setUsers] = useState([]); // Holds the list of users fetched from the API.
    const [isModalOpen, setIsModalOpen] = useState(false); // Controls the visibility of the modal.
    const [formData, setFormData] = useState({ // Initializes the form data with default values.
        firstName: '',
        lastName: '',
        birthDay: '',
        gender: '',
        isAdmin: false,
        isFunny: true,
    });

    // useEffect hook is used to perform side effects in the component.
    useEffect(() => {
        // Fetches users from the API when the component mounts.
        fetch('/api/users')
            .then(response => response.json()) // Parses the JSON response.
            .then(data => {
                console.log(data); // Logs the fetched data for debugging.
                setUsers(data); // Updates the state with the fetched users.
            })
            .catch(error => console.error("Error fetching users:", error)); // Handles any errors that occur during the fetch operation.
    }, []); // The empty dependency array means this effect runs once after the initial render.

    const toggleModal = () => setIsModalOpen(!isModalOpen); // Toggles the modal's visibility.

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior.
        fetch('/api/users', {
            method: 'POST', // Specifies the HTTP method for the request.
            headers: {
                'Content-Type': 'application/json', // Sets the content type of the request body to JSON.
            },
            body: JSON.stringify(formData), // Converts the formData object to a JSON string.
        })
            .then(response => {
                if (response.ok) {
                    return response.json(); // Parses the JSON response if the request was successful.
                }
                throw new Error('Failed to add user.'); // Throws an error if the request was not successful.
            })
            .then(newUser => {
                setUsers(currentUsers => [...currentUsers, newUser]); // Adds the new user to the current list of users.
                toast.success('User added successfully!'); // Displays a success notification to the user.
                setIsModalOpen(false); // Closes the modal.
            })
            .catch(error => {
                console.error("Error adding user:", error); // Logs any errors that occur during the request.
                toast.error(error.toString()); // Displays an error notification to the user.
            });
    };

    const onChange = (e) => {
        const { name, value, type, checked } = e.target; // Destructures the name, value, type, and checked properties from the event target.
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value, // Updates the formData state with the new value. Uses checked for checkboxes, otherwise uses value.
        }));
    };

    return (
        <div>
            <Modal isOpen={ isModalOpen } onClose={ toggleModal } formData={ formData } onChange={ onChange } onSubmit={ handleSubmit } />
            {/* The Modal component is passed props to control its visibility and handle form changes and submission. */ }
            <button type="button" onClick={ toggleModal } className="btn btn-dark">Add User</button>
            {/* A button to toggle the modal's visibility. */ }
            <div className="table-responsive">
                <table className="table table-dark table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            {/* Table headers */ }
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
                            <tr key={ user.id }> {/* Maps each user to a table row. */ }
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

export default UsersWrapper; // Exports the UsersWrapper component for use in other parts of the application.
