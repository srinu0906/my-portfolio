import { useState } from "react";

// function handleToggle() {
//   const nav = document.querySelector("header nav");
//   const toggle = document.getElementById("toggle");
//   toggle.innerText = toggle.innerText === "☰" ? "✖" : "☰";
//   nav.classList.toggle("active");
//   // Toggle the active class on the nav element
// }

// function handleToggle(){
//   // const toggle = document.getElementById("togggle");
//   // toggle.innerText = toggle.innerText == "☰" ? "✖" : "☰";
//   document.getElementById("togggle").nodeValue = "X"
// }

// const [toggle, setToggle] = useState("toggle");

function Header() {

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(current => !current);
    // const toggle = document.getElementById("toggle");
    // toggle.classList.
  }

  return (
    <header>
        <h1>Srinu Vakada</h1>
        <div className={isOpen?"toggle cross":"toggle bar"} id="toggle" onClick={()=>handleToggle()}>{isOpen ? "✖" : "☰"}</div>
        <nav className={isOpen ? "show-nav" : "hide-nav"}>
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
