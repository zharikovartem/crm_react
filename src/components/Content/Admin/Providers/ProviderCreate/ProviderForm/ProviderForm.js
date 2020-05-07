import React, { useState } from 'react';
import { Field } from 'redux-form';
import { reduxForm } from 'redux-form';
import { requiredField, maxLengthCreator } from './../../../../../../utils/validators/validators';
import { FieldFormInput } from './../../../../Login/LoginForm/FieldFormComponent';
import {Form, Button, Row, Col} from 'react-bootstrap';


const ProviderForm = (props) => {
    // console.log(props)
    // const maxLength10 = maxLengthCreator(13);
    const [validated, setValidated] = useState(false);
    // const [setValidated] = useState(false);
    // const [validated] = useState(true); // запускает проверку сразу

    const handleSubmit = (event) => {
        // console.log(props)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    let FFF = () => {
        return (
            <Form.Group as={Row} controlId="name">
                <Form.Label column sm={3}>
                    Наименование
                </Form.Label>
                <Col sm={9}>
                    <Form.Control type="text" placeholder="Наименование" />
                </Col>
            </Form.Group>
        );
    }

    return (
        <div>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>

            <div className="form-check">
                <label for="rememberMe">Оставаться в системе</label>
                <Field component="input" id="rememberMe" label="123"
                name="rememberMe" type={FFF}/>
            </div>

                <Button type="submit">Войти</Button>
            </Form>
            {/* <FieldFormInput /> */}
        </div>
    );
}

const ProviderReduxForm = reduxForm({
    form: 'provider'
})(ProviderForm);

export default ProviderReduxForm;