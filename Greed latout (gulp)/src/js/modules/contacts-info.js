const closeInfo = (container, btn) => {
  const infoContainer = document.getElementById(container);
  const closeBtn = document.getElementById(btn);

  closeBtn.addEventListener("click", () => {
    infoContainer.classList.toggle("hide-info");
    closeBtn.classList.toggle("rotate-contacts-btn");
  });
};

closeInfo("info", "close-btn-contacts");
