import React from "react";
import { Title } from "../layout/elements/Title";
import { MainMenu } from "../layout/elements/MainMenu";
import { fetchApplications } from "../axios/Applications";

export const Main = ({ loggedInUser }) => {
  const onClick = () => {
    fetchApplications().then((fetchedApplications) => {
      // set state with response
      console.log("fetched applications: ", fetchedApplications);
    });
  };

  const content = () => {
    return (
      <>
        <p>Holy CHANGE THIS macaroni!</p>
        <button onClick={onClick}>Fetch & Print Applications</button>
      </>
    );
  };

//   return (
//     <>
//       {/*
    
//      <Title title="Home" />
//       <MainMenu content={content()} />
//     */}
//     </>
  );
};
