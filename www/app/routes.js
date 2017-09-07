"use strict";
exports.__esModule = true;
var React = require("react");
var react_router_1 = require("react-router");
var HomeView_1 = require("./views/HomeView");
var NotFoundView_1 = require("./views/NotFoundView");
exports.RouteMap = function () { return (React.createElement("div", { className: "app-background" },
    React.createElement(react_router_1.Switch, null,
        React.createElement(react_router_1.Route, { path: "/", exact: true, component: HomeView_1["default"] }),
        React.createElement(react_router_1.Route, { component: NotFoundView_1["default"] })))); };
