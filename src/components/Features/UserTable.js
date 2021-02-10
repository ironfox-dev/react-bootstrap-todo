import React from 'react';

import { Table, Container, Row } from 'react-bootstrap';

const Price = (props) => {
    return (
        <Container>
            <Row>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>N<ins>o</ins></th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Birthday</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.length > 0 ? (
                        props.users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.gender}</td>
                                <td>{user.birthday}</td>
                                <td 
                                    onClick={() => {props.editRow(user)}}
                                >Edit</td>
                                <td onClick={() => props.deleteUser(user.id)}>Delete</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6}>There is no data. Please enter data.</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            </Row>
        </Container>
    )
}

export default Price;