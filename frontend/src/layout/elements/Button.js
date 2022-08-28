import React from "react";
import Button from 'react-bootstrap/Button';

export const Button = ({
    variant,
    text,
    onClick,
}) => {
    return (
        <Button variant={variant} onClick={onClick()}>{text}</Button>
    )
};
