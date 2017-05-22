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
        console.log(typeof marked(this.props.outputValue))
        return (
            <div style={previewerStyle}>
                <div style={pStyle} dangerouslySetInnerHTML={{__html: marked(this.props.outputValue)}}></div>
            </div>
        );
    };
}

module.exports = Marked;