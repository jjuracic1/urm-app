import React from 'react';
import { Button, Form } from 'react-bootstrap';

class Device extends React.Component {
    state = {
        devices: ''
    };

    handleChange = event => {
        const devices = event.target.value;

        if(devices.match("^[0-9 ]*$") !== null) {
            this.setState({ devices });
        }
    };

    handleAddTodoClick = event => {
        event.preventDefault();
        
        const { devices } = this.state;
        const { addDeviceSubnet } = this.props;

        if (!devices || !devices.trim()) return;

        addDeviceSubnet(devices);

        this.setState({ devices: '' });
        
    };
    
    render(){

        const { devices } = this.state;

        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>Broj uređaja</Form.Label>
                        <Form.Control 
                                placeholder="Unesite broj uređaja"
                                onChange={this.handleChange}
                                value={devices} 
                            />
                    </Form.Group>
                    <Button 
                        variant="primary" 
                        type="submit"
                        onClick={this.handleAddTodoClick}
                    >
                        Izračunaj
                    </Button>
                </Form>
            </div>
        );
    }
}

export default Device;