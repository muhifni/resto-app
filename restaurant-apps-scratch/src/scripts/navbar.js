export function navbar() {
    const btn = document.getElementById("navbar");
    const link = document.getElementById("main-nav");
    const el = document.querySelectorAll("link-nav");
    btn.addEventListener("click", ()=> {
        if (link.style.display === "block") {
            link.style.display = "none;"
        } else {
            for (let index = 0; index < el.length; index++ ) {
                el[index].classList.add("click");
            }
            link.classList.add("click");
            link.style.display = "block";
        }
    });
}

export const changeColor = () => {
    window.addEventListener("scroll", () => {
      let scroll = window.scrollY;
      let a = document.querySelector(".logo-text");
      let b = document.querySelector(".hamburger-btn");
      let c = document.querySelector(".menu");
      if (scroll >= 800) {
        setTimeout(() => {
          a.classList.add("appear");
          b.classList.add("appear");
          c.classList.add("appear");
        }, 0);
      }
      if (scroll <= 800) {
        setTimeout(() => {
          a.classList.remove("appear");
          b.classList.remove("appear");
          c.classList.remove("appear");
        }, 0);
      }
    });
  };