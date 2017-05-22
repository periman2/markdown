var React = require("react");
var Input = require("./input")
var Previewer = require("./previewer");

class HomePage extends React.Component { 
    handleInputChange(event) {
        var value = event.target.value;
        console.log(value);
    }
    render() {
        return (
            <div>
                <Input onInputChange={this.handleInputChange} />
                <Previewer />
            </div>
        )
    }
}

module.exports = HomePage;