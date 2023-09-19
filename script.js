
document.addEventListener("DOMContentLoaded", function () {
    var photoButton = document.getElementById("photoButton");

    photoButton.addEventListener("click", function () {
        window.location.href = "photo.html";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var contactButton = document.getElementById("contactButton");

    contactButton.addEventListener("click", function() {
        window.location.href = "contact.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var homeButton = document.getElementById("homeButton");

    homeButton.addEventListener("click", function() {
        window.location.href = "index.html";
    });
});