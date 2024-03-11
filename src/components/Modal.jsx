import React from 'react';
import PropTypes from 'prop-types'; // Importing PropTypes for prop type validation.

export const Modal = ({ isOpen, onClose, onSubmit, formData, onChange }) => {
    if (!isOpen) return null; // If the modal is not open, return null to render nothing.

    // Inline styles for the modal and its backdrop.
    return (
        <div style={ { position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, background: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
            <div style={ { background: 'white', padding: 20, borderRadius: '8px' } }>
                {/* The form for user input. On submission, it calls the onSubmit prop function. */ }
                <form onSubmit={ onSubmit }>
                    {/* Input fields for first name, last name, birth day, and a select for gender, each with a corresponding value from formData and an onChange event to update the state. */ }
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={ formData.firstName }
                        onChange={ onChange }
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={ formData.lastName }
                        onChange={ onChange }
                        required
                    />
                    <input
                        type="date"
                        name="birthDay"
                        placeholder="Birth Day"
                        value={ formData.birthDay }
                        onChange={ onChange }
                        required
                    />
                    <select name="gender" value={ formData.gender } onChange={ onChange } required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non-binary</option>
                    </select>
                    {/* Checkboxes for isAdmin and isFunny, showing checked state based on formData. */ }
                    <label>
                        Is Admin:
                        <input
                            type="checkbox"
                            name="isAdmin"
                            checked={ formData.isAdmin }
                            onChange={ onChange }
                        />
                    </label>
                    <label>
                        Is Funny:
                        <input
                            type="checkbox"
                            name="isFunny"
                            checked={ formData.isFunny }
                            onChange={ onChange }
                        />
                    </label>
                    {/* Submit and Close buttons. */ }
                    <div>
                        <button type="submit">Submit</button>
                        <button type="button" onClick={ onClose }>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// PropType validation for the Modal component.
Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired, // Boolean indicating if the modal is open.
    onClose: PropTypes.func.isRequired, // Function to call when closing the modal.
    onSubmit: PropTypes.func.isRequired, // Function to call when submitting the form.
    formData: PropTypes.shape({ // Shape of the formData object with types for each field.
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        birthDay: PropTypes.string,
        gender: PropTypes.string,
        isAdmin: PropTypes.bool,
        isFunny: PropTypes.bool,
    }).isRequired,
    onChange: PropTypes.func.isRequired, // Function to call when form inputs change.
};

export default Modal; // Exports the Modal component.
