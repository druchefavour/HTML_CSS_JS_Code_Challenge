// Include React
var React = require("react");

// Here we include all of the sub-components
var GrandChild = require("./GrandChild");

// Create the Child Component
var Child = React.createClass({
  render: function() {
    return (
    	<div>
    	  <div className="col-4">
    	    <div className="iconBlk">Icon</div>
    	  </div>
    	  <div className="col-4">
    	    <h2>HEADLINE #1</h2>
    	    <ul className="links">
    	      <li><p>FIRST NAV LINK</p></li>
    	      <li><p>SECOND NAV LINK</p></li>
    	      <li><p>THIRD LINK</p></li>
    	    </ul>
    	</div>     
        <div className="col-4">
    	    <h2>More Links</h2>
    	    <ul className="links">
    	      <li><p>FIRST NAV LINK</p></li>
    	      <li><p>SECOND NAV LINK</p></li>
    	      <li><p>THIRD LINK</p></li>
    	      <li><p>FOURTH</p></li>
    	    </ul>
    	</div>
              
        <div className="panel-body text-center">

          {/*
            This component recieves a text variable as a prop from it's parent.

          */}
          <h1>{this.props.text}</h1>

          {/*
            This component will then render the GrandChild component. It will give GrandChild a prop
            called "text" which will be determined by annexing it's parent's texts on (this.propos.texts),
            and then annexing it's own text (this.state.text)
          */}
          <GrandChild text={this.props.text} />

        </div>
        </div>
   
             
    );
  }
});

// Export the component back for use in other files
module.exports = Child;
