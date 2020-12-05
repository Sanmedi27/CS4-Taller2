import React from "react";
import { Button, Form } from "react-bootstrap";
import useSelect from "../hooks/useSelect";

const Formulario = () => {
  const options = [
    { value: 1, label: "Action" },
    { value: 2, label: "Adventure" },
    { value: 3, label: "Cars" },
    { value: 4, label: "Comedy" },
    { value: 5, label: "Dementia" },
    { value: 6, label: "Demons" },
    { value: 7, label: "Mystery" },
    { value: 8, label: "Drama" },
    { value: 9, label: "Ecchi" },
    { value: 10, label: "Fantasy" },
    { value: 11, label: "Game" },
    { value: 35, label: "Harem" },
    { value: 12, label: "Hentai" },
    { value: 13, label: "Historical" },
    { value: 14, label: "Horror" },
    { value: 43, label: "Josei" },
    { value: 15, label: "Kids" },
    { value: 16, label: "Magic" },
    { value: 17, label: "Martial_Arts" },
    { value: 18, label: "Mecha" },
    { value: 38, label: "Military" },
    { value: 19, label: "Music" },
    { value: 20, label: "Parody" },
    { value: 39, label: "Police" },
    { value: 40, label: "Psychological" },
    { value: 22, label: "Romance" },
    { value: 21, label: "Samurai" },
    { value: 23, label: "School" },
    { value: 24, label: "Sci-Fi" },
    { value: 42, label: "Seinen" },
    { value: 25, label: "Shoujo" },
    { value: 26, label: "Shoujo_Ai" },
    { value: 27, label: "Shounen" },
    { value: 28, label: "Shounen_Ai" },
    { value: 36, label: "Slice_of_Life" },
    { value: 29, label: "Space" },
    { value: 30, label: "Sports" },
    { value: 31, label: "Super_Power" },
    { value: 37, label: "Supernatural" },
    { value: 41, label: "Thriller" },
    { value: 32, label: "Vampire" },
    { value: 33, label: "Yaoi" },
    { value: 34, label: "Yuri" },
  ];
  const [genre, SelectGenre] = useSelect(
    "Accion",
    options,
    "Seleccionar Género"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <SelectGenre />
      </Form.Group>
      <Button variant="primary" type="submit">
        Buscar
      </Button>
    </Form>
  );
};

export default Formulario;
