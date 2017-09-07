
import * as React from 'react';
import Draggable from 'react-draggable'
import {UserModel} from "../model/user.model";
import * as update   from 'immutability-helper'
import StorageService from "../services/storage";
import Flexbox from 'flexbox-react';

interface DashboardProps {
    user: UserModel;
}

interface DashboardState {
    user: UserModel;
}

export default class DashboardComponent extends React.Component<DashboardProps, DashboardState> {
    constructor(props:any) {
        super(props);
        this.state = {user:this.props.user};
    }

    componentWillReceiveProps() {
        this.state = {user: this.props.user};
    }

    eventLogger = (e: MouseEvent, data: Object) => {
      console.log('Event: ', e);
      console.log('Data: ', data);
    };

    handleUserNameStop(e: any, data:any) {
        let cords:object = {x: data.x, y:data.y};
        this.setState({user: update(this.state.user, {userNameCords: {$set: cords}})});
        StorageService.setItem(this.state.user.userName+this.state.user.password,
            this.state.user);
    };

    handleUserImageStop(e: any, data:any) {
        let cords:object = {x: data.x, y:data.y};
        this.setState({user: update(this.state.user, {userImageCords: {$set: cords}})});
        StorageService.setItem(this.state.user.userName+this.state.user.password,
            this.state.user);
    };

    render() {
        return <Flexbox flexDirection="column" alignSelf="center" minHeight="100vh">
                <div className="draggable-padding">
                    <Draggable
                        defaultPosition={this.state ? this.state.user.userNameCords : this.props.user.userNameCords}
                        onStop={this.handleUserNameStop.bind(this)} >
                        <h4 className="draggable">{this.props.user.userName}</h4>
                    </Draggable>
                </div>
            <div className="draggable-padding">
                <Draggable defaultPosition={this.state ? this .state.user.userImageCords : this.props.user.userImageCords}
                           onStop={this.handleUserImageStop.bind(this)}>
                    <img className="draggable" src={this.props.user.userImage} />
                </Draggable>
            </div>
            </Flexbox>;
    }
}
