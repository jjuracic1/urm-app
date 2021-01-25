import React from 'react';
import { Button, Form } from 'react-bootstrap';

const IpSubnetCalculator = require( 'ip-subnet-calculator' );


class Ip extends React.Component {
    state = {
        ip: '',
        subnet: ''
    };

    refIp = React.createRef();
    refSubnet = React.createRef();

    handleIpChange = event => {
        const ip = event.target.value;

        this.setState({ ip });

    };

    handleSubnetChange = event => {
        const subnet = event.target.value;

        this.setState({ subnet });

    };

    handleAddTodoClick = event => {
        event.preventDefault();
        
        const { ip, subnet } = this.state;
        const { addIpSubnet } = this.props;

        if (!ip || !ip.trim()) return;
        if(!IpSubnetCalculator.isIp( ip )){
            alert('Unesite ispravnu IP adresu');
            this.refIp.current.focus();
            return;
        }

        if (!subnet || !subnet.trim()) return;
        if(!IpSubnetCalculator.isIp( subnet )){
            alert('Unesite ispravnu Subnet masku');
            this.refSubnet.current.focus();
            return;
        }

        addIpSubnet({ ip: ip,  subnet: subnet});

        this.setState({ ip: '',  subnet: ''});
        
    };
    
    render(){

        const { ip, subnet } = this.state;

        return (
            <div>
                <Form>
                    <Form.Group>
                        <Form.Label>IP adresa</Form.Label>
                        <Form.Control 
                                placeholder="Unesite ip adresu (npr. 127.0.0.0)"
                                onChange={this.handleIpChange}
                                ref={this.refIp}
                                value={ip} 
                            />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Subnet maska</Form.Label>
                        <Form.Control 
                                placeholder="Unesite subnet masku (npr. 255.255.0.0)"
                                onChange={this.handleSubnetChange}
                                ref={this.refSubnet}
                                value={subnet} 
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

export default Ip;