var React = require('react');
var ReactDom = require("react-dom");
var Header = require("./components/header");
var HomePage = require("./components/homepage")

ReactDom.render(
    <div>
        <Header />
        <HomePage />
    </div>,
    document.getElementById("root")
);