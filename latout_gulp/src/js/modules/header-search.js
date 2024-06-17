const toggle = (search, btn) => {
  const searchBar = document.getElementById(search);
  const searchBtn = document.getElementById(btn);
  const searchBtnIcon = document.getElementById("search-icon");
  const searchBtnClose = document.getElementById("search-close-icon");

  searchBtn.addEventListener("click", () => {
    searchBar.classList.toggle("search-width");
    searchBtnIcon.classList.toggle("search-btn-opacity0");
    searchBtnClose.classList.toggle("search-btn-opacity1");
  });
};

toggle("input-search", "search-btn");
