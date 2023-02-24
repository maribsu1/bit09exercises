import React, { useEffect, useState } from 'react';
import { Card, Badge, Button } from 'react-bootstrap';

export const Ex01 = () => {
  const [contador, setContador] = useState(0);
  const [color, setColor] = useState(null);

  useEffect(() => {
    if (contador > 0) setColor('info');
    else if (contador < 0) setColor('danger');
    else setColor('secondary');
  }, [contador]);

  return (
    <div>
    <br />
    <h1>Contador</h1>
    <br />
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginBottom: '10px' }}>
     <Card style={{ width: '200px', backgroundColor: '#8E989B', border: '1px solid black' }}>
        <Card.Body>
          <br />
          <Badge bg={color} style={{ fontSize: '40px' }}>{contador}</Badge>
          <br />
          <br />
          <Button variant='outline-danger' style={{ marginRight: '4px' }} onClick={() => setContador(contador - 1)}>
            <i className="bi bi-caret-down-fill"></i>
          </Button>
          <Button variant='outline-dark' style={{ marginRight: '4px' }} onClick={() => setContador(0)}>
            <i className="bi bi-reception-0"></i>
          </Button>
          <Button variant='outline-success' onClick={() => setContador(contador + 1)}>
            <i className="bi bi-caret-up-fill"></i>
          </Button>
        </Card.Body>
      </Card>
    </div>
    </div>
    
  );
};
