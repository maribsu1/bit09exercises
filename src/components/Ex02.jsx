import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";

export const Ex02 = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch("https://random-d.uk/api/v2/random")
      .then((response) => response.json())
      .then((data) => setImageUrl(data.url));
  }, []);

  const handleClick = () => {
    fetch("https://random-d.uk/api/v2/random")
      .then((response) => response.json())
      .then((data) => setImageUrl(data.url));
  };

  return (
    <div>
    <br />
    <h1>Llamar una API</h1>
    <div className="d-flex justify-content-center align-items-center" style={{ marginTop: "50px" }}>
      <Card className="text-center" bg="secondary" style={{ height: "100%"}}>
        <Card.Img variant="top" src={imageUrl} style={{ width: 300, height: 250, margin: "auto" }} />
        <Card.Body>
          <Button variant="dark" onClick={handleClick}>
            Cambiar imagen
          </Button>
          <br />
        </Card.Body>
      </Card>
    </div>
    </div>
  );
};
