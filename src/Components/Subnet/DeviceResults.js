import React from 'react';
import { ListGroup } from 'react-bootstrap';


function DeviceResults({ deviceSubnet }) {

  return (
    <ListGroup>
      <ListGroup.Item>Broj uređaja: <b>{ deviceSubnet.devices }</b></ListGroup.Item>
      <ListGroup.Item>IP adresa mreže: <b>{ deviceSubnet.ipLowStr }</b></ListGroup.Item>
      <ListGroup.Item>Subnet maska: <b>{ deviceSubnet.prefixMaskStr }</b></ListGroup.Item>
      <ListGroup.Item>Prefiks: <b>{ deviceSubnet.prefixSize }</b></ListGroup.Item>
    </ListGroup>
  );
}

export default DeviceResults;