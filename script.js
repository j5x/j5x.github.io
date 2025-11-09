// --- PROJECT FILTERING ---
function filterProjects(category) {
    const cards = document.querySelectorAll(".card");
    const buttons = document.querySelectorAll(".filter-buttons button");

    // update active button
    buttons.forEach(btn => btn.classList.remove("active"));
    const activeBtn = Array.from(buttons).find(btn =>
        btn.textContent.toLowerCase() === (category === 'all' ? 'all' : category)
    );
    if (activeBtn) activeBtn.classList.add("active");

    // show/hide cards
    cards.forEach(card => {
        if (category === "all" || card.dataset.category === category) {
            card.style.display = "block";
            card.style.opacity = 1;
            card.style.transform = "scale(1)";
        } else {
            card.style.opacity = 0;
            card.style.transform = "scale(0.95)";
            setTimeout(() => (card.style.display = "none"), 200);
        }
    });
    
}

// --- EMAILJS SETUP ---
(function() {
    emailjs.init("QAhEetrd3lmGlUuzy"); // your public key
})();

function sendMessage(event) {
    event.preventDefault();

    const serviceID = "service_x87b2pa";
    const templateID = "template_sab62em";

    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send(serviceID, templateID, params)
        .then(() => {
            alert("✅ Message sent successfully!");
            document.querySelector("form").reset();
        })
        .catch((err) => {
            console.error("EmailJS error:", err);
            alert("❌ Failed to send message. Please try again later.");
        });

    return false;
}
document.addEventListener("DOMContentLoaded", () => {
    filterProjects("video"); // show only video cards on load
});
