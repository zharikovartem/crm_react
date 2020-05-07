import React, {useState} from 'react';
import ProviderForm from './ProviderForm/ProviderForm'
import { Modal, Button, Form, Row, Col, DropdownButton, ButtonGroup, Dropdown, ListGroup, InputGroup } from 'react-bootstrap';

const ProviderCreate = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        // addContactTypeTo([]);
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
                {/* <Form> */}
                    <ProviderForm />
                {/* </Form> */}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                    </Button>
                <Button variant="primary" type="submit">
                    Save Changes
                    </Button>
            </Modal.Footer>
        </Modal>

        {/* <ProviderForm /> */}
        </div>
    );
}

export default ProviderCreate;