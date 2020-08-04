import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import {
    Navbar,
    DivNavbar,
    Wrapper,
    NavLinks,
    Alinks,
    Button,
    EndWrapper,
    EndNav
} from "./Header-styles";
import AuthGlobal from "../context/store/AuthGlobal";
import { logoutUser } from "../context/actions/autenticacion.action";

export default function Header() {
    const context = useContext(AuthGlobal);

    console.log(context)

    let name = ""
    let email = ""

    if(context.stateUser.user !== undefined){
        name = context.stateUser.user.name
        email = context.stateUser.user.email
    }
   
    const logout = () => {
        logoutUser(context.dispatch);
    };

    return (
        <Navbar>
            <DivNavbar>
                <Wrapper>
                    <NavLinks>
                    <Link style={{color: "#fff", marginRight: "20px"}} to={"/home"}>Users</Link>
                    <Link style={{color: "#fff", marginRight: "20px"}} to={"/clients"}>Clients</Link>
                        {context.stateUser.isAuthenticated === true ? (
                            <>
                                <Alinks>
                                    {name}
                                </Alinks>
                                <Alinks>
                                    {email}
                                </Alinks>
                            </>
                        ) : null}
                    </NavLinks>
                </Wrapper>
                <EndWrapper>
                    <EndNav>
                        <Button onClick={logout}>Logout</Button>
                    </EndNav>
                </EndWrapper>
            </DivNavbar>
        </Navbar>
    );
}
