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
            This component recieves a clicks variable as a prop from it's parent.
            See line 64 of Parent.jsx
          */}
          <h1>{this.props.text}</h1>

          {/*
            This component will then render the GrandChild component. It will give GrandChild a prop
            called "number" which will be calculated by mutiplying it's parent's clicks on (this.props.clicks) by 2,
            and then adding it's own number (this.state.number)
          */}
          <GrandChild number={this.props.text} />

        </div>
        </div>
   
             
    );
  }
});

// Export the component back for use in other files
module.exports = Child;
