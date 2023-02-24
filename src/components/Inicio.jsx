import React from 'react';
import Figure from 'react-bootstrap/Figure';
import meImage from './img/me.png';

export const Inicio = () => {
  return (
    <section className="d-flex flex-column">
      <h1 className="text-center">¡Bienvenidos!</h1>
      <Figure className="text-center">
        <Figure.Image
          roundedCircle
          width={171}
          height={180}
          alt="171x180"
          src={meImage}
          style={{ border: '5px solid gray' }}
        />
        <Figure.Caption style={{ fontSize: '50px', color: 'lightgray' }}>
          Mariangel Socorro
        </Figure.Caption>
      </Figure>
    </section>
  );
};
