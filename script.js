
//logique pour les bouton

document.addEventListener("DOMContentLoaded", function () {
    var photoButton = document.getElementById("photoButton");

    photoButton.addEventListener("click", function () {
        window.location.href = "carrousel.html";
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
document.addEventListener("DOMContentLoaded", function() {
    var expertiseSection = document.getElementById("expertise");

    if (window.location.hash === "#expertise") {
        expertiseSection.scrollIntoView({ behavior: "smooth" });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    var mentionLegalButton = document.getElementById("mentionLegale");

    mentionLegalButton.addEventListener("click", function() {
        window.location.href = "mention.html";
    });
});



//animation des bouton nav

document.addEventListener("DOMContentLoaded", function() {
    var navItems = document.querySelectorAll(".nav-link");
    
    function animateNavItems(index) {
        if (index < navItems.length) {
            setTimeout(function() {
                var translateValue = (navItems.lenght - index - 1) * -20;
                navItems[index].style.transform = "translateX(" + translateValue + "px)";
                navItems[index].style.opacity = 1;
                navItems[index].style.color = "antiquewhite"; // Changez la couleur du texte pendant l'animation
                animateNavItems(index + 1);
            }, 600); // 0,2 seconde d'intervalle
        }
    }

    animateNavItems(0);
});


//animation de la section expertise et photos


document.addEventListener("DOMContentLoaded", function() {
    var expertiseItems = document.querySelectorAll(".expertise-item");
    function isElementInViewport(element) {
        var rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function animateElements() {
        expertiseItems.forEach(function(item) {
            if (isElementInViewport(item)) {
                item.style.transform = "translateY(0)";
                item.style.opacity = 1;
            }
        });
    }
    window.addEventListener("scroll", animateElements);
    animateElements();
});
