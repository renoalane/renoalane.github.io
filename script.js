// Favicon Change
const favicons = ["public/favicon/globe/fav_frame_0.gif"];
for (let n = 1; n < 73; n++) {
  favicons.push("public/favicon/globe/fav_frame_" + n + ".gif");
}
let i = 0;
setInterval(() => {
  document.getElementById("favicon").href = favicons[i];
  i = (i + 1) % favicons.length;
}, 10); // Change favicon every 500ms

// To TOP Button
const btnTop = document.getElementById("top");
btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
