"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var react_draggable_1 = require("react-draggable");
var update = require("immutability-helper");
var storage_1 = require("../services/storage");
var flexbox_react_1 = require("flexbox-react");
var DashboardComponent = /** @class */ (function (_super) {
    __extends(DashboardComponent, _super);
    function DashboardComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.eventLogger = function (e, data) {
            console.log('Event: ', e);
            console.log('Data: ', data);
        };
        _this.state = { user: _this.props.user };
        return _this;
    }
    DashboardComponent.prototype.componentWillReceiveProps = function () {
        this.state = { user: this.props.user };
    };
    DashboardComponent.prototype.handleUserNameStop = function (e, data) {
        var cords = { x: data.x, y: data.y };
        this.setState({ user: update(this.state.user, { userNameCords: { $set: cords } }) });
        storage_1["default"].setItem(this.state.user.userName + this.state.user.password, this.state.user);
    };
    ;
    DashboardComponent.prototype.handleUserImageStop = function (e, data) {
        var cords = { x: data.x, y: data.y };
        this.setState({ user: update(this.state.user, { userImageCords: { $set: cords } }) });
        storage_1["default"].setItem(this.state.user.userName + this.state.user.password, this.state.user);
    };
    ;
    DashboardComponent.prototype.render = function () {
        return React.createElement(flexbox_react_1["default"], { flexDirection: "column", alignSelf: "center", minHeight: "100vh" },
            React.createElement("div", { className: "draggable-padding" },
                React.createElement(react_draggable_1["default"], { defaultPosition: this.state ? this.state.user.userNameCords : this.props.user.userNameCords, onStop: this.handleUserNameStop.bind(this) },
                    React.createElement("h4", { className: "draggable" }, this.props.user.userName))),
            React.createElement("div", { className: "draggable-padding" },
                React.createElement(react_draggable_1["default"], { defaultPosition: this.state ? this.state.user.userImageCords : this.props.user.userImageCords, onStop: this.handleUserImageStop.bind(this) },
                    React.createElement("img", { className: "draggable", src: this.props.user.userImage }))));
    };
    return DashboardComponent;
}(React.Component));
exports["default"] = DashboardComponent;
