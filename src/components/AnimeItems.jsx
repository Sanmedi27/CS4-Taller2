import React from "react";
import { Card } from "react-bootstrap";

const AnimeItems = ({ anime }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={anime.image_url} />
      <Card.Body>
        <Card.Title>{anime.title}</Card.Title>
        <Card.Text>{anime.synopsis}</Card.Text>
        <a href={anime.url} variant="primary" target="blank">
          Continue Reading
        </a>
      </Card.Body>
    </Card>
  );
};

export default AnimeItems;
