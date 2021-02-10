import React, { useState } from 'react';

import { Container, Row } from 'react-bootstrap';
import UserTable from './UserTable';
import AddUserForm from './Modal/AddUserForm';
import EditUserForm from './Modal/EditUserForm';


const Features = () => {
    const usersData = [
        { id: 1, name: 'Tania', gender: 'male', birthday: '1991-1-27' },
        { id: 2, name: 'Craig', gender: 'female', birthday: '1994-3-23' },
        { id: 3, name: 'Ben', gender: 'male', birthday: '1993-12-21' },
    ]

    const [users, setUsers] = useState(usersData)
    const [editing, setEditing] = useState(false)
    const initialFormstate = { id: null, name: '', gender: '', birthday: '' }
    const [currentUser, setCurrentUser] = useState(initialFormstate)

    const addUser = (user) => {
        user.id = users.length + 1
        setUsers([...users, user])
    }

    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }

    const editRow = (user) => {
        setEditing(true)
        setCurrentUser({id: user.id, name: user.name, gender: user.gender, birthday: user.birthday})
    }

    const updateUser = (id, updateUser) => {
        setEditing(false)
        setUsers(users.map((user) => (user.id === id ? updateUser : user)))
    }

    return (
        <Container>
            <h1>CRUD App with Hooks</h1>
            <Row>
                {editing ? (
                    <EditUserForm 
                        setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}
                    />
                ) : (
                    <AddUserForm addUser={addUser} />
                )}
                <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
            </Row>
        </Container>
    )
}

export default Features;