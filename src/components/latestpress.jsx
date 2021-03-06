import React, { Component } from "react";
import { motion } from "framer-motion";
import DateAuthorNoHighlight from "./dateauthornohighlight";

const textHighlight = {
  rest: {
    transition: {
      duration: 1,
    },
  },
  hover: {
    backgroundImage:
      "linear-gradient(to right, rgba(252, 186, 3, .65) 100%, white 0%)",
    transition: {
      duration: 1,
    },
  },
  leave: {
    transition: {
      duration: 1,
    },
  },
};

class LatestPress extends Component {
  state = {
    title:this.props.title,
    subheading:this.props.subheading,
    summary: this.props.content,
    link: this.props.link,
    date:this.props.date
  };
  render() {
    return (
      <div
        id="latestArticle1"
        style={{
          display: "grid",
          gridTemplateRows:"1fr",
          gridTemplateColumns: "1fr",
          gridTemplateAreas: `"." "desc" "latestTopic"`,
        }}
      >
        <motion.a
          href={this.state.link}
          target="_blank"
          style={{
            textDecoration: "none",
            gridArea: "latestTopic",
            color: "black",
          }}
          initial="rest"
          whileHover="hover"
          animate="rest"
        >
            <div style={{ width: "250px" }}>
            <motion.span
             variants={textHighlight}
              style={{
               
                fontFamily: "Unna",
                fontStyle:"italic",
                fontWeight: "bold",
                fontSize: 30,
                position: "relative",
              }}
            >
              {this.state.title}
              <motion.div
               
                style={{
                  position: "relative",
                  backgroundColor: "black",
                  width: 0,
                  marginBottom:"10px",
                  height: "fit-content",
                  top: 10,
                }}
              ></motion.div>
            </motion.span>
          </div>

          <div style={{ width: "250px" }}>
            <motion.span
              style={{
               
                fontFamily: "Unna",
                fontStyle:"italic",
                fontWeight: "100",
                top:20,
                
                textAlign:"left",
                fontSize: 22.5,
                position: "relative",
              }}
            >
              {this.state.subheading}
              <motion.div
               
                style={{
                  position: "relative",
                  backgroundColor: "black",
                  width: 0,
                  
                  marginBottom:"30px",
                  height: "fit-content",
                  top: 10,
                }}
              ></motion.div>
            </motion.span>
          </div>
        
          <div
            style={{
              position: "relative",
              top: 10,
             
              fontFamily: "Roboto, sans-serif",
              fontSize: 17,
              fontWeight: 130,
              lineHeight: 1.36,
            }}
          >
            {this.state.summary}
          </div>
          <div style={{ marginTop: 20 }}>
          <DateAuthorNoHighlight
            date={this.state.date}
          />
        </div>
        </motion.a>
      </div>
    );
  }
}

export default LatestPress;
