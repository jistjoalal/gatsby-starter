import React from "react";
import { Link } from "gatsby";

import Nav from "react-bootstrap/Nav";

export default class Navi extends React.Component {
  render() {
    const { siteTitle, ...rest } = this.props;
    return (
      <Nav className="container" {...rest}>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
      </Nav>
    );
  }
}
