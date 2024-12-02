// Modal for details
const photo = document . getElementById("photo");
const modal = document . getElementById("modal");
const closeBtn = document   . getElementById("closeBtn");

photo.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeBtn.addEventListerner("click", () => {
    modal.style.display ="none";
});

window.addEventListener("click", (Event) =>{
    if (Event.target===modal) {
        modal.style.display="none"
    }
});

//Contact form confirmation modal
const contactForm = document.getElementById("contactForm");
const confirmModal = document.getElementById("confirmModal");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("coancelBtn");

contactForm.addEventListener("submit", (Event) => {
    Event.preventDefault();
    confirmModal.style.display = "flex",
});

confirmBtn.addEventListener("click", => {
    contactForm. submit();
});

cancelBtn.addEventListener("click", () => {
    confirmModal
})



