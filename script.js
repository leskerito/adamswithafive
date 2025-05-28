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

function clicks(event) {
  buttons.forEach((button) => {
    button.classList.remove("active");
  });
  if (event.target.classList.contains("button")) {
    event.target.classList.add("active");
  } else if (event.target.parentElement.classList.contains("button")) {
    event.target.parentElement.classList.add("active");
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
  // Add click listener to the body in order to remove focus from the buttons/folder items
  document.body.addEventListener("click", clicks);

  buttons.forEach((button) => {
    button.addEventListener("click", clicks);

    button.addEventListener("dblclick", (event) => {
      if (button.classList.contains("desktopIcon")) {
        openFolder(button.id);
      } else {
        window.open(button.id, "_blank").focus();
      }
    });
  });
}

// Add event listeners to folder items for opening folders
function handleClick(event) {
  if (!event.target.classList.contains("button")) {
    buttons.forEach((button) => {
      button.classList.remove("active");
    });
  }
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
