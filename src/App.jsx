import React, { useEffect, useState } from "react";
import Recipes from "./Recipes.jsx";
import { Form, Navbar, Button, Container, Row } from "react-bootstrap";
import "./App.css";

function App() {
  const APP_ID = "abdacc0f";
  const APP_KEY = "5173d8d14676a43a25177e8232dbaa77";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  function handleSearch(event) {
    setSearch(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    setQuery(search);
    setSearch("");
  }

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  console.log(query);
  return (
    <div>
      <Navbar className="nav" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className="nav-brand">
            DaBam Recipes
          </Navbar.Brand>
          <Form className="d-flex" onSubmit={handleSubmit}>
            <input
              className="d-flex"
              onChange={handleSearch}
              name="search"
              type="text"
              placeholder="search.."
              value={search}
            />
            <Button variant="outline-success" type="submit">
              search
            </Button>
          </Form>
        </Container>
      </Navbar>
      <Container>
        <Row>
          {recipes.map((recipe, index) => (
            <Recipes
              key={index}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              imgURL={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}
export default App;
