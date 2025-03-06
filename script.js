// ✅ gsap loaded? 
console.log( gsap );
document.addEventListener("DOMContentLoaded", function () {
    // Ensure all radioWave elements start at opacity 0
    gsap.set(".radioWave", { opacity: 0 });

    // Create a pulsing animation for all .radioWave elements
    gsap.to(".radioWave", {
      opacity: 1,        // Fade in
      duration: 1.5,       // Duration for fade in/out
      repeat: -1,        // Infinite loop
      yoyo: true,        // Fade out after fading in
      ease: "power1.inOut" // Smooth easing
    });
  });