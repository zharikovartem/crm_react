import React from 'react';

class EditebleSpan extends React.PureComponent {

    state = {
        isEdit: false,
        value: this.props.value,
        table: this.props.table,
        fieldName: this.props.fieldName,
        itemId: this.props.itemId
    }

    edite = (e) => {
        let newState = {...this.state};
        newState.isEdit = !this.state.isEdit;
        this.setState(
            newState
        )
    }
    save = (e) => {
        this.state.isEdit = !this.state.isEdit;
        this.setState(
            this.state
        )
        this.props.updateFieldRecord(this.state);
        this.props.reRenderComponent(this.props.componentName);
    }
    editValue = (e) => {
        this.setState({
            value: e.target.value
        });
    }

    // componentDidUpdate() {
    //     if (this.state.value !== this.props.value) {
    //         this.state ({
    //             isEdit: false,
    //             value: this.props.value,
    //             table: this.props.table,
    //             fieldName: this.props.fieldName,
    //             itemId: this.props.itemId
    //         })
    //     }
    // }
    
    render() {
        // console.log(this.state);
        // console.log(this.props);
        return (
            <div>
                { !this.state.isEdit ? (
                <div>
                    <span onDoubleClick={this.edite}>{this.props.value}</span>
                </div>
                ) : (
                <div>
                    <input autoFocus={true} onBlur={this.save} onChange={this.editValue} type="text" value={this.state.value}/>
                </div>
                )}
            </div>
        );
    }
}

export default EditebleSpan;