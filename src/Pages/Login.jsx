import React, { useState } from "react";
import Login from "./Components/images/Login.jpg"

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const styles = {
    container: {
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#AFEEEE",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    card: {
      background: "#fff",
      display: "flex",
      borderRadius: "12px",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
      width: "900px",
      overflow: "hidden",
    },
    imageSection: {
      width: "50%",
      backgroundImage: `url(${Login})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    },
    formSection: {
      width: "50%",
      padding: "40px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    title: {
      marginBottom: "20px",
      fontSize: "26px",
      fontWeight: "bold",
      color: "#333",
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: "12px",
      margin: "10px 0",
      border: "1px solid #ddd",
      borderRadius: "8px",
      fontSize: "14px",
    },
    button: {
      width: "100%",
      padding: "12px",
      background: "#AFEEEE",
      color: "#333333",
      fontSize: "16px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      marginTop: "10px",
    },
    link: {
      display: "block",
      marginTop: "15px",
      color: "#333333",
      textDecoration: "none",
      fontSize: "14px",
      textAlign: "center",
    },
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/login", { // Change to your backend endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Login successful!");
        // Optionally redirect or save token
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Error connecting to server");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.imageSection}></div>
        <div style={styles.formSection}>
          <h2 style={styles.title}>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>
              Sign In
            </button>
          </form>
          <a href="#" style={styles.link}>Forgot Password?</a>
          <a href="/signup" style={styles.link}>Create Account</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
