
import * as React from 'react';
import {UserModel} from "../model/user.model";
import * as update   from 'immutability-helper'
import StorageService from "../services/storage";
import Flexbox from 'flexbox-react';
import DashboardComponent from "./DashboardComponent";


interface LoginState {
    user: UserModel;
    error: string;
    isLoggedIn:boolean;
}

export default class LoginComponent extends React.Component<{}, LoginState> {
    tempUser:UserModel = null;
    constructor() {
        super();
        this.state = { user: null , error: null, isLoggedIn: false};
    }

    componentDidMount() {
        this.getLoggedInUser();
        if (!this.tempUser)
            this.setState({ user: new UserModel() });
        else {
            this.setState({user: this.tempUser});
            let userKey = this.tempUser.userName + this.tempUser.password;
            StorageService.updateActive(userKey);
        }

    }

    onUserNameChange($event:any) {
        this.setState({user: update(this.state.user, {userName: {$set: $event.target.value}})});
    }

    onPasswordChange($event:any) {
        this.setState({user: update(this.state.user, {password: {$set: $event.target.value}})});
    }

    onSubmit() {
        if (!this.state.user){
            this.setState({user: new UserModel(), error: 'Please enter valid user name'});
            return;
        }
        if (!this.state.user.userName.length){
            this.setState({error: 'Please enter valid user name'});
            return;
        }
        if (!this.state.user.password.length) {
            this.setState({error: 'Please enter password!'});
            return;
        }
        let userKey:string = this.state.user.userName + this.state.user.password;
        let existsUser:UserModel = StorageService.getItem(userKey);
        if (existsUser) {
            this.setState({user: existsUser});
        } else
            StorageService.setItem(userKey, this.state.user);
        StorageService.updateActive(userKey);
        this.setState({isLoggedIn:true});
    }

    onLogOut() {
        StorageService.updateActive(this.state.user.userName + this.state.user.password);
        this.setState({user:null, isLoggedIn:false, error: null});
        this.setState({user:new UserModel()});
        this.tempUser = null;
    }

    getLoggedInUser() {
        let loggedInUser:UserModel = StorageService.getActiveUser();
        if (loggedInUser) {
            this.setState({isLoggedIn:true});
            this.tempUser = loggedInUser;
        }
    }

    render() {
        return (
        this.state.isLoggedIn ?
            <Flexbox flexDirection="column" >
                <Flexbox element="header" height="60px" justifyContent="center">
                    <h4>Welcome {this.state.user.userName}!</h4>
                </Flexbox>
                <button className="logout-button" onClick={this.onLogOut.bind(this)}>Log Out</button>
                <DashboardComponent user={this.state.user}/>
            </Flexbox>
            :
         <Flexbox flexDirection="column" minHeight="50vh" justifyContent="center">
            <Flexbox element="header" height="60px" justifyContent="center">
                <h4>Hello Guest, please login</h4>
            </Flexbox>

            <Flexbox flexDirection="column" className="center-component" >
                <input id="user-name" className="default-input" placeholder="userName" type="text" onChange={($event:any) => this.onUserNameChange($event)}/>
                <input id ="password" className="default-input" placeholder="password"  type="password" onChange={($event:any) => this.onPasswordChange($event)}/>
                <button id="submit" className="default-button" onClick={this.onSubmit.bind(this)}>Let me in.</button>
                {
                    this.state.error ? <span className="error-text">{this.state.error}</span> : null
                }
            </Flexbox>

        </Flexbox>);
    }
}
