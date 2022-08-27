import React from "react";
import { Title } from "../layout/elements/Title";
import { MainMenu } from "../layout/elements/MainMenu";

export const Login = () => {

    const loginContent = () => {
        return (
            <>
                
            </>
        );
    }

    return (
        <>
            <Title title="Login" />
            <MainMenu content={loginContent()} />
        </>
    );
}
