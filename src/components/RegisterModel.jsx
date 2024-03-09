/* eslint-disable react/prop-types */

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const defaultValue = {
  firstName: "",
  lastName: "",
  gender: "",
  isAdmin: false,
  isFunny: false,
};
function RegisterModel({ isOpen = false, onClose }) {
  const [data, setData] = useState(defaultValue);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  const handleChangeCheckBox = ({ target }) => {
    const { name, checked } = target;
    setData({ ...data, [name]: checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const PostUser = async () => {
      const response = await fetch("api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const myData = await response.json();
      console.log(myData);
      onClose();
    };
    PostUser();
  };
  const clearForm = () => {
    setData({ ...defaultValue });
  };
  return (
    <>
      <Modal show={isOpen} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              required
              value={data.firstName}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              required
              value={data.lastName}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="gender">Gender</label>
            <input
              type="text"
              name="gender"
              required
              value={data.gender}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="isAdmin">isAdmin</label>
            <input
              type="checkbox"
              name="isAdmin"
              checked={data.isAdmin}
              onChange={handleChangeCheckBox}
            />
            <br />
            <label htmlFor="isFunny">isFunny</label>
            <input
              type="checkbox"
              name="isFunny"
              checked={data.isFunny}
              onChange={handleChangeCheckBox}
            />
            <Modal.Footer>
              <Button variant="secondary" onClick={clearForm}>
                Clear
              </Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default RegisterModel;
