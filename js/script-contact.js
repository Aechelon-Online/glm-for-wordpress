const checkboxes = document.querySelector(".entertainment-checkboxes")

checkboxes.addEventListener('click', () => {
    document.querySelector(".list").classList.toggle("show");
})