import React, { useContext, useState, useEffect } from "react";
import Header from "../components/Header";
import {
    Table
} from 'react-bootstrap';
import AuthGlobal from "../context/store/AuthGlobal";

export default function Dashboard(props) {
    const context = useContext(AuthGlobal);
    const [showChild, setShowChild] = useState(false);
    const [users, setUsers] = useState([])

    useEffect(() => {
        if (
            context.stateUser.isAuthenticated === false ||
            context.stateUser.isAuthenticated === null
        ) {
            props.history.push("/login");
        }
        setShowChild(true);

        const jwt = localStorage.getItem("jwt");
        if (jwt) {
            fetch("http://localhost:4000/api/users", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    'x-auth-token': jwt
                }
            })
                .then(res => res.json())
                .then(data => {
                    setUsers(data)
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [context.stateUser.isAuthenticated, props.history]);

    if (!showChild) {
        return null;
    } else {
        return (
            <div>
                <Header/>
                <Table style={{position: "absolute", top: "80px"}} striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users ? users.map((user, index) => {
                            return (
                                <tr key={index}>
                                    <td> {user.name} </td>
                                    <td> {user.email} </td>
                                </tr>
                            )
                        }) : null}
                    </tbody>
                </Table>
            </div>
        );
    }
}
