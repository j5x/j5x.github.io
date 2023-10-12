function enlargeImage(element) {
    var img = element;
    var container = document.querySelector(".image-container");

    // Create an enlarged version of the image
    var enlargedImg = img.cloneNode(true);
    enlargedImg.id = "enlarged";

    // Add the enlarged image to the container
    container.appendChild(enlargedImg);
    container.classList.add("active");

    // Remove the click event from the enlarged image to allow restoration
    enlargedImg.onclick = function() {
        container.classList.remove("active");
        container.removeChild(enlargedImg);
        img.onclick = enlargeImage; // Restore the click event for the original image
    };

    // Remove the click event from the original image to prevent multiple enlargements
    // img.onclick = null;
}
