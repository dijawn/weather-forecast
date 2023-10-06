import pageLoadBG from "./images/page-load-bg.jpg";

export default function pageLoad() {
  const body = document.querySelector("body");

  body.style.backgroundImage = `url(${pageLoadBG})`;
  body.style.backgroundSize = "cover";
  body.style.backgroundRepeat = "no-repeat";

  const pageTop = document.querySelector(".page-top");
  let inputVisible = false;

  const searchButton = document.querySelector(".magnifying-glass");

  searchButton.addEventListener("click", () => {
    const input = document.querySelector("#weather-search");
    if (inputVisible == false) {
      input.style.display = "grid";
      inputVisible = true;
    } else {
      input.style.display = "none";
      inputVisible = false;
    }
  });
}
