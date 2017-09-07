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
var MainPage = /** @class */ (function (_super) {
    __extends(MainPage, _super);
    function MainPage(props) {
        return _super.call(this, props) || this;
    }
    MainPage.prototype.render = function () {
        // Add helmet to control title at the view level
        // const helmet = Helmet.rewind();
        var suffix = this.props.min ? '.min' : '';
        return (React.createElement("html", { lang: "en-us" },
            React.createElement("head", null,
                React.createElement("meta", { charSet: "utf-8" }),
                React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
                React.createElement("title", null, "Starter"),
                React.createElement("link", { rel: "shortcut icon", href: "/favicon.ico" }),
                React.createElement("link", { href: "/styles/app" + suffix + ".css", rel: "stylesheet", media: "screen" }),
                React.createElement("link", { href: "/styles/site" + suffix + ".css", rel: "stylesheet", media: "screen" })),
            React.createElement("body", null,
                React.createElement("div", { id: "body", dangerouslySetInnerHTML: { __html: this.props.content } }),
                React.createElement("script", { src: "/scripts/vendor" + suffix + ".js" }),
                React.createElement("script", { src: "/scripts/app" + suffix + ".js" }),
                React.createElement("script", { src: "/scripts/site" + suffix + ".js" }))));
    };
    return MainPage;
}(React.Component));
exports["default"] = MainPage;
