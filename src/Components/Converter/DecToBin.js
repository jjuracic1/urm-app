import React from 'react';
import { Col, Form } from 'react-bootstrap';
import { dec_to_bin } from '../../Utils/Converter';

class DecToBin extends React.Component {
    state = {
        input: '',
        output: ''
    };

    handleChange = event => {
        const input = event.target.value;

        if(input.match("^[0-9 ]*$") !== null) {
            this.setState({ input });

            if(input !== ''){
                const output = dec_to_bin(input);

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
                                placeholder="Unesite dekadski broj"
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

export default DecToBin;