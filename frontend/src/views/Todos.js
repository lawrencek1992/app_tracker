import React from "react";
import { Title } from "../layout/elements/Title";
import { MainMenu } from "../layout/elements/MainMenu";

export const Todos = ({
    loggedInUser,
}) => {

    const todosContent = () => {
        return (
            <></>
        );
    }

    return (
        <>
            <Title title="Todos" />
            <MainMenu content={todosContent()} />
        </>
    );
}
