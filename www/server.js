"use strict";
exports.__esModule = true;
var express = require("express");
var errorHandler = require("errorhandler");
var http = require("http");
var path = require("path");
var React = require("react");
var ReactDOMServer = require("react-dom/server");
var react_router_1 = require("react-router");
var MainPage_1 = require("./pages/MainPage");
var routes_1 = require("./app/routes");
var app = express();
app.set('port', process.env.PORT || 3000);
var env = process.env.NODE_ENV || 'development';
var min = true;
if ('development' === env) {
    console.log('Running in development mode');
    app.use(errorHandler());
    min = false;
}
app.use(express.static(path.join(__dirname, '.')));
app.use(function (req, res, next) {
    var content = ReactDOMServer.renderToString(React.createElement(react_router_1.StaticRouter, { location: req.url, context: {} },
        React.createElement(routes_1.RouteMap, null)));
    var html = ReactDOMServer.renderToString(React.createElement(MainPage_1["default"], { content: content, min: min }));
    res.send('<!DOCTYPE html>\r\n' + html);
});
http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
