import React, { useState } from 'react';

import { Modal, Button, Form } from 'react-bootstrap'

const AddUserForm = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const initialFormstate = { id: null, name: '', gender: '', birthday: '' }
    const [user, setUser] = useState(initialFormstate)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    return (
        <>
            <Button action variant="dark" className="ml-auto" onClick={handleShow}>
                Add User
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Form
                    onSubmit={event => {
                        event.preventDefault()
                        if (!user.name || !user.gender || !user.birthday) return
                            props.addUser(user)
                            setUser(initialFormstate)
                    }}
                >
                    <Modal.Body>
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name:</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" name="name" value={user.name} onChange={handleInputChange} />
                            <Form.Text className="text-muted">
                                We'll never share your name with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicGender">
                            <Form.Label>Gender:</Form.Label>
                            <Form.Control type="text" placeholder="Ener gender" name="gender" value={user.gender} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="fomBas">
                            <Form.Check type="date" placeholder="Ener bithday" name='birthday' vlaue={user.birthday} onChange={handleInputChange} />
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" onClick={handleClose}>
                            Submit
                            </Button>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                            </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default AddUserForm;