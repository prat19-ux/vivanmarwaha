import React, { Component } from "react";
import NavComplete from "../components/navcomplete";
import ArticleSpread from "../components/articlespread";
import headshot from "../photos/New-headshot.jpg";
import LatestPress from "../components/latestpress";
import { initGA, PageView } from "../components/tracking/index";
import hindu from "../photos/hindu-sunday.jpeg";
import hindustantimes from "../photos/hindustan-times.jpg";
import pdf from "../photos/0001.jpg";

class Press extends Component {
  state = {
    Data: {
      recentcontent: [],
      allcontent: [],
    },
  };

  componentDidMount = () => {
    initGA();
    PageView();
    fetch("data/press.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ Data: data });
      });
  };
  render() {
    const latestarticle = this.state.Data.recentcontent.map((check) => (
      <LatestPress
        title={check.title}
        description={check.summary}
        link={check.link}
        
      />
    ));
    return (
      <div>
      <NavComplete />
      <div id="section">
        <div id="banner">
          <div class="half">
          <div id="Title">
              Press
        </div>
           
          </div>
          <div>
          <img src={headshot} alt="Vivan" id="banner-image"></img>
          </div>
        </div>
        </div>
      <div id="section">
      <h1 id="banner-heading">Recent Publications</h1>
       
        <div
         id="grid-container"
          >
           
            <React.Fragment>
              {this.state.Data.recentcontent.map((content) => (
                <div id="grid-item">
                  <LatestPress
                    
                    title={content.title}
                    content={content.summary}
                    link={content.link}
                   
                  />
                </div>
              ))}
            </React.Fragment>
           
          </div>

        </div>

        <div id="section">
       
          <h1 id="banner-heading">
            Other Publications
          </h1>
          <div id="recent-posts">
          <div class="split-right hidden">
            
            <img src={hindu} alt="Hello" id="press-image"></img>
            <img src={hindustantimes} alt="Hello" id="press-image"></img>
            <img src={pdf} alt="Hello" id="press-image"></img>
          </div>
         
            <div class="split-left">
            <React.Fragment>
              {this.state.Data.allcontent.map((content) => (
                <div  id="grid-item">
                  <LatestPress
                   
                    title={content.title}
                    content={content.summary}
                    link={content.link}
                    
                  />
                </div>
              ))}
            </React.Fragment>
            </div>
            <div class="split-right shown">
            
              <img src={hindu} alt="Hello" id="press-image"></img>
              <img src={hindustantimes} alt="Hello" id="press-image"></img>
              <img src={pdf} alt="Hello" id="press-image"></img>
            </div>
           
          </div>
          
        </div>
        <div id="section">
        <div id="footer">
          <h1 id="footer-heading">
            Vivan Marwaha
           
          </h1>
          <h3 id="sub-heading">
              Writer, User Researcher, Entrepreneur
            </h3>
        </div>
        </div>
        
    </div>
    );
  }
}

export default Press;
