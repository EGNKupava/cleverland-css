"use strict";

const lightRopeEl = document.createElement("ul");
lightRopeEl.className = "lightrope";
lightRopeEl.id = "lightrope";

const liElements = Array(42)
  .fill("")
  .map(() => document.createElement("li"));

lightRopeEl.append(...liElements);

document.body.prepend(lightRopeEl);

function createLightRope() {
  const lightRope = document.getElementById("lightrope");
  const colors = ["red", "yellow", "green", "blue", "purple", "orange"];

  for (let i = 0; i < 50; i++) {
    // Adjust the number of lights
    const light = document.createElement("div");
    light.classList.add("light");
    light.style.animationDelay = `${Math.random()}s`; // Random flash delay
    lightRope.appendChild(light);
  }

  // Change colors randomly
  setInterval(() => {
    const lights = document.querySelectorAll(".light");
    lights.forEach((light) => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      light.style.backgroundColor = randomColor;
      light.style.boxShadow = `0 0 10px ${randomColor}`;
    });
  }, 500); // Change color every 500ms
}

// Initialize the light rope
window.addEventListener("load", createLightRope);
