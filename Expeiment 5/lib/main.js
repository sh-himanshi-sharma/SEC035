// script.js

document.addEventListener("DOMContentLoaded", function() {
    const bookFilter = document.getElementById("bookFilter");
    const movieFilter = document.getElementById("movieFilter");
    const bookContainer = document.getElementById("bookContainer");
    const movieContainer = document.getElementById("movieContainer");

    // Filter books
    bookFilter.addEventListener("keyup", function() {
        const filterValue = bookFilter.value.toLowerCase();
        const books = bookContainer.getElementsByClassName("item");

        for (let i = 0; i < books.length; i++) {
            const title = books[i].getElementsByTagName("h3")[0].textContent.toLowerCase();
            if (title.includes(filterValue)) {
                books[i].style.display = "";
            } else {
                books[i].style.display = "none";
            }
        }
    });

    // Filter movies
    movieFilter.addEventListener("keyup", function() {
        const filterValue = movieFilter.value.toLowerCase();
        const movies = movieContainer.getElementsByClassName("item");

        for (let i = 0; i < movies.length; i++) {
            const title = movies[i].getElementsByTagName("h3")[0].textContent.toLowerCase();
            if (title.includes(filterValue)) {
                movies[i].style.display = "";
            } else {
                movies[i].style.display = "none";
            }
        }
    });
});