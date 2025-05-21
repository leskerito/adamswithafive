var closeButtons = document.getElementsByClassName("close");
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function () {
    const allFolders = document.querySelectorAll(".folder");
    allFolders.forEach((f) => f.classList.remove("show"));
  });
}

function openFolder(folder) {
  const allFolders = document.querySelectorAll(".folder");
  allFolders.forEach((f) => {
    console.log(f);
  });

  const opened = document.getElementById(folder + "Folder");
  opened.classList.add("show");
}
