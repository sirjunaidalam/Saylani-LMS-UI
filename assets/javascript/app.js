function loadPage(page) {
  fetch(page)
    .then((response) => {
      if (!response.ok) throw new Error("Page not found");
      return response.text();
    })
    .then((data) => {
      document.getElementById("main").innerHTML = data;
    })
    .catch((error) => {
      document.getElementById(
        "main"
      ).innerHTML = `<p>Error: ${error.message}</p>`;
    });
}

gsap.to("#hero-title", {
    duration: 1,
    y: -50,
    opacity: 1,
    ease: "power2.in",
  });
  gsap.to("#hero-subtext", {
    duration: 1.2,
    y: -30,
    opacity: 1,
    delay: 0.3,
    ease: "power2.in",
  });
  gsap.to("#hero-btn", {
    duration: 1.5,
    scale: 0.8,
    opacity: 1,
    delay: 0.5,
    ease: "power2.in",
  });