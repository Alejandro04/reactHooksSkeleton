import React, { useContext, useState, useEffect } from "react";
import Header from "../components/Header";
import AuthGlobal from "../context/store/AuthGlobal";
import {
    Table
} from 'react-bootstrap';

export default function Client(props) {
    const context = useContext(AuthGlobal);
    const [showChild, setShowChild] = useState(false);
    const [clients, setClients] = useState([])

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
            fetch("http://localhost:4000/api/clients", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    'x-auth-token': jwt
                }
            })
                .then(res => res.json())
                .then(data => {
                    setClients(data)
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
                        <th>Descripción</th>
                    </tr>
                </thead>
                <tbody>
                    {clients ? clients.map((client, index) => {
                        return (
                            <tr key={index}>
                                <td> {client.name} </td>
                                <td> {client.description} </td>
                            </tr>
                        )
                    }) : null}
                </tbody>
            </Table>
        </div>
        );
    }
}
