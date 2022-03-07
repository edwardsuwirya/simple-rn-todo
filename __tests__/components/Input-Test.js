import {fireEvent, render} from "@testing-library/react-native";
import React from "react";
import Input from "../../src/components/Input";

describe('Input Component', () => {
    it('create input component properly', () => {
        render(<Input/>);
    })
    it('create input component properly', () => {
        const onInputChange = jest.fn();
        const {getAllByA11yLabel} = render(<Input onInputChange={onInputChange}/>);
        const todoInputs = getAllByA11yLabel('todoInput');

        fireEvent.changeText(todoInputs[0], 'a1');
        expect(onInputChange).toBeCalledWith('a1');
    })
});
