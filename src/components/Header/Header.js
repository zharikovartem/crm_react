import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const Header = (props) => {

    const logout = () => {
        props.logout();
    }

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">ArtCRM</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link to="">
                        <NavLink to="/catalog">Каталог</NavLink>
                    </Nav.Link>
                    {props.isAuth ?
                        <Nav.Link to="">
                            <NavLink to="/catalog" onClick={logout}>Выход</NavLink>
                        </Nav.Link>
                        :
                        <Nav.Link to="">
                            <NavLink to="/login">Вход</NavLink>
                        </Nav.Link>
                    }
                    {props.status === 'admin' ?
                        <Nav.Link to="">
                            <NavLink to="/adminPanel">Админка</NavLink>
                        </Nav.Link> : null}
                    {props.status === 'admin' ?
                        <Nav.Link to="">
                            <NavLink to="/orders">Заказы</NavLink>
                        </Nav.Link> : null}
                    {props.status === 'admin' ?
                        <Nav.Link to="">
                            <NavLink to="/tasks">Задачи</NavLink>
                        </Nav.Link> : null}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;