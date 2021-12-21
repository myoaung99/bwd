const input = document.querySelector("[name='text']");
const color = document.querySelector("[name='color']");
const fontSize = document.querySelector("[name='fontSize']");
const fontFamily = document.querySelector("[name='fontFamily']");
const para = document.querySelector("p");

input.addEventListener("input", function () {
  para.innerHTML = this.value;
});

color.addEventListener("input", function () {
  para.style.color = this.value;
});

fontSize.addEventListener("input", function () {
  para.style.fontSize = `${this.value}px`;
});

fontFamily.addEventListener("change", function () {
  switch (this.value) {
    case "star":
      para.style.fontFamily = "Twinkle Star";
      break;
    case "imperialScript":
      para.style.fontFamily = "Imperial Script";
      break;
    case "yuji":
      para.style.fontFamily = "Yuji Hentaigana Akari";
      break;

    default:
      console.log("Default");
  }
});
