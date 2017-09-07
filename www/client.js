"use strict";
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var react_router_dom_1 = require("react-router-dom");
var routes_1 = require("./app/routes");
ReactDOM.render(React.createElement(react_router_dom_1.BrowserRouter, null,
    React.createElement(routes_1.RouteMap, null)), document.getElementById('body'));
