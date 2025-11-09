// Initialize EmailJS
(function() {
    emailjs.init("QAhEetrd3lmGlUuzy"); // Your Public Key
})();

function sendMessage(e) {
    e.preventDefault();

    const templateParams = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs.send("service_x87b2pa", "template_sab62em", templateParams)
        .then(() => {
            alert("Message sent successfully!");
            e.target.reset();
        }, (error) => {
            alert("Failed to send message. Please try again later.");
            console.error("EmailJS Error:", error);
        });

    return false;
}
