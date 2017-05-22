var React = require("react");
var marked = require("marked");

var previewerStyle = {
    border: "2px solid black",
    height: "400px",
    width: "40%",
    float: "left"
}

var pStyle = {
    padding: '10px'
}

class Marked extends React.Component {
    render() {
        return (
            <div style={previewerStyle}>
                <p style={pStyle}>{marked(this.props.outputValue)}</p>
            </div>
        );
    };
}

module.exports = Marked;