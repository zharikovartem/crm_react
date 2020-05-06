import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { reduxForm } from 'redux-form';
import { FieldFormInput } from './FieldFormComponent';
import { Field } from 'redux-form';
import { requiredField, maxLengthCreator } from './../../../../utils/validators/validators';

const maxLength10 = maxLengthCreator(13);

const LoginForm = (props) => {
    const [validated, setValidated] = useState(false);
    // const [setValidated] = useState(false);
    // const [validated] = useState(true); // запускает проверку сразу

    const handleSubmit = (event) => {
        console.log(props)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };



    console.log(props);
    return (
        <Form noValidate validated={validated} onSubmit={props.handleSubmit}>
            <Field type="phone"
                name="phone"
                placeholder="+3751234567"
                required
                validate={[requiredField, maxLength10]}
                component={FieldFormInput}>Телефон</Field>

            <Field type="password"
                name="password"
                placeholder="Введите пароль"
                required
                validate={[requiredField]}
                component={FieldFormInput}>Пароль</Field>

            {/*<div>    
            <Field type="checkbox" 
                    name="rememberMe" 
                    placeholder="" 
                    feedback=""
                    // required
                    component={FieldFormCheckbox}>Оставаться в системе</Field>
            </div> */}
            
        <div className="form-check">
            <Field component="input" id="rememberMe" className="form-check-input" name="rememberMe" type="checkbox"/>
            <label for="rememberMe">Оставаться в системе</label>
        </div>
                { props.error ? 
                <Alert key="1" variant="danger">
                    {props.error}
                </Alert> : null }

            <Button type="submit">Войти</Button>
        </Form>
    );
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

export default LoginReduxForm;