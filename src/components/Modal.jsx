import React from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ isOpen, onClose, onSubmit, formData, onChange }) => {
    if (!isOpen) return null;

    return (
        <div style={ { position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, background: 'rgba(0, 0, 0, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' } }>
            <div style={ { background: 'white', padding: 20, borderRadius: '8px' } }>
                <form onSubmit={ onSubmit }>
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
                    <div>
                        <button type="submit">Submit</button>
                        <button type="button" onClick={ onClose }>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    formData: PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        birthDay: PropTypes.string,
        gender: PropTypes.string,
        isAdmin: PropTypes.bool,
        isFunny: PropTypes.bool,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Modal;