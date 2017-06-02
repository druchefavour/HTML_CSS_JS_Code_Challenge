// Include React
var React = require("react");

var GreatGrandChild = require("./GreatGrandChild");

// Create the GrandChild Component
var GrandChild = React.createClass({
  render: function() {
    return (

      <div>
        <div className="col-4">
          <div className="iconBlk">Icon</div>
        </div>
        <div className="col-4">
          <h2>LONG HEADLINE</h2>
          <ul className="links">
            <li><a href="index.html">FIRST NAV LINK</a></li>
            <li><a href="index.html">SECOND NAV LINK</a></li>
            <li><a href="index.html">THIRD LINK</a></li>
          </ul>
      </div>     
     <div className="panel-body text-center">

          {/*
            This component will annex it's parent's text on (this.props.text),
            add, the result to it's own text on (this.state.text), and then display the result in the <h1> tag
          */}
          <h1>{this.props.text}</h1>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = GrandChild;