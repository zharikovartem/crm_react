import React, { Component } from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
// import ControlLabel from 'react-bootstrap/ControlLabel';

export class FieldFormInput extends Component {

  render () {
    const { placeholder, type, input, meta, required} = this.props;

    const hasError = this.props.meta.error && this.props.meta.touched;
    const isRequired = () => {
        // console.log(required);
        if (required) {
            return (
                <FormControl required 
                    type={type} 
                    placeholder={placeholder} 
                    value={input.value} 
                    onChange={input.onChange} 
                    isInvalid={hasError}/>
            );
        } else {
            return (
                <FormControl 
                    type={type} 
                    placeholder={placeholder} 
                    value={input.value} 
                    onChange={input.onChange} />
            );
        }
    }

    return (
      <FormGroup controlId={input.name} validationState={meta.error ? 'error' : 'success'}>
        <Form.Label>{this.props.children}</Form.Label>
        {isRequired()}
        <Form.Control.Feedback type="invalid">
            {this.props.meta.error}
        </Form.Control.Feedback>
      </FormGroup>
    );
  }
}

export class FieldFormCheckbox extends Component {
    
    render () {
        const { placeholder, type, input, meta, required} = this.props;
        return (
            <Form.Group controlId={input.name}>
                <Form.Label>{this.props.children}</Form.Label>
                <FormControl 
                    // as="checkbox"
                    type={type} 
                    placeholder={placeholder} 
                    // value={input.value} 
                    onChange={input.onChange} />
            </Form.Group>
            
        );
    }
}