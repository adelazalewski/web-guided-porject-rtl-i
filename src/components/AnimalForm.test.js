import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AnimalForm from "./AnimalForm";

test('renders AnimalForm without errors', () => {
    render(<AnimalForm />);

});
test('user can fill out and submit the form',async  () => {
    //async helps the test wait for any async function calls happening like wating on an api
    //render the component
    render(<AnimalForm />);

    // query the virtual DOM, so we can work with them
    //our test are looking at the dom tree of elements
    //find is for asyncronous + await
    //get is by default
    const speciesInput = screen.getByLabelText(/species/i);
    const ageInput = screen.getByLabelText(/age/i);
    const notesInput = screen.getByLabelText(/notes/i);

    //fill out the form
fireEvent.change(speciesInput, {target: {value: "bear"}});
fireEvent.change(ageInput, {target: {value: 90}});
fireEvent.change(notesInput, {target: {value: "hates kids"}});


    //sanity check: assert that the inputs contain the values typed in
    //jest dom matchers
   expect(speciesInput).toHaveValue("bear");
   expect(ageInput).toHaveValue("90");
   expect(notesInput).toHaveValue("hates kids");



    //submit the form (careful state changes can happen asynchronously)
const button = screen.getByRole("button", {name: /submit/i});
fireEvent.click(button);

    //Assert that the animal was added to the list
    const newAnimal = await screen.findByText(/bear/i);
expect(newAnimal).not.toHaveStyle({display: 'none'});
})