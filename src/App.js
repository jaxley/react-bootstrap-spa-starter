import React, { Component} from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import { Grid, Row, Col, PageHeader } from 'react-bootstrap';
import { Home } from "./components/pages/Home";
import { Stuff } from "./components/pages/Stuff";
import { Contact } from "./components/pages/Contact";
import { Sidebar } from "./components/widgets/Sidebar";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

export class App extends Component{
  render(){
    return(
	<HashRouter>
	<div id="wrapper">
	  <Sidebar/>
          <div id="page-content-wrapper">
          <PageHeader>Simple SPA</PageHeader>
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/> 
          </div>
        </div>
	</HashRouter>
    );
  }
}
