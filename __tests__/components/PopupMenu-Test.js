import {fireEvent, render} from "@testing-library/react-native";
import React from "react";
import PopupMenu from "../../src/components/PopupMenu";
import {logout} from "../../src/store/login/LoginAction";

jest.mock("react-redux", () => ({
    useSelector: jest.fn(),
    useDispatch: jest.fn(),
}));
// const mockSetState = jest.fn();
//
// jest.mock('react', () => ({
//     ...jest.requireActual('react'),
//     useState: (initial=true) => [initial, mockSetState]
// }));
describe('Popup Menu Component', () => {

    it('create popupmenu component properly', () => {
        render(<PopupMenu/>);
    })
    it('show modal when clicked', () => {
        const {getByA11yHint} = render(<PopupMenu/>);
        const popUpMenu = getByA11yHint('button');
        fireEvent.press(popUpMenu);
        const modal = getByA11yHint('modal');
        expect(modal.props).toMatchObject({
            visible: true,
        });
    })
    it('close modal when clicked everywhere', () => {
        const {getByA11yHint} = render(<PopupMenu/>);
        const popUpMenu = getByA11yHint('button');
        fireEvent.press(popUpMenu);
        fireEvent.press(popUpMenu);
        const modal = getByA11yHint('modal');
        expect(modal.props).toMatchObject({
            visible: false,
        });
    })
});
