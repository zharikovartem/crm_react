import React from 'react';
import { ListGroup, Accordion, Button, Table} from 'react-bootstrap';

class BaseFields extends React.Component {

    render() {
        let BaseFieldRows;
        if (this.props.admin.settings.standartFieldsToProductType !== undefined) {
            BaseFieldRows = this.props.admin.settings.standartFieldsToProductType.map((item) => {
                console.log(item['data']);
                return (
                    <tr>
                        <td>{item['data']}</td>
                        <td>{item['value']}</td>
                        <td></td>
                    </tr>
                );
            });
        } else {
            BaseFieldRows = null;
        }
        if (BaseFieldRows) {
            console.log(BaseFieldRows);
        }

        console.log(this.props.admin.settings.standartFieldsToProductType);
        return (
            <ListGroup.Item>
                <Accordion>
                    <Accordion.Toggle as={Button} variant="link" eventKey="BaseFields">
                        Базовые филды
                        </Accordion.Toggle>
                    <Accordion.Collapse eventKey="BaseFields">
                        {/* <div>{BaseFieldRows}</div> */}

                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Название</th>
                                    <th>Значение</th>
                                </tr>
                            </thead>
                            <tbody>
                                {BaseFieldRows}
                            </tbody>
                        </Table>

                    </Accordion.Collapse>
                </Accordion>
            </ListGroup.Item>
        );
    }
}

export default BaseFields;