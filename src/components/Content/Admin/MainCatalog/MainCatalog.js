import React from 'react';
import Table from 'react-bootstrap/Table';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import EditebleSpanContainer from './../../../universal/EditebleSpan/EditebleSpanContainer';


class MainCatalog extends React.Component {
    componentDidMount() {
        if (!this.props.admin.contentList.includes(this.props.admin.handleSelect)) {
            this.props.admin.contentList.push(this.props.admin.handleSelect);
            this.props.getProductTypeList();
        }
    }
    componentDidUpdate() {
        // debugger;
        if (!this.props.admin.contentList.includes(this.props.admin.handleSelect)) {
            this.props.admin.contentList.push(this.props.admin.handleSelect);
            this.props.getProductTypeList();
        }
    }

    state = {
        name: null,
        title: null,
        group: null
    }

    changeInput = (e) => {
        let text = e.target.value;
        let field = e.target.getAttribute('aria-label');
        this.state[field] = text;
        this.setState(
            this.state
        )
    }

    createNewType = () => {
        this.props.crateNewProductType(this.state);
    }

    deleteProductTypeItem = (evt,evtKey) => {
        // console.log(evt);
        let id = evtKey.currentTarget.getAttribute('eventId');
        if (evt === 'deleteItem') {
            this.props.deleteProductType(id);
        } else {
            console.log(evt+': '+id);
            this.props.loadProductTypeItemList(id, evt);
        }
        
    }

    render() {
        // debugger;
        let lists;
        if (this.props.admin.content != null) {
            lists = this.props.admin.content.map((item) => {
                return (
                    <tr>
                        <td>{item['id']}</td>
                        <td><EditebleSpanContainer 
                            value={item['title']} 
                            fieldName="title"
                            table = "Product_types"
                            itemId = {item['id']}
                            componentName = "mainCatalog"
                            reRenderComponent = {this.props.reRenderComponent}
                            />
                        </td>
                        <td>{item['name']}</td>
                        <td>{item['groupName']}</td>
                        <td>
                        <ButtonGroup size="sm">
                            <DropdownButton size="sm" as={ButtonGroup} title="" id="bg-nested-dropdown" onSelect={this.deleteProductTypeItem}>
                                <Dropdown.Item size="sm" eventKey="loadList" eventId={item['id']}>
                                    Загрузить список
                                </Dropdown.Item>
                                <Dropdown.Item size="sm" eventKey="getDescriptions" eventId={item['id']}>Получить описания</Dropdown.Item>
                                <Dropdown.Item size="sm" eventKey="deleteItem" eventId={item['id']} >Удалить</Dropdown.Item>
                                <Dropdown.Item size="sm" eventKey="getInfo" eventId={item['id']}>Информация</Dropdown.Item>
                            </DropdownButton>
                        </ButtonGroup>
                        </td>
                    </tr>
                );
            });
        } else {
            lists = null;
        }



        console.log(this.props);
        console.log(this.state);

        if (this.props.admin.handleSelect === 'mainCatalog') {
            return (
                <div>
                    <Accordion>
                        <Card>
                            <Card.Header>
                                <Accordion.Toggle as={Button} variant="button" eventKey="0">
                                    Создать
                                    </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>

                                    <InputGroup size="sm" className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon1">Название</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="Введите название группы"
                                            aria-label="title"
                                            aria-describedby="basic-addon1"
                                            value = {this.state.title}
                                            onChange = {this.changeInput}
                                        />
                                    </InputGroup>
                                    <InputGroup size="sm" className="mb-3">
                                        <InputGroup.Prepend>
                                            <InputGroup.Text id="basic-addon2">Псевдоним</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl
                                            placeholder="Введите Псевдоним группы"
                                            aria-label="name"
                                            aria-describedby="basic-addon2"
                                            onChange = {this.changeInput}
                                        />
                                    </InputGroup>

                                    <InputGroup size="sm" className="mb-3">
                                        <InputGroup.Prepend size="sm">
                                            <InputGroup.Text size="sm" id="basic-addon3">Группа</InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <Form.Control as="select" size="sm" custom 
                                            aria-describedby="basic-addon3" 
                                            aria-label="group"
                                            onChange = {this.changeInput}
                                            >
                                            <option>Выберете...</option>
                                            <option>Техника для кухни</option>
                                            <option>Техника для дома</option>
                                            <option>Сантехника</option>
                                            <option>Водоснабжение</option>
                                            <option>Климат</option>
                                            <option>Стройматериалы</option>
                                        </Form.Control>
                                    </InputGroup>

                                    <Button variant="primary" onClick={this.createNewType}>
                                        Создать
                                    </Button>

                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Название</th>
                                <th>Псевдоним</th>
                                <th>Группа</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {lists}
                        </tbody>
                    </Table>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default MainCatalog;