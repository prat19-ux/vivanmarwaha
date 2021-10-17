import React, { Component } from "react";
import NavComplete from "../components/navcomplete";
import ArticleSpread from "../components/articlespread";
import { initGA, PageView } from "../components/tracking/index";
import hindu from "../photos/hindu-sunday.jpeg";
import hindustantimes from "../photos/hindustan-times.jpg";
import pdf from "../photos/0001.jpg";
import image from "../photos/img.jpg"

class Press extends Component {
  state = {
    Data: {
      content:[],
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
    return (
      <div>
      <NavComplete />
      <div id="section">
          <div id="Title">
              Press
        </div>
        </div>
        <div id="section">
          <div id="recent-posts">
         
         
            <div class="split-left">
            <React.Fragment>
              {this.state.Data.content.map((content) => (
                <div  id="grid-item">
                  <ArticleSpread
                  title = {content.title}
                  subheading = {content.subheading}
                  date = {content.date}
                  content={content.summary}
                  link={content.link}
               
                  />
                </div>
              ))}
            </React.Fragment>
            </div>
            <div class="split-right">
           
           
              <iframe width="500" height="300" src="https://www.youtube.com/embed/Fbf32fTJT9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

       
              <img src={hindu} alt="Hello" id="press-image"></img>
              <img src={hindustantimes} alt="Hello" id="press-image"></img>
              <img src={pdf} alt="Hello" id="press-image"></img>
              <img src={image} alt="Hello" id="press-image"></img>
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
