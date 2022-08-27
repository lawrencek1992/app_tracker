import Form from 'react-bootstrap/Form';

export const TextInput = ({
    inputType,
    label,
    onChange,
}) => {

    let textInput;
    if (inputType) {
        textInput = <Form.Control type={inputType} placeholder={placeholder ? placeholder : ""} onChange={onChange()} />;
    }
    else {
        textInput = <Form.Control as="textarea" placeholder={placeholder ? placeholder : ""} onChange={onChange()} />;
    }

    return (
        <Form.Group controlId={`${label.replace(/\s+/g, '')}-input-group`}>
            <Form.Label>{label}</Form.Label>
            {textInput}
        </Form.Group>
    );
};
