import React from 'react';

import { Table, Container, Row } from 'react-bootstrap';

const Price = () => {
    return (
        <Container>
            <h1>Pricing Table</h1>
            <Row>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Birthday</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>sdfsdf</td>
                        <td>sdfsdf</td>
                        <td>sdfsdf</td>
                        <td>sdfsdf</td>
                        <td>sdfsdf</td>
                        <td>sdfsdf</td>
                    </tr>
                </tbody>
            </Table>
            </Row>
        </Container>
    )
}

export default Price;