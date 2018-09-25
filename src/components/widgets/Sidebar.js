import React, { Component} from "react";
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

export class Sidebar extends Component{

  render() {
    return (
	  <div id="sidebar-wrapper">
<ListGroup bsClass="sidebar-nav">
<ListGroupItem bsClass="sidebar-brand">
            <NavLink to="/#">Home</NavLink>
  </ListGroupItem>
  <ListGroupItem>
            <NavLink to="/stuff">Stuff</NavLink>
</ListGroupItem>
  <ListGroupItem>
            <NavLink to="/contact">Contact</NavLink>
  </ListGroupItem>
</ListGroup>
      </div>
    );
  }
}
