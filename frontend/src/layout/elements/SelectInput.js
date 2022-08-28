import React from "react";
import Form from 'react-bootstrap/Form';

export const SelectInput = ({
    options,
    label,
    onChange,
}) => {

    return (
        <Form.Group controlId={`${label.replace(/\s+/g, '')}-input-group`}>
            <Form.Label>{label}</Form.Label>
            <Form.Select aria-label="Default select example" onChange={onChange()}>
                {options.map((o) => {
                    return <option value={o}>{o}</option>;
                })}
            </Form.Select>
        </Form.Group>
    );
};
