import React, { useState } from 'react';

import { Button, Modal, Form,  } from "react-bootstrap";

const EditUserForm = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [user, setUser] = useState(props.currentUser)
    const [editing, setEditing] = useState(false)

    const handleInputChange = (e) => {
        const {name, value} = e.target

        setUser({...user, [name] : value})
    }

    return (
        <>
            <Button action variant="dark" className="ml-auto" onClick={handleShow}>
               N<ins>o</ins> {user.id} Edit
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>N<ins>o</ins>{user.id} Edit</Modal.Title>
                </Modal.Header>
                <Form
                    onSubmit={event => {
                        event.preventDefault()
                        props.updateUser(user.id, user)
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
                            Edit
                            </Button>
                        <Button variant="secondary" onClick={() => setEditing(false), handleClose}>
                            Close
                            </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}

export default EditUserForm;