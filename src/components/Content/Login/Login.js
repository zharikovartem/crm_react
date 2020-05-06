import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { userAPI } from './../../../api/api';
import {reduxForm} from 'redux-form';
import {requiredField} from './../../../utils/validators/validators';
import LoginFormContainer from './LoginForm/LoginFormContainer';

class Login extends React.Component {
    
    render() {
        // console.log(this.props);
        // console.log('Login->render()');

        // const onPhoneChange = (e) => {
        //     let phone = e.target.value;
        //     this.props.onPhoneChange(phone);
        // }
        // const onPassChange = (e) => {
        //     let newPass = e.target.value;
        //     this.props.onPassChange(newPass);
        // }
        // const setUser = () => {
        //     const phone = this.props.user.phone;
        //     const password = this.props.user.password;
        //     this.props.getLoginThunkCreator(phone, password);
            
        // }

        // const loginReduxForm = reduxForm({form: 'login'})(LoginForm2);  
            // const LoginForm2 =  (props) => {
            //     return (
            //         <Form>
            //             <div>
            //                 <input placeholder="phone"></input>
            //             </div>
            //             <div>
            //                 <input placeholder="pass"></input>
            //             </div>
            //             <div>
            //                 <button>ok</button>
            //             </div>
            //         </Form>
            //     );
            // }     

            // const LoginForm = (props) => {
            //     return (
            //         <Form>
            //             <Form.Group controlId="formBasicEmail">
            //                 <Form.Label>Телефон</Form.Label>
            //                 <Form.Control type="phone" placeholder="+3751234567" 
            //                     onChange={onPhoneChange} value={this.props.user.phone} 
            //                     validated={requiredField} />
            //                 <Form.Text className="text-muted">
            //                     Мы никогда не передадим ваш номер телефона кому-либо еще.
            //                 </Form.Text>
            //             </Form.Group>

            //             <Form.Group controlId="formBasicPassword">
            //                 <Form.Label>Пароль</Form.Label>
            //                 <Form.Control type="password" placeholder="Введите пароль" 
            //                 onChange={onPassChange} value={this.props.user.password}/>
            //             </Form.Group>
            //             <Form.Group controlId="formBasicCheckbox">
            //                 <Form.Check type="checkbox" label="Оставаться в системе" />
            //             </Form.Group>
            //             <Button variant="primary" disabled={this.props.user.isLoginInProgress} onClick={setUser}>
            //                 Войти
            //             </Button>
            //         </Form>
            //     );
        // }

        const onSubmit = (formData) => {
            console.log(formData);
            this.props.getLoginThunkCreator(formData.phone, formData.password, formData.rememberMe);
        }

        return (
            <div>
                <LoginFormContainer onSubmit={onSubmit}/>
                <div>Register</div>
            </div>
        );
    }
}

export default Login;