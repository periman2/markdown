var React = require("react");
var marked = require("marked");

var previewerStyle = {
    height: "400px",
    width: "40%",
    float: "left",
    overflowX: 'auto',
    overflowY: 'auto',
    marginLeft: "50px"
}

var pStyle = {
    padding: '10px'
}

class Marked extends React.Component {
    render() {
        console.log(typeof marked(this.props.outputValue))
        return (
            <div className="preview" style={previewerStyle}>
                <div  style={pStyle} dangerouslySetInnerHTML={{__html: marked(this.props.outputValue)}}></div>
            </div>
        );
    };
}

module.exports = Marked;