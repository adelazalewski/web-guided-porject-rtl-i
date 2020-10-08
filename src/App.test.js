import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test('renders App without errors', () => {
  render(<App />);
})
//render renders a componenet in a virtual DOM as a DOM node

//jest syntax test here the test outter frame work and expect
//the queries and get is react testing library
test('renders the form header', () => {
  render(<App />);
  const header = screen.getByText(/add new animal/i);
  console.log(header);
  expect(header).toBeInTheDocument();

  //adding assertions
  expect(header).toBeTruthy();
  expect(header).toHaveTextContent(/add new animal/i);

  //negative assertions
  expect(header).not.toBeFalsy();
  expect(header).not.toHaveTextContent(/add new giraffe/i)
})