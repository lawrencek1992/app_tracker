import React from "react";
import { Title } from "../layout/elements/Title";
import { MainMenu } from "../layout/elements/MainMenu";

export const Applications = () => {

    const applicationsContent = () => {
        return (
            <>

            </>
        );
    }

    return (
        <>
            <Title title="Applications" />
            <MainMenu content={applicationsContent()} />
        </>
    );
}
