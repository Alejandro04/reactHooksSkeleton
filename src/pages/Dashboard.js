import React, { useContext, useState, useEffect } from "react";
import Header from "../components/Header";
import AuthGlobal from "../context/store/AuthGlobal";
import {Table,Tbody,Thead,Td,Th} from './styles'

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
                <Header />
                {users?
                <Table>
                    <Thead><tr><Th>Nombre</Th><Th>Correo</Th></tr></Thead>
                <Tbody>{users.map((user,index)=>{
                    return(
                <tr key={index}><Td>{user.name}</Td><Td>{user.email}</Td></tr>
                    )
                })}</Tbody>
                </Table>:null}
            </div>
        );
    }
}
