import React, { useContext, useState } from "react";
import { Center, Form, H1, WrappLogin, Input, Button } from "./styles";
import AuthGlobal from "../context/store/AuthGlobal";
import { clientRegister } from "../context/actions/client.action";
import Error from "../components/Error";
import Success from "../components/Success";

export default function ClientRegister(props) {
    const context = useContext(AuthGlobal);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleSubmit = e => {
        const user = {
            name,
            description
        };

        if (name === "" || description === "") {
            setError("Ingrese todos los datos");
        } else {
            clientRegister(user, context.dispatch, setError, setSuccess);
        }

        e.preventDefault();
    };

    return (
        <Center>
            <Form onSubmit={handleSubmit}>
                <H1>Registro de clientes</H1>
                <WrappLogin>
                    <Input
                        placeholder="Nombre"
                        onChange={e => setName(e.target.value)}
                        id="name"
                        name="name"
                        value={name}
                        autoComplete="off"
                    />
                    <Input
                        placeholder="Descripción"
                        onChange={e => setDescription(e.target.value)}
                        id="description"
                        name="description"
                        value={description}
                        autoComplete="off"
                    />
                    <br />

                    <Button type="submit">Register</Button>
                    {error ? <Error mensaje={error} /> : null}
                    {success ? <Success mensaje={success} /> : null}
                </WrappLogin>
            </Form>
        </Center>
    );
}
