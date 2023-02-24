import React, { useState, useEffect } from "react";
import imagen from "./img/imagen.jpg";

export const Ex03 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <br />
      <h1>Directorio telefónico</h1>
      <br />
      <div className="card-group">
        {users.map((user) => (
          <div className="card bg-secondary card-hover" key={user.id}>
            <div className="card-body" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={imagen} alt="Imagen de usuario" style={{ width: "80px", height: "auto" }} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">
                Teléfono: {user.phone} <br />
                Correo electrónico: {user.email}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .card-hover:hover {
          transform: scale(1.1);
        }
      `}</style>
    </>
  );
};
