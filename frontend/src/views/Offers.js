import React from "react";
import { Title } from "../layout/elements/Title";
import { MainMenu } from "../layout/elements/MainMenu";

export const Offers = ({
    loggedInUser,
}) => {

    const offersContent = () => {
        return (
            <></>
        );
    }

    return (
        <>
            <Title title="Offers" />
            <MainMenu content={offersContent()} />
        </>
    );
}
