// src/App.js
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="resume">
      <header className="header">
        <h1>Varshitha</h1>
        <p>varshitha@email.com | +91-9905591209</p>
      </header>

      <section>
        <h2>About Me</h2>
        <p>Self-driven developer passionate about building web apps using React, Node.js, and databases.</p>
      </section>

      <section>
        <h2>Education</h2>
        <p><strong>BVRIT HYDERABAD College Of Engineering For Women</strong> (2023–2027)</p>
      </section>

      <section>
        <h2>Skills</h2>
        <ul>
          <li>Java,C,Python</li>
          <li>HTML, CSS, Bootstrap, Tailwind</li>
          <li>MySQL, MongoDB</li>
          <li>Git, GitHub</li>
        </ul>
      </section>

      <section>
        <h2>Projects</h2>
        <p><strong>Quiz Master - V1:</strong> Multi-user quiz app with Flask backend and SQLite database.</p>
        <p><strong>Weather Dashboard:</strong> React app with Chart.js and OpenWeatherMap API.</p>
      </section>

      <section>
        <h2>Achievements</h2>
        <ul>
          <li>GHCI 2024 Scholarship</li>
          <li>Presented paper at Pure Earth National Conference</li>
        </ul>
      </section>
    </div>
  );
}

export default App;
