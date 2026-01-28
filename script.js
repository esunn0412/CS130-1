const light = document.getElementsByClassName("lightbulbs")[0];

let theme = "light";
light.addEventListener("click", () => {
  if (theme === "light") {
    document.body.classList.add("dark-mode");
    theme = "dark";
  } else {
    document.body.classList.remove("dark-mode");
    theme = "light";
  }
});

const container = document.getElementById("gopher-container");

// gopher source: https://github.com/shalakhin/gophericons
for (let i = 0; i <= 33; i++) {
  const img = document.createElement("img");
  img.src = `./gophers/${i}.png`;
  img.alt = `gopher picture ${i}`;
  img.style.height = "120px";
  container.appendChild(img);
}

window.onload = () => {
  const originalWidth = container.scrollWidth;

  const originals = Array.from(container.children);
  originals.map((child) => container.appendChild(child.cloneNode(true)));

  container.style.setProperty("--shift", `-${originalWidth}px`);
};
