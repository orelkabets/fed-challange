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
var user_model_1 = require("../model/user.model");
var update = require("immutability-helper");
var storage_1 = require("../services/storage");
var flexbox_react_1 = require("flexbox-react");
var DashboardComponent_1 = require("./DashboardComponent");
var LoginComponent = /** @class */ (function (_super) {
    __extends(LoginComponent, _super);
    function LoginComponent() {
        var _this = _super.call(this) || this;
        _this.tempUser = null;
        _this.state = { user: null, error: null, isLoggedIn: false };
        return _this;
    }
    LoginComponent.prototype.componentDidMount = function () {
        this.getLoggedInUser();
        if (!this.tempUser)
            this.setState({ user: new user_model_1.UserModel() });
        else {
            this.setState({ user: this.tempUser });
            var userKey = this.tempUser.userName + this.tempUser.password;
            storage_1["default"].updateActive(userKey);
        }
    };
    LoginComponent.prototype.onUserNameChange = function ($event) {
        this.setState({ user: update(this.state.user, { userName: { $set: $event.target.value } }) });
    };
    LoginComponent.prototype.onPasswordChange = function ($event) {
        this.setState({ user: update(this.state.user, { password: { $set: $event.target.value } }) });
    };
    LoginComponent.prototype.onSubmit = function () {
        if (!this.state.user) {
            this.setState({ user: new user_model_1.UserModel(), error: 'Please enter valid user name' });
            return;
        }
        if (!this.state.user.userName.length) {
            this.setState({ error: 'Please enter valid user name' });
            return;
        }
        if (!this.state.user.password.length) {
            this.setState({ error: 'Please enter password!' });
            return;
        }
        var userKey = this.state.user.userName + this.state.user.password;
        var existsUser = storage_1["default"].getItem(userKey);
        if (existsUser) {
            this.setState({ user: existsUser });
        }
        else
            storage_1["default"].setItem(userKey, this.state.user);
        storage_1["default"].updateActive(userKey);
        this.setState({ isLoggedIn: true });
    };
    LoginComponent.prototype.onLogOut = function () {
        storage_1["default"].updateActive(this.state.user.userName + this.state.user.password);
        this.setState({ user: null, isLoggedIn: false, error: null });
        this.setState({ user: new user_model_1.UserModel() });
        this.tempUser = null;
    };
    LoginComponent.prototype.getLoggedInUser = function () {
        var loggedInUser = storage_1["default"].getActiveUser();
        if (loggedInUser) {
            this.setState({ isLoggedIn: true });
            this.tempUser = loggedInUser;
        }
    };
    LoginComponent.prototype.render = function () {
        var _this = this;
        return (this.state.isLoggedIn ?
            React.createElement(flexbox_react_1["default"], { flexDirection: "column" },
                React.createElement(flexbox_react_1["default"], { element: "header", height: "60px", justifyContent: "center" },
                    React.createElement("h4", null,
                        "Welcome ",
                        this.state.user.userName,
                        "!")),
                React.createElement("button", { className: "logout-button", onClick: this.onLogOut.bind(this) }, "Log Out"),
                React.createElement(DashboardComponent_1["default"], { user: this.state.user }))
            :
                React.createElement(flexbox_react_1["default"], { flexDirection: "column", minHeight: "50vh", justifyContent: "center" },
                    React.createElement(flexbox_react_1["default"], { element: "header", height: "60px", justifyContent: "center" },
                        React.createElement("h4", null, "Hello Guest, please login")),
                    React.createElement(flexbox_react_1["default"], { flexDirection: "column", className: "center-component" },
                        React.createElement("input", { id: "user-name", className: "default-input", placeholder: "userName", type: "text", onChange: function ($event) { return _this.onUserNameChange($event); } }),
                        React.createElement("input", { id: "password", className: "default-input", placeholder: "password", type: "password", onChange: function ($event) { return _this.onPasswordChange($event); } }),
                        React.createElement("button", { id: "submit", className: "default-button", onClick: this.onSubmit.bind(this) }, "Let me in."),
                        this.state.error ? React.createElement("span", { className: "error-text" }, this.state.error) : null)));
    };
    return LoginComponent;
}(React.Component));
exports["default"] = LoginComponent;
