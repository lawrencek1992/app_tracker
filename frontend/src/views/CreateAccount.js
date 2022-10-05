import React, { useState } from "react";
import { Title } from "../layout/elements/Title";
import { MainMenu } from "../layout/elements/MainMenu";

export const CreateAccount = ({ loggedInUser }) => {
  const createAccountContent = () => {
    return <></>;
  };

  return (
    <>
      <Title title="Create Account" />
      <MainMenu content={createAccountContent()} />
      <h1>Does this work?</h1>
    </>
  );
};
