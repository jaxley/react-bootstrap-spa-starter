import React, { Component } from "react";
import { Alert } from "react-bootstrap";
 
export class Stuff extends Component {
  render() {
    return (
	<div>
	<p>Stuff</p>
<Alert bsStyle="warning">
  <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.  </Alert>
	</div>
    );
  }
}
