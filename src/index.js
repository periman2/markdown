var React = require('react');
var ReactDom = require("react-dom");
var Header = require("./components/header");
var Input = require("./components/input")

ReactDom.render(
    <div>
        <Header />
        <Input />
    </div>,
    document.getElementById("root")
);