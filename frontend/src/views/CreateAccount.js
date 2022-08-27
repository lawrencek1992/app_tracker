import React from "react";
import { Title } from "../layout/elements/Title";
import { MainMenu } from "../layout/elements/MainMenu";

export const CreateAccount = () => {

    const createAccountContent = () => {
        return (
            <></>
        );
    }

    return (
        <>
            <Title title="Create Account" />
            <MainMenu content={createAccountContent()} />
        </>
    );
}
