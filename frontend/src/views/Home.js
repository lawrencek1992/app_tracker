import React from "react";
import { Title } from "../layout/elements/Title";
import { MainMenu } from "../layout/elements/MainMenu";

export const Main = ({
    loggedInUser,
}) => {

    const content = () => {
        return (
            <p>Holy macaroni!</p>
        );
    }

    return (
        <>
            <Title title="Home" />
            <MainMenu content={content()} />
        </>
    );
}
