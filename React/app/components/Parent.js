// Include React
var React = require("react");

// Here we include all of the sub-components
var Child = require("./Child");

// This is the main component. It includes the logo.
// Whenever an event takes place it will communicate the event to all other sub components.
var Parent = React.createClass({

  // Here we set a generic state associated with the number of clicks
  getInitialState: function() {
    return {
      text: ""
    };
  },
 // This function will respond to any text to be rendered
  handleChange: function(event) {
    // Here we create syntax to capture any change in text.
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  // Here we render the function
  render: function() {
    return (
    	<div className="row">
           <div className="logoBlk">Logo Variant</div>
        </div>
           
    );
  }
});

// Export the component back for use in other files
module.exports = Parent;