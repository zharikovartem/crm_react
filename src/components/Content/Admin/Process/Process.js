import React from 'react';
import Table from 'react-bootstrap/Table';
import Pagination from './../../../universal/Pagination/Pagination';

class Process extends React.Component {
    componentDidMount() {
        // console.log('componentDidMount Process');
        // console.log(this.props.admin.contentList);
        if (!this.props.admin.contentList.includes(this.props.admin.handleSelect)) {
            console.log('стартуем санку на перерисовку Process')
            // this.props.admin.contentList.push(this.props.admin.handleSelect);
            // добавляем название в список
            this.props.getProcessList(this.props.admin.processData.currentPage, this.props.admin.processData.pageSize);
            // this.props.tabIsLoaded();
        } else {
            console.log('ПЕРЕРИСОВКИ НЕТ')
        }
    }

    render() {
        console.log(this.props)

        let processList = null;
        // if (this.props.admin.content != null) {
        processList = this.props.admin.process.map((item) => {
            return (
                <tr>
                    <td>{item['id']}</td>
                    <td>{item['name']}</td>
                    <td>{item['status']}</td>
                    <td>{item['start']}</td>
                    <td></td>
                </tr>
            );
        });
        //} else {
        //     processList = null;
        // }

        const changePageOnProcess = (num) => {
            console.log('changePageOnProcess')
            this.props.setCurrentProcessPage(num);
            this.props.getProcessList(this.props.admin.processData.currentPage, this.props.admin.processData.pageSize);
        }

        return (
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Название</th>
                            <th>Статус</th>
                            <th>Дата создания</th>
                            <th>Действия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {processList}
                    </tbody>
                </Table>

                <Pagination 
                    totalItemsCount={this.props.admin.processData.totalProcessCount}
                    pageSizs = {this.props.admin.processData.pageSize}
                    currentPage = {this.props.admin.processData.currentPage} 
                    onPageCanged={(num)=>{changePageOnProcess(num)}}
                    portionSize='5'
                />

            </div>
        );
    }
}

export default Process;