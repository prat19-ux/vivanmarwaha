import React, { Component } from "react";
import { Fade } from "react-reveal";
import "../styles/book.css";

class BookAlert extends Component {
  state = { visisble: true };

  render() {
    return (
      <div
        id="book-alert-wrapper"
        style={{
          opacity: this.state.visisble ? 1 : 0,
          visibility: this.state.visisble ? "visible" : "hidden",
        }}
      >
        <button
          id="book-alert-close"
          onClick={() => this.setState({ visisble: false })}
        >
          <div className="book-close-line" id="line-1"></div>
          <div className="book-close-line" id="line-2"></div>
        </button>
        <Fade big>
          <div id="book-alert-content">
            <div id="book-alert-title-wrapper">
              <div className="text" id="book-alert-title">
                What Millennials Want
              </div>
              <div className="seperator" style={{ width: "40vw" }}></div>
             
              <h3 id="book-heading" style={{fontFamily:"Unna", fontWeight:"bold",fontStyle:"italic",paddingLeft:"1vw",paddingRight:"10vw"}}>Now available at every major bookstore near you</h3>
              <a href="https://www.amazon.in/What-Millennials-Want-Decoding-Generation/dp/0670092851/">
              <div id="book-alert-date" style={{marginBottom:"10px"}}className="text">
                Buy On Amazon
              </div>
              </a>
              <a href="https://www.flipkart.com/what-millennials-want/p/itm8daed77d72778"> 
              <div id="book-alert-date"  style={{marginBottom:"10px"}} className="text">
                Buy on Flipkart
              </div>
              </a>
             
            </div>
            <a
              rel="noopener noreferrer"
              target="_blank"
             
              href="https://www.amazon.in/What-Millennials-Want-Decoding-Generation/dp/0670092851/ref=sr_1_1?crid=1HRHV9I4CNQ7B&dchild=1&keywords=what+millennials+want&qid=1627555657&sprefix=what+mille,aps,-1&sr=8-1"
            >
              <img
                id="book-alert-image"
                style={{maxWidth:"80%", maxHeight:"80%", marginRight:"-10%"}}
                src="/book.png"
                alt="What Millenials Want - book"
              />
            </a>
          </div>
        </Fade>
      </div>
    );
  }
}

export default BookAlert;
