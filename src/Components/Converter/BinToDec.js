import React from 'react';
import { Col, Form } from 'react-bootstrap';
import { bin_to_dec } from '../../Utils/Converter';

class BinToDec extends React.Component {
    state = {
        input: '',
        output: ''
    };

    handleChange = event => {
        const input = event.target.value;

        if(input.match("^[01 ]*$") !== null) {
            this.setState({ input });

            if(input !== ''){
                const output = bin_to_dec(input);

                this.setState({ output });
            } else {
                this.setState({ output: '' });
            }
        }
    };
    
    render(){

        const { input, output } = this.state;

        return (
            <div>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Control 
                                placeholder="Unesite binarni broj"
                                onChange={this.handleChange}
                                value={input} 
                            />
                        </Col>
                        <Col xs="auto">
                            =
                        </Col>
                        <Col>
                            <Form.Control 
                                placeholder="Rezultat"
                                value={output} 
                                readOnly 
                            />
                        </Col>
                    </Form.Row>
                </Form>
            </div>
        );
    }
}

export default BinToDec;