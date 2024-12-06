"use strict";

// Snowfall effect script
function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.innerText = "❄";
  snowflake.style.position = "fixed";
  snowflake.style.top = "-50px"; // Start above the viewport
  snowflake.style.left = Math.random() * window.innerWidth + "px"; // Random horizontal position
  snowflake.style.fontSize = Math.random() * 20 + 10 + "px"; // Random size (10px to 30px)
  snowflake.style.color = "#fff"; // White color for snowflakes
  snowflake.style.opacity = Math.random(); // Random opacity
  snowflake.style.pointerEvents = "none"; // Prevent interaction
  snowflake.style.zIndex = "1000";
  document.body.appendChild(snowflake);

  const animationDuration = Math.random() * 5 + 5; // Random fall duration (5 to 10 seconds)
  const endPosition = window.innerHeight + 400; // Fall to below the viewport
  const horizontalMovement = Math.random() * 200 - 100; // Drift slightly left or right

  // Animate the snowflake
  snowflake.animate(
    [
      { transform: `translate(0, 0)` },
      { transform: `translate(${horizontalMovement}px, ${endPosition}px)` }
    ],
    {
      duration: animationDuration * 1300,
      iterations: 1,
      easing: "ease-in"
    }
  );

  // Remove snowflake after animation ends
  setTimeout(() => {
    snowflake.remove();
  }, animationDuration * 1000);
}

// Create snowflakes continuously
function startSnowfall() {
  setInterval(createSnowflake, 300); // Add a snowflake every 300ms
}

// Initialize the snowfall effect on page load
window.addEventListener("load", startSnowfall);
