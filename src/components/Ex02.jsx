import React, { useState, useEffect } from "react";
import { Button, Card, Spinner } from "react-bootstrap";

export const Ex02 = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://random-d.uk/api/v2/random")
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.url);
        setLoading(false);
      });
  }, []);

  const handleClick = () => {
    setLoading(true);
    fetch("https://random-d.uk/api/v2/random")
      .then((response) => response.json())
      .then((data) => {
        setImageUrl(data.url);
        setLoading(false);
      });
  };

  return (
    <div>
      <br />
      <h1>Llamar una API</h1>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ marginTop: "50px" }}
      >
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          <Card className="text-center" bg="secondary" style={{ height: "100%" }}>
            <Card.Img
              variant="top"
              src={imageUrl}
              style={{ width: 300, height: 250, margin: "auto" }}
            />
            <Card.Body>
              <Button variant="dark" onClick={handleClick}>
                Cambiar imagen
              </Button>
              <br />
            </Card.Body>
          </Card>
        )}
      </div>
    </div>
  );
};
