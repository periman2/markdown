var React = require("react");

var headerStyle = {
    marginTop: "40px",
    textAlign: "center"
}

var Header = function() { 
    return (
        <div style={headerStyle}>
            <h2>FreeCodeCamp's Markdown Previewer</h2>
        </div>
    );
}

module.exports = Header;