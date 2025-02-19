import { animateSlide1 } from "./animations";

import slide1Hl1 from "../assets/images/slide1/hl1.png";
import slide1Hl2 from "../assets/images/slide1/hl2.png";
import slide1Packshots from "../assets/images/slide1/packshots.png";
import slide1Arrow from "../assets/images/slide1/arrow.png";
import slide1Gesture from "../assets/images/slide1/gesture.png";
import slide1Sl from "../assets/images/slide1/sl.png";
import slide1Cta from "../assets/images/slide1/cta.png";
import slide2Hl1 from "../assets/images/slide2/hl1.png";
import slide2Hl2 from "../assets/images/slide2/hl2.png";
import slide2Legal from "../assets/images/slide2/legal.png";
import slide2Img1 from "../assets/images/slide2/img1.png";
import slide2Img2 from "../assets/images/slide2/img2.png";
import slide2Img3 from "../assets/images/slide2/img3.png";
import slide2Img4 from "../assets/images/slide2/img4.png";
import slide2Img5 from "../assets/images/slide2/img5.png";
import slide2Img6 from "../assets/images/slide2/img6.png";
import slide2Img7 from "../assets/images/slide2/img7.png";
import slide2Cta from "../assets/images/slide2/cta.png";

// slide1
export function createSlide1() {
  const slide1Container = document.createElement("div");
  slide1Container.classList.add("slide1-container");
  slide1Container.innerHTML = `
    <img src="${slide1Hl1}" class="slide1-title" alt="Title" />
    <img src="${slide1Hl2}" class="slide1-sub-title" alt="sub-title" />
    <img src="${slide1Packshots}" class="slide1-packshots" alt="packshots" />
    <div class="btn-block">
      <img src="${slide1Arrow}" class="slide1-arrow" alt="arrow" />
      <img src="${slide1Gesture}" class="slide1-gesture" alt="gesture" />
      <img src="${slide1Sl}" class="slide1-sl" alt="sl" />
    </div>
    <img src="${slide1Cta}" class="slide1-cta" alt="cta" />
  `;
  document.querySelector(".slide1").appendChild(slide1Container);
  animateSlide1();
}

// slide2
export function createSlide2() {
  const slide2Container = document.createElement("div");
  slide2Container.classList.add("slide2-container");
  slide2Container.innerHTML = `
    <img src="${slide2Hl1}" class="slide2-title" alt="Title" />
    <img src="${slide2Hl2}" class="slide2-sub-title" alt="sub-title" />
    <div class="bill-block">
      <div class="bill-block-left">
        <img src="${slide2Img1}" class="slide2-img1" alt="img1" />
        <img src="${slide2Img2}" class="slide2-img2" alt="img2" />
        <img src="${slide2Img7}" class="slide2-img7" alt="img7" />
      </div>
      <div class="bill-block-right">
        <img src="${slide2Img3}" class="slide2-img3" alt="img3" />
        <img src="${slide2Img4}" class="slide2-img4" alt="img4" />
        <img src="${slide2Img5}" class="slide2-img5" alt="img5" />
        <img src="${slide2Img6}" class="slide2-img6" alt="img6" />
      </div>
    </div>
    <img src="${slide2Cta}" class="slide2-cta" alt="cta" />
    <img src="${slide2Legal}" class="slide2-legal" alt="legal" />
  `;
  document.querySelector(".slide2").appendChild(slide2Container);
}
