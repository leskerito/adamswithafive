var closeButtons = document.getElementsByClassName("close");

function isMobile() {
  return (
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
    (window.innerWidth <= 800 && window.innerHeight <= 600)
  );
}

for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function () {
    const allFolders = document.querySelectorAll(".folder");
    allFolders.forEach((f) => f.classList.remove("show"));
  });
}

console.log("Is mobile: " + isMobile());

var folderBars = document.getElementsByClassName("folder-bar");
for (var i = 0; i < folderBars.length; i++) {
  console.log(folderBars[i].parentElement.id);
}

function openFolder(folder) {
  const allFolders = document.querySelectorAll(".folder");
  allFolders.forEach((f) => {
    f.classList.remove("show");
  });

  const opened = document.getElementById(folder + "Folder");
  opened.classList.add("show");
}
