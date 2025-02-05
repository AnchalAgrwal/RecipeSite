import React from "react";

const About = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        background: "linear-gradient(to bottom, #ffecec, #fff5f5)",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        width: "100%",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#b30000",
          fontSize: "36px",
          marginBottom: "30px",
          fontWeight:"bold"
        }}
      >
        About Us
      </h1>

      <div
        style={{
          margin: "auto",
          maxWidth: "600px",
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p style={{fontWeight:"400", fontSize:"25px"}}>Welcome to the website!</p>
        <br />
        <p
            style={{
                fontFamily:"sans-serif",
                fontSize: "18px",
            }}
        >"No ingredients wasted, just meals created." 
        <br />
            This website is made by me to practice and implement the knowledge of
            react and APIs that i have learnt. This is a complete frontend
            project.
        <br /> <br />
            I have made this website from scratch. It was a great learning
            process, i came across many challanges and surpassed it.It was a great
            experience. Hope you like my website.
        </p>
      </div>

    </div>
  );
};

export default About;
