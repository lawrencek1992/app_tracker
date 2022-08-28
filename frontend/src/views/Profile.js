import React from "react";
import { Title } from "../layout/elements/Title";
import { MainMenu } from "../layout/elements/MainMenu";

export const Profile = () => {

    const profileContent = () => {
        return (
            <></>
        );
    }

    return (
        <>
            <Title title="Profile" />
            <MainMenu content={profileContent()} />
        </>
    );
}
