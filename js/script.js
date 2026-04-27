// ===============================
// LUMO APP JAVASCRIPT 
// Event-driven + API integration + improved UI
// ===============================


// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // HOME PAGE 
  // =========================
  const homeBtn = document.getElementById("homeBtn");
  const homeMessage = document.getElementById("homeMessage");

  if (homeBtn && homeMessage) {
    homeBtn.addEventListener("click", function () {
      homeMessage.textContent = "Welcome to Lumo 🚀 Your campus hub is ready!";
    });
  }

});


// ===============================
// EXPLORE PAGE
// ===============================
async function loadExplore() {
  const exploreList = document.getElementById("exploreList");

  if (!exploreList) return;

  exploreList.innerHTML = `
    <div class="text-muted">Loading campus inspiration...</div>
  `;

  try {
    // REAL external API (Quotable)
    const response = await fetch("https://api.quotable.io/random");

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();

    exploreList.innerHTML = `
      <div class="card shadow-sm p-3">
        <h4 class="mb-2">✨ Daily Inspiration</h4>
        <p class="mb-2">"${data.content}"</p>
        <small class="text-muted">— ${data.author}</small>
      </div>
    `;

  } catch (error) {
    console.error(error);

    exploreList.innerHTML = `
      <div class="alert alert-danger">
        Failed to load data. Please try again later.
      </div>
    `;
  }
}


// ===============================
// CREATE PAGE 
// ===============================
function createPost() {
  const input = document.getElementById("postInput");
  const posts = document.getElementById("posts");

  if (!input || !posts) return;

  const value = input.value.trim();

  if (value !== "") {
    const postHTML = `
      <div class="card p-2 mb-2 shadow-sm">
        <p class="mb-0">📝 ${value}</p>
      </div>
    `;

    posts.innerHTML += postHTML;
    input.value = "";
  }
}