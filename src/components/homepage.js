var React = require("react");
var Input = require("./input")
var Previewer = require("./previewer");

var homePageStyle = {
    marginTop: "50px",
    textAlign: "center",
    width: '90%'
}

class HomePage extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {inputValue: ""};
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        var value = event.target.value;
        this.setState({
            inputValue: value
        })
    }
    render() {
        return (
            <div style={homePageStyle}>
                <Input onInputChange={this.handleInputChange} />
                <Previewer outputValue={this.state.inputValue}/>
            </div>
        )
    }
}

module.exports = HomePage;