const lines = document.querySelectorAll(".terminal-line");

lines.forEach((line) => (line.style.opacity = "0"));

let delay = 0.3;

lines.forEach((line) => {
  // get all spans except the line number span (which has opacity-30)
  const spans = line.querySelectorAll("span:not(.opacity-30)");

  gsap.to(line, { opacity: 1, duration: 0, delay: delay });

  spans.forEach((span) => {
    const originalText = span.textContent;
    span.textContent = "";

    originalText.split("").forEach((char) => {
      gsap.to(
        {},
        {
          duration: 0,
          delay: delay,
          onComplete: () => {
            span.textContent += char;
          },
        },
      );
      delay += 0.04;
    });
  });

  delay += 0.15;
});
