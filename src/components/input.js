var React = require("react");

var inputStyle = {
    textAlign: "center",
    width: "30%",
    height: "400px"
}

class MarkDownInput extends React.Component {
    render() {
        return (
            <form >
                <input style={inputStyle} type='text' />
            </form>
        );
    }
}

module.exports = MarkDownInput;