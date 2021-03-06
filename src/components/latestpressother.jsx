import React, { Component } from "react";
import { motion } from "framer-motion";
import DateAuthorNoHighlight from "./dateauthornohighlight";
const lineExtend = {
    rest: {
      width: 0,
      transition: {
        duration: 1,
      },
    },
    hover: {
      width: 120,
      transition: {
        duration: 1,
      },
    },
  };
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

class LatestPressOther extends Component {
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
                variants={lineExtend}
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

export default LatestPressOther;
