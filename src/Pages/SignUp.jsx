import React, { useState } from "react";
import Login from "./Components/images/Login.jpg" // Use your own image path

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/signup", { // Change URL to your backend endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Account created successfully!");
        // Optionally redirect or clear form
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      alert("Error connecting to server");
    }
  };

  const styles = {
    page: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#AFEEEE",
    },
    card: {
      display: "flex",
      width: "900px",
      height: "500px",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      borderRadius: "12px",
      overflow: "hidden",
      backgroundColor: "#fff",
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
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    input: {
      marginBottom: "15px",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      fontSize: "16px",
    },
    button: {
      backgroundColor: "#007bff",
      color: "#fff",
      padding: "12px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "16px",
      marginTop: "15px"
    },
    link: {
      marginTop: "15px",
      color: "#007bff",
      textDecoration: "none",
      fontSize: "14px",
    },
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.imageSection}></div>
        <div style={styles.formSection}>
          <h2 style={styles.title}>Create an Account</h2>
          <form onSubmit={handleSubmit}>
            <input
              style={styles.input}
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              style={styles.input}
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              style={styles.input}
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <input
              style={styles.input}
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button type="submit" style={styles.button}>Sign Up</button>
          </form>
          <a href="/login" style={styles.link}>Already have an account? Login</a>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
