import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, DropdownButton, ButtonGroup, Dropdown, ListGroup } from 'react-bootstrap';

const Providers = (props) => {
    const [show, setShow] = useState(false);
    const [contactType, addContactTypeTo] = useState([]);
    const [loadType, choisLoadType] = useState(null);

    const selectLoadType = (e) => {
        console.log(e.target.value);
        choisLoadType(e.target.value);
    }
    let loadTypeBlock = null;
    if (loadType === 'Email') {
        loadTypeBlock = (
            <Form.Group as={Row} controlId={'emailName'}>
                <Form.Label column sm={3}>
                    Email
                </Form.Label>
                <Col sm={9}>
                    <Form.Control type="text" placeholder='Введите Email' />
                </Col>
            </Form.Group>
        );
    }
    if (loadType === 'Parser') {
        loadTypeBlock = (
            <Form.Group as={Row} controlId={'parserName'}>
                <Form.Label column sm={3}>
                    Parser
                </Form.Label>
                <Col sm={9}>
                    <Form.Control type="text" placeholder='Введите Parser' />
                </Col>
            </Form.Group>
        );
    }

    const addContactType = (evt, evtKey) => {
        addContactTypeTo(contactType => [...contactType, evt]);
    }
    const deleteLastContactType = () => {
        contactType.pop();
        addContactTypeTo(contactType => [...contactType]);
    }

    let p = 0;
    let s = 0;
    let v = 0;
    let t = 0;
    let contactTypeBlock = contactType.map((item) => {
        // i++;
        switch (item) {
            case 'Телефон':
                p++;
                return (
                    <ListGroup.Item>

                        <Form.Group className="mb-0" as={Row} controlId={'phoneCotact_' + p}>
                            <Form.Label column sm={3}>
                                Номер телефона {p}
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="number" placeholder='Введите номер телефона' />
                            </Col>
                        </Form.Group>
                        <Form.Group className="mb-0" as={Row} controlId={'cotact' + p + 'manager'}>
                            <Form.Label column sm={3}>
                                Имя менеджера
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" placeholder='Введите имя менеджера' />
                            </Col>
                        </Form.Group>

                    </ListGroup.Item>
                );

            case 'Skype':
                s++;
                return (
                    <ListGroup.Item>
                        {/* <p>Скайп {p}</p> */}
                        <Form.Group as={Row} controlId={'skypeContact_' + s}>
                            <Form.Label column sm={3}>
                                Логин скайп {s}
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" placeholder='Введите логин скайп' />
                            </Col>
                        </Form.Group>
                    </ListGroup.Item>
                );
                break;

            case 'Viber':
                v++;
                return (
                    <ListGroup.Item>
                        {/* <p>Скайп {p}</p> */}
                        <Form.Group as={Row} controlId={'viberContact_' + v}>
                            <Form.Label column sm={3}>
                                Номер Viber {v}
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="number" placeholder='Введите номер Viber' />
                            </Col>
                        </Form.Group>
                    </ListGroup.Item>
                );
                break;

            case 'Telegram':
                t++;
                return (
                    <ListGroup.Item>
                        {/* <p>Скайп {p}</p> */}
                        <Form.Group as={Row} controlId={'telegramContact_' + t}>
                            <Form.Label column sm={3}>
                                Номер Telegram {t}
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="number" placeholder='Введите номер Telegram' />
                            </Col>
                        </Form.Group>
                    </ListGroup.Item>
                );
                break;

            default:
                break;
        }

    })

    const handleClose = () => {
        setShow(false);
        addContactTypeTo([]);
    }
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Новый постовщик
            </Button>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Создание нового поставщика</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} controlId="name">
                            <Form.Label column sm={3}>
                                Наименование
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" placeholder="Наименование" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="title">
                            <Form.Label column sm={3}>
                                Наименование в БД
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" placeholder="Наименование в БД латинскими буквами" />
                            </Col>
                        </Form.Group>
                        {/* <ListGroup> */}
                            <Form.Group as={Row} controlId="loadType">
                                <Form.Label column sm={3}>
                                    Способ загрузки
                                </Form.Label>
                                <Col sm={9}>
                                    <Form.Control as="select" custom onChange={selectLoadType}>
                                        <option>Выберите способ</option>
                                        <option>Email</option>
                                        <option>Parser</option>
                                        <option>FTP</option>
                                        <option>Google</option>
                                        <option>Skype</option>
                                        <option>Telegram</option>
                                        <option>В ручную</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                            {loadTypeBlock}
                        {/* </ListGroup> */}

                        <ListGroup>
                            {contactTypeBlock}
                        </ListGroup>

                        <ButtonGroup size="sm">
                            <DropdownButton size="sm" as={ButtonGroup} title="Добавить способ связи"
                                onSelect={addContactType} id="bg-nested-dropdown">
                                <Dropdown.Item size="sm" eventKey="Телефон">Телефон</Dropdown.Item>
                                <Dropdown.Item size="sm" eventKey="Skype">Skype</Dropdown.Item>
                                <Dropdown.Item size="sm" eventKey="Viber">Viber</Dropdown.Item>
                                <Dropdown.Item size="sm" eventKey="Telegram">Telegram</Dropdown.Item>
                            </DropdownButton>
                            <Button size="sm" variant="danger" onClick={deleteLastContactType}>
                                Удалить
                            </Button>
                        </ButtonGroup>
                        
                        <br/> частота получния прайса
                        <br/> срок резерва
                        <br/> способ оплаты
                        <br/> адрес склада
                        <br/> время работы 
                        <br/> обед
                        <br/> порядок забора товара


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Providers;