var closeButtons = document.getElementsByClassName("close");
var minimizeButtons = document.getElementsByClassName("Minimize");
var maximizeButtons = document.getElementsByClassName("Maximize");
var titles = document.getElementsByClassName("title-bar-text");
var folderButtons = document.getElementsByClassName("folder-button");

console.log(closeButtons);
function isMobile() {
  return (
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
    (window.innerWidth <= 800 && window.innerHeight <= 600)
  );
}

function createWindowButtons() {
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function () {
      const allFolders = document.querySelectorAll(".folder");
      allFolders.forEach((f) => f.classList.remove("show"));
    });
    titles[i].innerHTML = titles[i].parentElement.parentElement.id.replace(
      "Folder",
      ""
    );

    if (isMobile()) {
      minimizeButtons[i].style.display = "none";
      maximizeButtons[i].style.display = "none";
    }
  }
}
createWindowButtons();

var folderBars = document.getElementsByClassName("folder-bar");

function openFolder(folder) {
  const allFolders = document.querySelectorAll(".folder");
  allFolders.forEach((f) => {
    f.classList.remove("show");
  });

  const opened = document.getElementById(folder + "Folder");
  opened.classList.add("show");
}
