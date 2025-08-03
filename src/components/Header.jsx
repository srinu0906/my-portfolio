import { useState } from "react";

function handleToggle() {
  const nav = document.querySelector("header nav");
  const toggle = document.getElementById("toggle");
  toggle.innerText = toggle.innerText === "☰" ? "✖" : "☰";
  nav.classList.toggle("active");
  // Toggle the active class on the nav element
}

const [toggle, setToggle] = useState("toggle");

function Header() {
  return (
    <header>
        <h1>Srinu Vakada</h1>
        <div className="toggle" id="toggle" >☰</div>
        <nav>
            <a className="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#resume">Resume</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
  );
}

export default Header;
