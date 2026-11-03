(() => {
  const frame = document.getElementById("experience");
  const music = document.getElementById("bgMusic");

  window.addEventListener("message", (event) => {
    if (event.source !== frame.contentWindow || event.data?.type !== "start-pressed") return;
    music.play().catch((error) => console.warn("Music playback did not start:", error));
    frame.src = "street.html";
  });
})();
