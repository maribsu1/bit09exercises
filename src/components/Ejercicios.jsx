import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Ex01 } from './Ex01';
import { Ex02 } from './Ex02';
import { Ex03 } from './Ex03';

export const Ejercicios = () => {
  const [exercise, setExercise] = useState(null);

  return (
    <section>
      {!exercise ? (
        <div className="text-center">
          <br />
          <Button variant="dark" onClick={() => setExercise(<Ex01 />)}>
            Ejercicio 1 - Contador
          </Button>
          <br />
          <br />
          <Button variant="dark" onClick={() => setExercise(<Ex02 />)}>
            Ejercicio 2 - Llamar una API
          </Button>
          <br />
          <br />
          <Button variant="dark" onClick={() => setExercise(<Ex03 />)}>
            Ejercicio 3 - Directorio telefónico
          </Button>
        </div>
      ) : (
        <div className="text-center">
          {exercise}
          <br />
          <br />
          <Button variant="dark" onClick={() => setExercise(null)}>
            Cerrar
          </Button>
        </div>
      )}
    </section>
  );
};
