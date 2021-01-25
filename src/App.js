import React from 'react';
import { Card, Col, Container, Navbar, Row } from 'react-bootstrap';
import BinToDec from './Components/Converter/BinToDec';
import DecToBin from './Components/Converter/DecToBin';
import { Ip,  IpResults, Device, DeviceResults} from './Components/Subnet';
import { ip_subnet_calculator, device_subnet_calculator } from './Utils/Subnet';

class App extends React.Component {

  state = {
    ipSubnet: null,
    deviceSubnet: null
  };

  handleIpSubnet = value => {
    
    const newSubnet = ip_subnet_calculator( value );

    this.setState({ ipSubnet: newSubnet });
  };

  handleDeviceSubnet = value => {
    
    const newSubnet = device_subnet_calculator( value );

    this.setState({ deviceSubnet: newSubnet });
  };

  render(){

    const { ipSubnet, deviceSubnet } = this.state;

    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">URM - Zadaća</Navbar.Brand>
        </Navbar>
        <Container fluid>
          <Row>
            <Col xs={12} lg={4}>
              <Card style={{ marginTop: '20px' }}>
                <Card.Header as="h5">Konvertor</Card.Header>
                <Card.Body>

                  <Card.Title>Binarni u Dekadski</Card.Title>
                  <BinToDec />

                </Card.Body>

                <Card.Body>

                  <Card.Title>Dekadski u Binarni</Card.Title>
                  <DecToBin />
                  
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} lg={4}>
              <Card style={{ marginTop: '20px' }}>
                <Card.Header as="h5">Subnetiranje - IP adresa &amp; Subnet maska</Card.Header>
                <Card.Body>

                  <Ip addIpSubnet={this.handleIpSubnet}/>

                </Card.Body>
                {ipSubnet != null
                  ? <Card.Body>
                    	<Card.Title>Rezultat</Card.Title>
                        <IpResults ipSubnet={ipSubnet} />
                    </Card.Body>
                  : ''
                }
                
              </Card>
            </Col>

            <Col xs={12} lg={4} >
              <Card style={{ marginTop: '20px' }}>
                <Card.Header as="h5">Subnetiranje - broj uređaja</Card.Header>
                <Card.Body>

                  <Device addDeviceSubnet={this.handleDeviceSubnet} />

                </Card.Body>
                {deviceSubnet != null
                  ? <Card.Body>
                    	<Card.Title>Rezultat</Card.Title>
                        <DeviceResults deviceSubnet={deviceSubnet} />
                    </Card.Body>
                  : ''
                }
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
