import React, { Component } from "react";
import NavComplete from "../components/navcomplete";
import AboutTitle from "../components/abouttitle";
import { initGA, PageView } from "../components/tracking/index";

class AboutPage extends Component {
  state = {
    Data: {
      content: [],
    },
  };
  componentDidMount = () => {
    initGA();
    PageView();
    fetch("data/aboutpagecontent.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Data: data });
      });
  };
  render() {

    return (
      <div id="aboutwrapper">
        <NavComplete />
        <div
          id="aboutContent"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(100px, 500px))",
            justifyContent: "center",
            gridColumnGap: 90,
            gridRowGap: 30,
            maxWidth: "93%",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: 70,
          }}
        >
          <div>
            <AboutTitle />
          </div>
          <div id="aboutpagetext" style={{fontFamily:"Roboto",fontSize:"1.25rem", lineHeight:"2rem"}}>I am a user researcher and the author of What Millennials Want (Penguin Random House), an intimate biography of Indian millennials, the world’s single-largest demographic group. My book has been endorsed by Shashi Tharoor, Aaditya Thackeray, Sanjeev Bikhchandani, and Lisa Ray.
          <br></br> <br></br>I traveled more than 30,000 kilometers across 13 Indian states to interview more than 900 millennials, educators, business leaders, and policymakers to investigate the economic aspirations, social views, and political attitudes of young India for my book.
          <br></br> <br></br>I work on building technology products for emerging markets and have contributed op-eds to The Washington Post, New Statesman, The Times of India, Mint, and The Print, and have been featured in the Financial Times and The Guardian.
          <br></br><br></br>
          Twitter : 
       <a style={{fontWeight:"bold",color:"black"}}href="https://twitter.com/VivanMarwaha"> @VivanMarwaha </a>
       <br></br>Instagram  <a style={{fontWeight:"bold",color:"black"}} href="https://www.instagram.com/vivanmarwaha/">@VivanMarwaha</a><br></br>Email : <a href="mailto:vivan.marwaha@gmail.com" style={{fontWeight:"bold",color:"black"}}>vivan.marwaha@gmail.com</a>
      </div>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: -20,
            justifyContent: "center",
          }}
        ></div>
      </div>
    );
  }
}

export default AboutPage;
