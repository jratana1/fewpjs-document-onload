// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("p").innerHTML = "This is really cool!";
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );