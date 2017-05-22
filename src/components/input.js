var React = require("react");

var inputStyle = {
    height: "400px",
    width: "100%"
}

var compStyle = {
    float: "left",
    width: "40%"
}

class MarkDownInput extends React.Component {
    render() {
        return (
            <div style={compStyle}>
                <textarea style={inputStyle} onChange={this.props.onInputChange}></textarea>
            </div>
        );
    }
}

module.exports = MarkDownInput;