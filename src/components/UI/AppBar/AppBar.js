import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";

import GnaLogo from "../../Logos/GnaLogo/GnaLogo";

export default function DenseAppBar(props) {
  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <GnaLogo />
        </Toolbar>
      </AppBar>
      {props.children}
    </div>
  );
}
