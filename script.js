const p1 = page1,
  p2 = page2,
  p3 = page3;

let scale = 1;

/* YES / NO */
yesBtn.onclick = () => {
  p1.classList.add("hidden");
  p2.classList.remove("hidden");
};

noBtn.onclick = () => {
  scale += 0.3;
  yesBtn.style.transform = `scale(${scale})`;
};

/* OPEN GIFT */
function openGift() {
  p2.classList.add("hidden");
  p3.classList.remove("hidden");

  p3.classList.remove("fade-in");
  void p3.offsetWidth;
  p3.classList.add("fade-in");
}

/* BACK */
function backHome() {
  p2.classList.add("hidden");
  p3.classList.add("hidden");
  p1.classList.remove("hidden");

  scale = 1;
  yesBtn.style.transform = "scale(1)";
}

/* HEART RAIN */
setInterval(() => {
  let h = document.createElement("div");
  h.className = "heart";
  h.innerHTML = "💖";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 15 + Math.random() * 20 + "px";
  h.style.animationDuration = 4 + Math.random() * 3 + "s";
  hearts.appendChild(h);
  setTimeout(() => h.remove(), 6000);
}, 400);

/* AUTO INFINITE DUPLICATE */
document.querySelectorAll(".column").forEach((col) => {
  col.innerHTML += col.innerHTML;
});
