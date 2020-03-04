import React, { Component } from "react";

class Drawer extends Component {
  state = {};
  render() {
    return (
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    );
  }
}

export default Drawer;
