document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll("#slider .menu li a");

    menuItems.forEach(function (item) {
        item.addEventListener("click", function () {

            menuItems.forEach(function (item) {
                item.classList.remove("selected");
            });


            this.classList.add("selected");
        });
    });
});

