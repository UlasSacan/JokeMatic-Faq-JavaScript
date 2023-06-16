const joke = document.querySelectorAll(".joke");


joke.forEach(function (what) {
    what.addEventListener("click", function () {
        what.classList.toggle("active");
    });
});




