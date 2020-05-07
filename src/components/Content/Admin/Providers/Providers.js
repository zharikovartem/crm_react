import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col, DropdownButton, ButtonGroup, Dropdown, ListGroup, InputGroup } from 'react-bootstrap';

const Providers = (props) => {
    const [show, setShow] = useState(false);
    const [contactType, addContactTypeTo] = useState([]);
    const [loadType, choisLoadType] = useState(null);
    const [loadPeriod, choiseLoadPeriodTo] = useState(null);
    const [warhouse, warhouseTrueTo] = useState(false);
    const [timeToWorckOfice, checkTimeToWorckOfice] = useState({
        monday: null,
        tuesday: null,
        wednesday: null,
        thursday: null,
        friday: null,
        saturday: null,
        sunday: null
    });


    const checkNeedDayToWorckOfice = (e) => {
        // console.log(e.target.getAttribute('labelVel'));
        let day = e.target.getAttribute('day');
        let newState = { ...timeToWorckOfice };
        if (newState[day] === null) {
            newState[day] = e.target.getAttribute('labelVel');
        } else {
            newState[day] = null;
        }
        console.log(newState)
        checkTimeToWorckOfice(timeToWorckOfice => newState);
    }
    console.log(timeToWorckOfice)
    let timeToWorckOficeBlock = [];
    for (var prop in timeToWorckOfice) {
        if (timeToWorckOfice[prop] != null) {
            timeToWorckOficeBlock.push(
                <div>
                    <Form.Row>
                        <Col sm={4}>
                            <Form.Label size="sm">
                                {timeToWorckOfice[prop]}
                            </Form.Label >
                        </Col>
                        <Col sm={1}>
                            <Form.Label size="sm">
                                С:
                        </Form.Label >
                        </Col>
                        <Col sm={3}>
                            <Form.Control size="sm" type="time" />
                        </Col>
                        <Col sm={1}>
                            <Form.Label size="sm">
                                До:
                        </Form.Label>
                        </Col>
                        <Col sm={3}>
                            <Form.Control size="sm" type="time" />
                        </Col>
                    </Form.Row>
                </div>
            );
        } else {
            timeToWorckOficeBlock.push(
                <div></div>
            );
        }
    }

    const warhouseTrue = (e) => {
        // console.log(e.target.checked);
        warhouseTrueTo(e.target.checked)
    }
    let warhouseBlock = null;
    if (warhouse) {
        warhouseBlock = (
            <div>
                <p className="text-center mb-1">Адрес склада</p>
                <Form.Group className="mb-0" as={Row} controlId="warhouseSity">
                    <Form.Label column sm={3}>
                        Город
                        </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" placeholder="Введите город" />
                    </Col>
                </Form.Group>
                <Form.Group className="mb-0" as={Row} controlId="warhouseStreet">
                    <Form.Label column sm={3}>
                        Улица
                        </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" placeholder="Введите улицу" />
                    </Col>
                </Form.Group>
                <Form.Group className="mb-0" as={Row} controlId="warhouseHouse">
                    <Form.Label column sm={3}>
                        Дом
                        </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" placeholder="Введите номер дома" />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="warhouseRoom">
                    <Form.Label column sm={3}>
                        Помещение/Офис
                        </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" placeholder="Введите номер помещения" />
                    </Col>
                </Form.Group>
            </div>
        );
    }

    const choiseLoadPeriod = (e) => {
        console.log(e.target.value);
        choiseLoadPeriodTo(e.target.value);
    }

    let loadPeriodBlock = null;
    if (loadPeriod === '1 раз в день') {
        loadPeriodBlock = (
            <div>
                <Form.Group as={Row} controlId={'timeToGetPrice'}>
                    <Form.Label column sm={3}>
                        Время получения прайса
                    </Form.Label>
                    <Col sm={4}>
                        <Form.Control type="time" />
                    </Col>
                    <Col sm={5}>
                        {/* <Form.Control type="checkbox" /> */}
                        если пустое то неопределино
                    </Col>
                </Form.Group>
            </div>
        );
    }
    if (loadPeriod === '1 раз в неделю') {
        loadPeriodBlock = (
            <div>
                <fieldset>
                    <Form.Group as={Row} controlId={'timeToGetPrice'}>
                        <Form.Label column sm={3}>
                            Выберите день недели
                    </Form.Label>
                        <Col sm={9}>
                            <Form.Check
                                type="radio"
                                label="Любой"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios1"
                            />
                            <Form.Check
                                type="radio"
                                label="понедельник"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios2"
                            />
                            <Form.Check
                                type="radio"
                                label="Вторник"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios3"
                            />
                            <Form.Check
                                type="radio"
                                label="Среда"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios4"
                            />
                            <Form.Check
                                type="radio"
                                label="Четверг"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios5"
                            />
                            <Form.Check
                                type="radio"
                                label="Пятница"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios6"
                            />
                            <Form.Check
                                type="radio"
                                label="Суббота"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios7"
                            />
                            <Form.Check
                                type="radio"
                                label="Воскресенье"
                                name="formHorizontalRadios"
                                id="formHorizontalRadios8"
                            />
                        </Col>
                    </Form.Group>
                </fieldset>
            </div>
        );
    }

    const selectLoadType = (e) => {
        console.log(e.target.value);
        choisLoadType(e.target.value);
    }
    let loadTypeBlock = null;
    if (loadType === 'Email') {
        loadTypeBlock = (
            <div>
                <Form.Group className="mb-0" as={Row} controlId={'emailName'}>
                    <Form.Label column sm={3}>
                        Email
                    </Form.Label>
                    <Col sm={9}>
                        <InputGroup className="mb-3">
                            <Form.Control type="text" placeholder='Введите Email' />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Список</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId={'priceNameKey'}>
                    <Form.Label column sm={3}>
                        Ключ навания прайса
                    </Form.Label>
                    <Col sm={9}>
                        <InputGroup className="mb-3">
                            <Form.Control type="text" placeholder='Введите название ' />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Варианты</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Form.Group>
                <br /> Получить список Имэйлов
            </div>
        );
    }
    if (loadType === 'Parser') {
        loadTypeBlock = (
            <div>
                <Form.Group as={Row} controlId={'parserName'}>
                    <Form.Label column sm={3}>
                        Parser
                </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" placeholder='Введите Parser' />
                    </Col>
                </Form.Group>
                <br /> Получить список Парсеров
            </div>
        );
    }
    if (loadType === 'FTP') {
        loadTypeBlock = (
            <div>
                <Form.Group as={Row} controlId={'ftpUrl'}>
                    <Form.Label column sm={3}>
                        Ссылка на FTP
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" placeholder='Введите URL' />
                    </Col>
                </Form.Group>
            </div>
        );
    }
    if (loadType === 'Google') {
        loadTypeBlock = (
            <div>
                <Form.Group as={Row} controlId={'googleDocsURL'}>
                    <Form.Label column sm={3}>
                        Ссылка на Google docs
                    </Form.Label>
                    <Col sm={9}>
                        <Form.Control type="text" placeholder='Введите URL Google docs' />
                    </Col>
                </Form.Group>
            </div>
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
                    <div>
                        <Form.Group className="mb-0" as={Row} controlId={'phoneCotact_' + p}>
                            <Form.Label column sm={3}>
                                Номер телефона {p}
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="number" placeholder='Введите номер телефона' />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId={'cotact' + p + 'manager'}>
                            <Form.Label column sm={3}>
                                Имя менеджера
                            </Form.Label>
                            <Col sm={9}>
                                <Form.Control type="text" placeholder='Введите имя менеджера' />
                            </Col>
                        </Form.Group>
                    </div>
                );

            case 'Skype':
                s++;
                return (
                    <Form.Group as={Row} controlId={'skypeContact_' + s}>
                        <Form.Label column sm={3}>
                            Логин скайп {s}
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="text" placeholder='Введите логин скайп' />
                        </Col>
                    </Form.Group>
                );
                break;

            case 'Viber':
                v++;
                return (
                    <Form.Group as={Row} controlId={'viberContact_' + v}>
                        <Form.Label column sm={3}>
                            Номер Viber {v}
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="number" placeholder='Введите номер Viber' />
                        </Col>
                    </Form.Group>
                );
                break;

            case 'Telegram':
                t++;
                return (
                    <Form.Group as={Row} controlId={'telegramContact_' + t}>
                        <Form.Label column sm={3}>
                            Номер Telegram {t}
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="number" placeholder='Введите номер Telegram' />
                        </Col>
                    </Form.Group>
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

                        <ListGroup>
                            <ListGroup.Item>
                                <Form.Group as={Row} controlId="loadType">
                                    <Form.Label column sm={3}>
                                        Способ загрузки
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control as="select" custom onChange={selectLoadType}>
                                            <option>Выберите способ загрузки прайса</option>
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
                                <Form.Group as={Row} controlId="loadPeriod">
                                    <Form.Label column sm={3}>
                                        Частота загрузки
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control as="select" custom onChange={choiseLoadPeriod}>
                                            <option>Выберите периодичность загрузи прайса</option>
                                            <option>1 раз в день</option>
                                            <option>1 раз в неделю</option>
                                            <option>1 раз в месяц</option>
                                            <option>более 1 раза в месяц</option>
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                {loadPeriodBlock}
                            </ListGroup.Item>
                        </ListGroup>

                        <ListGroup>
                            <ListGroup.Item>
                                {contactTypeBlock}
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
                                <br /> Выбрать предпочтительный способ связи
                            </ListGroup.Item>
                        </ListGroup>

                        <ListGroup>
                            <ListGroup.Item>
                                <p className="text-center mb-1">Адрес офиса</p>
                                <Form.Group className="mb-0" as={Row} controlId="oficeSity">
                                    <Form.Label column sm={3}>
                                        Город
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="text" placeholder="Введите город" />
                                    </Col>
                                </Form.Group>
                                <Form.Group className="mb-0" as={Row} controlId="oficeStreet">
                                    <Form.Label column sm={3}>
                                        Улица
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="text" placeholder="Введите улицу" />
                                    </Col>
                                </Form.Group>
                                <Form.Group className="mb-0" as={Row} controlId="oficeHouse">
                                    <Form.Label column sm={3}>
                                        Дом
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="text" placeholder="Введите номер дома" />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="oficeRoom">
                                    <Form.Label column sm={3}>
                                        Помещение/Офис
                                    </Form.Label>
                                    <Col sm={9}>
                                        <Form.Control type="text" placeholder="Введите номер помещения" />
                                    </Col>
                                </Form.Group>
                                <p className="text-center mb-1">График работы офиса</p>
                                <fieldset>
                                    <Form.Group as={Row} controlId={'timeToWorckOfice'}>
                                        {/* <Form.Label column sm={3}>
                                            Выберите день недели
                                        </Form.Label> */}
                                        <Col sm={3}>
                                            <Form.Check
                                                className="mb-2"
                                                type="checkbox"
                                                label="Понедельник"
                                                labelVel="Понедельник"
                                                name="oficeWorckDate"
                                                id="oficeWorckDate2"
                                                day="monday"
                                                onClick={checkNeedDayToWorckOfice}
                                            />
                                            <Form.Check
                                                className="mb-2"
                                                type="checkbox"
                                                label="Вторник"
                                                labelVel="Вторник"
                                                name="oficeWorckDate"
                                                id="oficeWorckDate3"
                                                day="tuesday"
                                                onClick={checkNeedDayToWorckOfice}
                                            />
                                            <Form.Check
                                                className="mb-2"
                                                type="checkbox"
                                                label="Среда"
                                                labelVel="Среда"
                                                name="oficeWorckDate"
                                                id="oficeWorckDate4"
                                                day="wednesday"
                                                onClick={checkNeedDayToWorckOfice}
                                            />
                                            <Form.Check
                                                className="mb-2"
                                                type="checkbox"
                                                label="Четверг"
                                                labelVel="Четверг"
                                                name="oficeWorckDate"
                                                id="oficeWorckDate5"
                                                day="thursday"
                                                onClick={checkNeedDayToWorckOfice}
                                            />
                                            <Form.Check
                                                className="mb-2"
                                                type="checkbox"
                                                label="Пятница"
                                                labelVel="Пятница"
                                                name="oficeWorckDate"
                                                id="oficeWorckDate6"
                                                day="friday"
                                                onClick={checkNeedDayToWorckOfice}
                                            />
                                            <Form.Check
                                                className="mb-2"
                                                type="checkbox"
                                                label="Суббота"
                                                labelVel="Суббота"
                                                name="oficeWorckDate"
                                                id="oficeWorckDate7"
                                                day="saturday"
                                                onClick={checkNeedDayToWorckOfice}
                                            />
                                            <Form.Check
                                                className="mb-2"
                                                type="checkbox"
                                                label="Воскресенье"
                                                labelVel="Воскресенье"
                                                name="oficeWorckDate"
                                                id="oficeWorckDate8"
                                                day="sunday"
                                                onClick={checkNeedDayToWorckOfice}
                                            />
                                        </Col>
                                        <Col sm={9}>
                                            {timeToWorckOficeBlock}
                                        </Col>
                                    </Form.Group>
                                </fieldset>

                                <Form.Group controlId="warhouseTrue">
                                    <Form.Check type="checkbox" label="Склад в другом месте" onChange={warhouseTrue} />
                                </Form.Group>
                                {warhouseBlock}
                            </ListGroup.Item>
                        </ListGroup>

                        <br /> срок резерва
                        <br /> способ оплаты
                        <br /> график работы
                        <br /> время работы
                        <br /> обед
                        <br /> порядок забора товара


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