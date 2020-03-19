import React from "react";

var style = {
  backgroundColor: "black",
  borderTop: "3px solid whitesmoke",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "80px",
  width: "100%",
  color: "white"
}

var phantom = {
display: 'block',
padding: '20px',
height: '60px',
width: '100%',
}


  function Footer({ children }) {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                { children } Alexander Garcia
            </div>
        </div>
    )
}

export default Footer