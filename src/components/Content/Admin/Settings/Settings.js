import React from 'react';
import { ListGroup, Accordion, Button, Card } from 'react-bootstrap';
import BaseFieldsContainer from './BaseFields/BaseFieldsContainer';

class Settings extends React.Component {
    componentDidMount() {
        if (!this.props.admin.contentList.includes(this.props.admin.handleSelect)) {
            this.props.admin.contentList.push(this.props.admin.handleSelect);
            this.props.getSettingsList();
        }
    }
    

    render() {
        console.log(this.props);
        
        return (
            <div>
                <h2>SETTINGS</h2>

                <ListGroup>

                    <ListGroup.Item>
                        <Accordion>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Основной каталог
                                </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                {/* <Card.Body>Базовые филды</Card.Body> */}
                                <BaseFieldsContainer />
                            </Accordion.Collapse>
                        </Accordion>
                    </ListGroup.Item>

                    

                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>

        );
    }
}

// const SettingsRow = (value, items) => {
//     console.log(items);

//     let processList;
//         if (items !== undefined) {
//             let itemsCopy = {...items};
//             console.log(itemsCopy);
//             processList = itemsCopy.map( (item) => {
//                 console.log(item);
//                 return (
//                     <Card.Body>{item['data']}</Card.Body>
//                 );
//             });
//         } else {
//             processList = null;
//         }
//         // processList = null;

//         // debugger;
//     return (
//         <ListGroup.Item>
//             <Accordion>
//                 <Card>
//                     <Card.Header>
//                         <Accordion.Toggle as={Button} variant="link" eventKey="1">
//                             {value}
//                     </Accordion.Toggle>
//                     </Card.Header>
//                     <Accordion.Collapse eventKey="1">
//                         {items!==undefined ? processList : 
//                         <Card.Body>null</Card.Body>
//                         }
//                     </Accordion.Collapse>
//                 </Card>
//             </Accordion>
//         </ListGroup.Item>
//     );
// }


export default Settings;