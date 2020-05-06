import React from 'react';
import {Tabs, Nav} from 'react-bootstrap';
// import Tab from 'react-bootstrap/Tab';
import MainCatalogContainer from './MainCatalog/MainCatalogContainer';
import ProcessContainer from './Process/ProcessContainer';
import SettingsContainer from './Settings/SettingsContainer';
import ProvidersContainer from './Providers/ProvidersContainer'
import { NavLink, Route } from 'react-router-dom';


class Admin extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.handleSelect = this.handleSelect.bind(this);
    // }

    // handleSelect(e) {
    //     // this.props.setHandleSelect(key);
    //     console.log(e)
    // }
    componentDidMount() {
        if (!this.props.admin.handleSelect) {
            console.log('НЕОБХОДИМО УСТАНОВИТЬ handleSelect');
        } else {
            console.log('handleSelect УСТАНОВЛЕН');
        }
    }

    render() {
        const handleSelect = (event) => {
            let tabName = event.currentTarget.getAttribute('tabName');
            this.props.setHandleSelect(tabName);
        }
        // console.log(this.props);
        // console.log('Admin->this.render()');
        console.log(this.props);
        return (
            <div>
                <Nav variant="tabs" defaultActiveKey="/home">
                    <Nav.Item>
                        <Nav.Link to="/adminPanel/mainCatalog" as={NavLink} 
                            tabName="mainCatalog" onClick={handleSelect} >
                            Основной каталог
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link to="/adminPanel/providers" as={NavLink}
                            tabName="providers" onClick={handleSelect} >
                            Поставщики
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link to="/adminPanel/mail" as={NavLink}
                            tabName="mail" onClick={handleSelect} >
                            Почта                                               
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link to="/adminPanel/process" as={NavLink}
                            tabName="process" onClick={handleSelect} >
                            Процессы
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link to="/adminPanel/settings" as={NavLink}
                            tabName="settings" onClick={handleSelect} >
                            Настройки
                        </Nav.Link>
                    </Nav.Item>
                </Nav>  

                <Route  path='/adminPanel/mainCatalog'
                        render={() => <MainCatalogContainer />} />
                <Route  path='/adminPanel/process'
                        render={() => <ProcessContainer />} />
                <Route  path='/adminPanel/settings'
                        render={() => <SettingsContainer />} />
                <Route  path='/adminPanel/providers'
                        render={() => <ProvidersContainer />} />

            </div>
        )
    }
}

export default Admin;