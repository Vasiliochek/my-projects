document.addEventListener("DOMContentLoaded", () => {
  const twoInputs = document.querySelectorAll(".about-us__form-input");
  const formTextarea = document.querySelector(".about-us__form-textarea");
  const form = document.querySelector(".about-us__form");
  const formCheckbox = document.querySelector(".about-us__check-input");
  const checkLable = document.querySelector(".about-us__check");

  const errorLableTextarea = document.querySelector(".error-name1");
  const errorLableName = document.querySelector(".error-name2");
  const errorLableEmail = document.querySelector(".error-name3");

  const nameInput = twoInputs[0];
  const emailInput = twoInputs[1];

  const emailValRegex =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  const nodeList = [formTextarea, twoInputs[0], twoInputs[1]];

  nodeList.forEach((formArea) => {
    formArea.addEventListener(
      "focus",
      function (event) {
        if (event.target.value === "" || event.target.value !== "") {
          event.target.classList.add("focus");
          return;
        }
      },
      true
    );

    formArea.addEventListener(
      "blur",
      function (event) {
        event.target.classList.remove("focus");
      },
      true
    );

    formArea.addEventListener("input", function (event) {
      if (event.target.value !== "") {
        event.target.classList.add("typing");
      } else {
        event.target.classList.remove("typing");
      }
    });
  });

  function containsNumbersAndSymbols(str) {
    return /[/\d/]|[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(str);
  }

  function validation() {
    let result = true;

    if (formTextarea.value === "") {
      errorLableTextarea.style.display = "block";
      formTextarea.classList.add("error");
      result = false;
    } else {
      errorLableTextarea.style.display = "none";
      formTextarea.classList.remove("error");
    }

    if (containsNumbersAndSymbols(nameInput.value) || nameInput.value === "") {
      errorLableName.style.display = "block";
      nameInput.classList.add("error");
      result = false;
    } else {
      errorLableName.style.display = "none";
      nameInput.classList.remove("error");
    }

    if (!emailValRegex.test(emailInput.value) || emailInput.value === "") {
      errorLableEmail.style.display = "block";
      emailInput.classList.add("error");
      result = false;
    } else {
      errorLableEmail.style.display = "none";
      emailInput.classList.remove("error");
    }

    if (formCheckbox.checked === false) {
      checkLable.style.color = "red";
      result = false;
    } else {
      checkLable.style.color = "white";
    }

    return result;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (validation() === false) {
      return;
    } else {
      formTextarea.value = "";
      nameInput.value = "";
      emailInput.value = "";
      formCheckbox.checked = false;
    }
  });
});
