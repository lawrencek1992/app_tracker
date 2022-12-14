import React, { useState } from "react";
import { Title } from "../layout/elements/Title";
import { MainMenu } from "../layout/elements/MainMenu";
import { TextInput } from "../layout/elements/TextInput";
import Button from "react-bootstrap/Button";

export const Login = ({
    loggedInUser,
    setLoggedInUser,
}) => {

    const [userCredentials, setUserCredentials] = useState({});

    function onSubmit() {
        console.log("SUBMITTING!");
        console.log("email: ", userCredentials.email);
        console.log("password: ", userCredentials.password);
        // redux call to an login redux action. 
        // then call setLoggedInUser() and set the current user to the response from the backend. 
    }

    const loginContent = () => {
        return (
            <form onSubmit={()=> onSubmit()}>
                <TextInput 
                    inputType="email" 
                    label="Email" 
                    name="email"
                    formState={userCredentials} 
                    setFormState={setUserCredentials} 
                    placeholder="ex: john@gmail.com"
                />
                <TextInput 
                    inputType="password" 
                    label="Password" 
                    name="password"
                    formState={userCredentials} 
                    setFormState={setUserCredentials} 
                />
                <Button type="submit">Login</Button>
            </form>
        );
    }

    return (
        <>
            <Title title="Login" />
            <MainMenu content={loginContent()} />
        </>
    );
}
