import React, { useState, useEffect } from 'react';

const EditebleSpan = React.memo((props) => {

    let [editeMode, setEditeMode] = useState(false);
    let [inputValue, changeValue] = useState(props.value);

    useEffect( () => {
        changeValue(props.value);
    }, [props.value] );

    const activateEditemde = () => {
        setEditeMode(true);
    }

    const deactivateEditeMode = () => {
        setEditeMode(false);
        props.updateFieldRecord({
            value: inputValue,
            table: props.table,
            fieldName: props.fieldName,
            itemId: props.itemId
        });
        props.reRenderComponent(props.componentName);
    }

    const onValueChange = (e) => {
        changeValue(e.target.value);
    }

    return (
        <div>
            {!editeMode ? (
                <div>
                    <span onDoubleClick={activateEditemde}>{props.value}</span>
                </div>
            ) : (
                    <div>
                        <input autoFocus={true} onChange={onValueChange} onBlur={deactivateEditeMode}
                        type="text" value={inputValue} />
                    </div>
                )}
        </div>
    );
})

export default EditebleSpan;