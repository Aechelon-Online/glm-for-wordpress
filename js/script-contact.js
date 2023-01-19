const checkboxes = document.querySelector(".entertainment-checkboxes")

checkboxes.addEventListener('click', () => {
    document.querySelector(".list").classList.toggle("show");
})

document.querySelector("form").addEventListener("submit", function(event) {
    if (document.querySelector("input#website").value.length != 0) {
        event.preventDefault();
    }
});
