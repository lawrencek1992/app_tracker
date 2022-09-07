import React, { useState } from "react";
import { Title } from "../layout/elements/Title";
import { MainMenu } from "../layout/elements/MainMenu";
import { TextInput } from "../layout/elements/TextInput";
import Button from "react-bootstrap/Button";
import { login } from "../axios/Users";

export const Login = ({
    loggedInUser,
    setLoggedInUser,
}) => {

    const [userCredentials, setUserCredentials] = useState({});

    function onSubmit() {
        console.log("SUBMITTING!");
        console.log("email: ", userCredentials.email);
        console.log("password: ", userCredentials.password);
        login().then((user) => {
            console.log("user response in Login.js: ", user);
            // setLoggedInUser (also you should probably be storing this in local storage, no?)
        })
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
