import React from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ isOpen, onClose, onSubmit, formData, onChange }) => {
    if (!isOpen) return null; // If the modal is not open, don't render anything

    return (
        <div className="modal show d-block" style={ { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">

                    <form onSubmit={ onSubmit }>

                        <div className="modal-header">
                            <h5 className="modal-title">Fill the form</h5>
                            <button type="button" className="close" aria-label="Close" onClick={ onClose }>
                                <span aria-hidden="true">&times;</span> // aria-hidden is used to hide the close button from screen readers
                            </button>
                        </div>

                        <div className="modal-body">
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="firstName"
                                    placeholder="First Name"
                                    value={ formData.firstName }
                                    onChange={ onChange }
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={ formData.lastName }
                                    onChange={ onChange }
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="date"
                                    className="form-control"
                                    name="birthDay"
                                    placeholder="Birth Day"
                                    value={ formData.birthDay }
                                    onChange={ onChange }
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <select className="form-select" name="gender" value={ formData.gender } onChange={ onChange } required>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="non-binary">Non-binary</option>
                                </select>
                            </div>
                            <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="isAdmin"
                                    checked={ formData.isAdmin }
                                    onChange={ onChange }
                                    id="isAdminCheckbox"
                                />
                                <label className="form-check-label" htmlFor="isAdminCheckbox">
                                    Admin
                                </label>
                            </div>
                            <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    name="isFunny"
                                    checked={ formData.isFunny }
                                    onChange={ onChange }
                                    id="isFunnyCheckbox"
                                />
                                <label className="form-check-label" htmlFor="isFunnyCheckbox">
                                    Is Funny
                                </label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <button type="button" className="btn btn-secondary" onClick={ onClose }>Close</button>
                        </div>
                    </form>
                </div>
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
