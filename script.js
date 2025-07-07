// script.js - DR1WEB V1

// Toggle navigation menu function toggleNav() { const menu = document.getElementById("navMenu"); if (menu.classList.contains("hidden")) { menu.classList.remove("hidden"); } else { menu.classList.add("hidden"); } }

// Search functionality function performSearch() { const input = document.getElementById("searchInput"); const query = input.value.trim(); if (!query) return;

// Open a Google search in a new tab const url = https://www.google.com/search?q=${encodeURIComponent(query)}; window.open(url, "_blank"); input.value = ""; }

// Optional: Log when page loads successfully window.addEventListener("DOMContentLoaded", () => { console.log("DR1WEB V1 Loaded ✅"); });


