import React from 'react';
import { ListGroup } from 'react-bootstrap';


function IpResults({ ipSubnet }) {

  return (
    <ListGroup>
      <ListGroup.Item>IP adresa mreže: <b>{ ipSubnet.ipLowStr }</b></ListGroup.Item>
      <ListGroup.Item>Broadcast adresa: <b>{ ipSubnet.ipHighStr }</b></ListGroup.Item>
      <ListGroup.Item>Prva iskoristiva adresa: <b>{ ipSubnet.ipLowStrUseful }</b></ListGroup.Item>
      <ListGroup.Item>Zadnja iskoristiva adresa: <b>{ ipSubnet.ipHighStrUseful }</b></ListGroup.Item>
      <ListGroup.Item>Subnet maska: <b>{ ipSubnet.prefixMaskStr }</b></ListGroup.Item>
      <ListGroup.Item>Prefiks: <b>{ ipSubnet.prefixSize }</b></ListGroup.Item>
    </ListGroup>
  );
}

export default IpResults;