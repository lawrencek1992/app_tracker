import React from "react";
import Form from "react-bootstrap/Form";

export const TextInput = ({
    inputType,
    label,
    name,
    formState,
    setFormState,
    placeholder,
}) => {

    function onChange(e) {
        e.preventDefault();
        setFormState({
            ...formState,
            [name]: e.target.value
        });
    }

    let textInput;
    if (inputType) {
        textInput = <Form.Control required type={inputType} placeholder={placeholder ? placeholder : ""} onChange={(e) => onChange(e)} />;
    }
    else {
        textInput = <Form.Control required as="textarea" placeholder={placeholder ? placeholder : ""} onChange={(e) => onChange(e)} />;
    }

    return (
        <Form.Group controlId={`${label.replace(/\s+/g, '')}-input-group`} className="mb-3">
            <Form.Label>{label}</Form.Label>
            {textInput}
        </Form.Group>
    );
};
