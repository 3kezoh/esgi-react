import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Recipes from "./Recipes";
import Container from "./Container";
import Counter from "./Counter";

const recipes = [
  {
    id: 1,
    title: "Recipe 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae molestiae neque, nobis culpa dolorum aperiam eveniet consequuntur velit! Soluta iusto totam praesentium beatae reprehenderit est debitis voluptatum similique repudiandae.",
  },
  {
    id: 2,
    title: "Recipe 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae molestiae neque, nobis culpa dolorum aperiam eveniet consequuntur velit! Soluta iusto totam praesentium beatae reprehenderit est debitis voluptatum similique repudiandae.",
  },
  {
    id: 3,
    title: "Recipe 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae molestiae neque, nobis culpa dolorum aperiam eveniet consequuntur velit! Soluta iusto totam praesentium beatae reprehenderit est debitis voluptatum similique repudiandae.",
  },
  {
    id: 4,
    title: "Recipe 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur repudiandae molestiae neque, nobis culpa dolorum aperiam eveniet consequuntur velit! Soluta iusto totam praesentium beatae reprehenderit est debitis voluptatum similique repudiandae.",
  },
];

const App = () => (
  <Container>
    <Navbar />
    <Recipes recipes={recipes} />
    <Counter counter={0} step={0} />
    <Footer />
  </Container>
);

export default App;
