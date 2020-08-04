import React, { useContext } from "react";
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
    const logout = () => {
        logoutUser(context.dispatch);
    };

    return (
        <Navbar>
            <DivNavbar>
                <Wrapper>
                    <NavLinks>
                        {context.stateUser.isAuthenticated === true ? (
                            <>
                                <Alinks>
                                    {context.stateUser.user.name}
                                </Alinks>
                                <Alinks>
                                    {context.stateUser.user.email}
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
