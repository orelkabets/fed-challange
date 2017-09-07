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
var LoginComponent_1 = require("../components/LoginComponent");
var HomeView = /** @class */ (function (_super) {
    __extends(HomeView, _super);
    function HomeView() {
        var _this = _super.call(this) || this;
        _this.state = { loaded: false };
        return _this;
    }
    HomeView.prototype.componentDidMount = function () {
        this.setState({ loaded: true });
    };
    HomeView.prototype.render = function () {
        var loading = this.state.loaded ? "" : " (loading...)";
        return React.createElement("div", { className: "app-background" },
            React.createElement(LoginComponent_1["default"], null));
    };
    return HomeView;
}(React.Component));
exports["default"] = HomeView;
