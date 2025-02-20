import "./styles.css";
import { createSlide1, createSlide2 } from "./js/slides";
import { goToSlide2 } from "./js/animations";
import { CONFIG } from "./config.js";

createSlide1()
createSlide2()

document.querySelector(".slide1-arrow").addEventListener("click", goToSlide2);

// cta btn
document.querySelectorAll(".slide1-cta, .slide2-cta").forEach((btn) => {
  btn.addEventListener("click", () => {
    const destinationUrl = new URL(CONFIG.CTA_URL);
    destinationUrl.searchParams.set("clicktag", '');
    window.location.href = destinationUrl.toString();
  });
});


