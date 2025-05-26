//Window buttons definition
var closeButtons = document.getElementsByClassName("close");
var minimizeButtons = document.getElementsByClassName("minimize");
var maximizeButtons = document.getElementsByClassName("maximize");

// Desktop icons and folder items definition
var buttons = Array.from(document.getElementsByClassName("button"));
var folderItems = Array.from(document.querySelectorAll(".folder-item"));

//Verify if the browser is mobile or desktop
function isMobile() {
  return (
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
    (window.innerWidth <= 800 && window.innerHeight <= 600)
  );
}

//Creates the window buttons functionality and removes the minimize and maximize buttons on mobile
function createWindowButtons() {
  for (var i = 0; i < closeButtons.length; i++) {
    if (isMobile()) {
      minimizeButtons[i].style.display = "none";
      maximizeButtons[i].style.display = "none";
    }

    closeButtons[i].addEventListener("click", function () {
      const allFolders = document.querySelectorAll(".folder");
      allFolders.forEach((f) => f.classList.remove("show"));
    });
  }
}

//If the browser is mobile, will allow us to click once to open a link or folder
//If the browser is desktop, will allow us to click once to select and double click to open a link or folder
if (isMobile()) {
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      if (button.classList.contains("desktopIcon")) {
        openFolder(button.id);
      } else {
        window.open(button.id, "_blank").focus();
      }
    });
  });
} else {
  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      button.focus();
      button.classList.add("active");
      buttons.forEach((b) => {
        if (b !== button) {
          b.classList.remove("active");
        }
      });
    });

    button.addEventListener("dblclick", (event) => {
      if (button.classList.contains("desktopIcon")) {
        openFolder(button.id);
      } else {
        window.open(button.id, "_blank").focus();
      }
    });
  });
}

// Call the function to create window buttons
createWindowButtons();

// Function to open a folder by its ID
function openFolder(folder) {
  const allFolders = document.querySelectorAll(".folder");
  allFolders.forEach((f) => {
    f.classList.remove("show");
  });

  const opened = document.getElementById(folder + "Folder");
  opened.classList.add("show");
}
