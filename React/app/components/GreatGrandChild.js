// Include React
var React = require("react");

// Create the GrandChild Component
var GreatGrandChild = React.createClass({
  render: function() {
    return (

      <div className="col-12">
        <div className="col-4">
          <div className="iconBlk">Icon</div>
        </div>
        <div className="col-4">
          <h2>3rd HEADLINE</h2>
          <ul className="links">
            <li><a href="index.html">FIRST NAV LINK</a></li>
            <li><a href="index.html">SECOND NAV LINK</a></li>
            <li><a href="index.html">THIRD LINK</a></li>
          </ul>
      </div>     
     <div className="panel-body text-center">

          {/*
            This component will multiply 4 with it's parent's number on (this.props.number),
            add, the result to it's own number on (this.state.clicks), and then display the result in the <h1> tag
          */}
          <h1>{this.props.text}</h1>

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = GreatGrandChild;