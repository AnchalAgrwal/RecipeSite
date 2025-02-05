import React from "react";

const Contact = () => {
  return (
    <div className="contact"
      style={{
        padding: "20px",
        background: "linear-gradient(to bottom, #ffecec, #fff5f5)",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#b30000",
          fontSize: "2rem",
          marginBottom: "30px",
          fontWeight:"bold"
        }}
      >
        Contact Us
      </h1>
      
        <img src="my-image.jpeg" alt="developer image"/>
      

      <div
        style={{
            textAlign:"center", 
            maxWidth:"500px", 
            margin:"25px auto", 
            backgroundColor:"white",
            boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)",
            padding:"15px",
        }}
      >
        <p style={{fontWeight:"540", fontSize:"18px", fontFamily:"sans-serif", margin:"10px"}}>Contact Info</p>
        <p>Email: ilovefood1603@gmail.com</p>
        <p>Phone: +91 XXXXXXXXXX</p>
        <p>Location: IIEST, India</p>
      </div>

    </div>
  );
};

export default Contact;
