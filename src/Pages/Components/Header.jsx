// src/components/Header.jsx
import React from "react";

export default function Header() {
    const HeaderStyle = {
        backgroundColor: "#AFEEEE",
        padding: "10px 20px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "left",
        color: "#333333",
    };

    const SearchStyle = {
        padding: "5px 10px",
        borderRadius: "20px",
        border: "1px solid #ccc",
        width: "200px"
    };
    const SearchBoxStyle = {
        display: "incline-block",
        position: "relative",
        gap: "10px"
    };
    const SearchIconStyle = {
        position: "absolute",
        right: "10px",
        alignItems: "center",
    };
    const ButtonStyle = {
        backgroundColor: "#6B5B95",
        border: "none",
        color: "#F7CAC9",
    };
    
    const UserStyle = {
        MarginLeft: "40px",
        display: "flex",
        alignItems: "center",
        borderRadius: "50%",
        overflow: "hidden",
        width: "40px",
        height: "40px",
        gap: "10px",
        objectFit: "cover"
    };
  return (
    <header style={HeaderStyle}>
      <h2 className="text-2xl font-semibold">Todo </h2>
        {/* You can add more elements like a logo or navigation links here */}
       <div style={SearchBoxStyle}>
        <input
          
          type="text"
          placeholder="Search..."
          style={SearchStyle}
        />
       <span style={SearchIconStyle}>
            <i className="bi bi-search"></i>
       </span>
       </div>
       <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
         {/* Notification button */}
       <button style={ButtonStyle}>
        <i className="bi bi-bell-fill"></i>
       </button>
      
        {/* You can add user profile or other actions here */}
       <div style={UserStyle}>
        <img 
            src="https://via.placeholder.com/40"
            alt="User"></img>
        </div>
         </div> 
    </header>
  );
}
