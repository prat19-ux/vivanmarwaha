import React, { Component } from "react";
import headshot from "../photos/New-headshot_trim.jpg";
import SocialsVertical from "./socialsvertical";

class AboutTitle extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          gridTemplateColumns: "50px 1.5fr",
        }}
      >
        <div style={{ gridColumn: "1/2" }}>
          <SocialsVertical />
        </div>
        <img
          src={headshot}
          alt="Vivan"
          style={{
            maxWidth: "100%",
            width: "auto",
            
          }}
        />
      </div>
    );
  }
}

export default AboutTitle;
