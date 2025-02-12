document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("subscription-form");

    form.addEventListener("submit", async function(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!email.includes("@")) {
            message.style.color = "red";
            message.textContent = "Please enter a valid email address.";
            return;
        }

        // TODO: Change this backend
        const formData = new FormData();
        formData.append("email", email);

        try {
            const response = await fetch("https://formspree.io/f/xanqdbqq", {
                method: "POST",
                body: formData,
                headers: {"Accept": "application/json"}
            });

            if (response.ok) {
                message.style.color = "green";
                message.textContent = "Thank you for subscribing!";
                form.reset();
            } else {
                message.style.color = "red";
                message.textContent = "Error subscribing. Please try again.";
            }
        } catch (error) {
            message.style.color = "red";
            message.textContent = "Network error. Please try again later..";
        }
    })
})