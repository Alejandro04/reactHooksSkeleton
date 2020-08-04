import React, { useEffect, useContext, useState } from "react";
import { Center, Form, H1, WrappLogin, Input, Button } from "./styles";
import AuthGlobal from "../context/store/AuthGlobal";
import { loginUser } from "../context/actions/autenticacion.action";
import Error from "../components/Error";

export default function Login(props) {
    const context = useContext(AuthGlobal);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        if (context.stateUser.isAuthenticated === true) {
            props.history.push("/");
        }
        setShowChild(true);
    }, [context.stateUser.isAuthenticated, props.history]);

    const handleSubmit = e => {
        const user = {
            email,
            password
        };
        if (email === "" || password === "") {
            setError("Ingrese datos correctamente");
        } else {
            loginUser(user, context.dispatch, setError);
        }

        e.preventDefault();
    };

    if (!showChild) {
        return null;
    } else {
        return (
            <Center>
                <Form onSubmit={handleSubmit}>
                    <H1>Login</H1>
                    <WrappLogin>
                        <Input
                            placeholder="Ingrese Usuario"
                            onChange={e => setEmail(e.target.value)}
                            id="email"
                            name="email"
                            value={email}
                            autoComplete="off"
                        />
                        <Input
                            type="password"
                            placeholder="Ingrese Clave"
                            onChange={e => setPassword(e.target.value)}
                            id="password"
                            name="password"
                            value={password}
                        />
                        <br />

                        <Button type="submit">Ingresar</Button>
                        {error ? <Error mensaje={error} /> : null}
                    </WrappLogin>
                </Form>
            </Center>
        );
    }
}
