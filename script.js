document.addEventListener("DOMContentLoaded", () => {
    const welcomePopup = document.getElementById("welcomePopup");
    const closePopupBtn = document.getElementById("closePopup");
    const mainContent = document.getElementById("main-content");

    setTimeout(() => {
        welcomePopup.classList.add("active");
        mainContent.classList.add("blurred");
    }, 500);

    closePopupBtn.addEventListener("click", () => {
        welcomePopup.classList.remove("active");
        mainContent.classList.remove("blurred");
    });
});

