// src/components/Header.jsx
import React from "react";
import myImage from "./images/girl.jpg";

export default function Header() {
    const HeaderStyle = {
        backgroundColor: "#AFEEEE",
        padding: "10px 20px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#333333",
    };

    const SearchBoxStyle = {
        display: "inline-block",
        position: "relative",
        marginRight: "20px",
    };

    const SearchStyle = {
        padding: "8px 36px 8px 12px", // space for icon
        borderRadius: "20px",
        border: "1px solid #ccc",
        width: "400px",
        outline: "none",
        fontSize: "16px",
        background: "#fff",
    };

    const SearchIconStyle = {
        position: "absolute",
        right: "14px",
        top: "50%",
        transform: "translateY(-50%)",
        color: "#888",
        fontSize: "18px",
        pointerEvents: "none",
    };

    const ButtonStyle = {
        backgroundColor: "#AFEEEE",
        border: "none",
        color: "#333333",
        fontSize: "20px",
        cursor: "pointer",
    };

    const UserStyle = {
        marginLeft: "20px",
        display: "flex",
        alignItems: "center",
        borderRadius: "50%",
        overflow: "hidden",
        width: "40px",
        height: "40px",
        objectFit: "cover",
    };

    return (
        <header style={HeaderStyle}>
            <h2 className="text-2xl font-semibold">Todo</h2>
            <div style={SearchBoxStyle}>
                <input
                    type="text"
                    placeholder=" 🔍 Search..."
                    style={SearchStyle}
                />
                
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <button style={ButtonStyle}>
                    <i className="bi bi-bell-fill"></i>
                </button>
                <div style={UserStyle}>
                    <img
                        src={myImage}
                        alt="User"
                        style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                    />
                </div>
            </div>
        </header>
    );
}
