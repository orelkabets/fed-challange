import * as React from 'react';
import { create } from 'react-test-renderer';
import {shallow} from 'enzyme';
import LoginComponent from 'LoginComponent';
import {UserModel} from "../../model/user.model";


describe('LoginComponent', () => {
    const fakeUser:UserModel = {
        userName: 'FOO',
        password: 'BAZ',
        userImage: './userImage.png',
        active: false,
        userNameCords:{x:0, y:0},
        userImageCords:{x:0, y:0}
    };
    const invalidUser:UserModel = {
        userName: 'FOO',
        password: '',
        userImage: './userImage.png',
        active: false,
        userNameCords:{x:0, y:0},
        userImageCords:{x:0, y:0}
    };

    it('renders without crashing', () => {
        const tree = create(<LoginComponent/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Successful Login', ()=> {
        const component = shallow(
            <LoginComponent/>
        );
        component.setState({user: fakeUser});
        component.find('#submit').simulate('click');
        let storedUser:UserModel = JSON.parse(localStorage.getItem(fakeUser.userName+fakeUser.password));
        expect(storedUser.userName).toEqual(fakeUser.userName);
    });

    it('Login Failure', ()=> {
        const component = shallow(
            <LoginComponent/>
        );
        component.setState({user: invalidUser});
        component.find('#submit').simulate('click');
        expect(localStorage.getItem(invalidUser.userName+invalidUser.password)).toBe(null);
    });
});