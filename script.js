// Favicon Change
// const favicons = ["public/favicon/err_computer/fav_frame_0.gif"];
// for (let n = 1; n < 15; n++) {
//   favicons.push("public/favicon/err_computer/fav_frame_" + n + ".gif");
// }
// let i = 0;
// setInterval(() => {
//   document.getElementById("favicon").href = favicons[i];
//   i = (i + 1) % favicons.length;
// }, 100); // Change favicon every 500ms

import config from "./config";

// IMPORT config
const formUrl = config.FORM_URL;

// To TOP Button
const btnTop = document.getElementById("top");
btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  console.log(process.env.FORM_URL);
});

// Handle Form Submit
const form = document.getElementById("formConnect");
form[3].onclick = async function (e) {
  e.preventDefault();

  const name = form[0].value;
  const email = form[1].value;

  const formData = new FormData();

  if (name === "") {
    alert("Fill name");
    form[0].focus();
  } else if (email === "") {
    alert("Fill email");
    form[1].focus();
  } else {
    formData.append("name", name);
    formData.append("email", email);
    formData.append(
      "message",
      document.querySelector('input[name="message"]').value,
    );

    fetch(formUrl, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        console.log(response);
        alert("This form has been successfully submitted!");
        form[0].value = "";
        form[1].value = "";
        form[2].value = "";
      })
      .catch((err) => {
        console.log(err);
        alert("Sorry the form is under maintenance, please contact me below");
      });
  }
};

// Handle Hidden TOP Button Scroll if Y EQ 0
window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    btnTop.style.display = "none";
  } else {
    btnTop.style.display = "flex";
  }

  if (window.innerWidth < 767) {
    btnTop.style.display = "none";
  }
});
