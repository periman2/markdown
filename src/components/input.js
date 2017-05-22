var React = require("react");

var inputStyle = {
    width: "30%",
    minHeight: "400px",
    textAlign: "left"
}

class MarkDownInput extends React.Component {

    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <textarea style={inputStyle} onChange={this.props.onInputChange}></textarea>
            </div>
        );
    }
}

module.exports = MarkDownInput;