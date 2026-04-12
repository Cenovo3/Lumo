// LUMO APP JAVASCRIPT
// Event-driven programming + API placeholders

document.addEventListener("DOMContentLoaded", function () {

  // HOME BUTTON EVENT
  const homeBtn = document.getElementById("homeBtn");
  const homeMessage = document.getElementById("homeMessage");

  if (homeBtn) {
    homeBtn.addEventListener("click", function () {
      homeMessage.textContent = "Welcome to Lumo 🚀";
    });
  }

});


// EXPLORE PAGE FUNCTION (fake API)
function loadExplore() {
  const exploreList = document.getElementById("exploreList");

  const data = ["Club Fair", "Hackathon", "Study Groups"];

  exploreList.innerHTML = "<h3>Explore Items:</h3>";

  data.forEach(item => {
    exploreList.innerHTML += `<p>🔎 ${item}</p>`;
  });
}


// CREATE PAGE FUNCTION (event-driven input)
function createPost() {
  const input = document.getElementById("postInput");
  const posts = document.getElementById("posts");

  if (input.value.trim() !== "") {
    posts.innerHTML += `<p>📝 ${input.value}</p>`;
    input.value = "";
  }
}