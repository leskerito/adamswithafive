const totalPages = 11;
var currentPage = 1;
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;
const journal = document.querySelector("#journalModal");

function flipJournal(direction) {
  currentPage += direction;
  if (currentPage < 1) {
    currentPage = totalPages;
  } else if (currentPage > totalPages) {
    currentPage = 1;
  }
  const image = document.getElementById("currentPage");
  image.src = `assets/journal/${currentPage}.png`;
}

function maximizeJournal() {
  if (journal.classList.contains("fullscreen")) {
    journal.classList.remove("fullscreen");
  } else {
    journal.classList.add("fullscreen");
  }
}

if (isMobile()) {
  journal.addEventListener("touchstart", (e) => {
    e.preventDefault();
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  });

  journal.addEventListener("touchend", (e) => {
    e.preventDefault();
    touchEndX = e.changedTouches[0].screenX;
    touchEndY = e.changedTouches[0].screenY;
    handleGesture();
  });

  function handleGesture() {
    const swipeThreshold = 50; // Minimum distance in px for it to count

    if (touchEndX < touchStartX - swipeThreshold) {
      // Swiped left
      flipJournal(1);
    }

    if (touchEndX > touchStartX + swipeThreshold) {
      // Swiped right
      flipJournal(-1);
    }

    if (touchStartY < touchEndY - swipeThreshold - 50) {
      // Swiped down
      closeJournal();
    }
  }
} else {
  journal.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowLeft":
        flipJournal(-1);
        break;
      case "ArrowRight":
        flipJournal(1);
        break;
      case "Escape":
        if (journal.classList.contains("fullscreen")) {
          maximizeJournal();
        } else {
          closeJournal();
        }
        console.log(journalModal.classList);
        break;
      default:
        console.log("Unhandled key:", e.key);
        break;
    }
  });
}
