window.onscroll = function() { stickyMenu() };

function stickyMenu() {
    let header = document.querySelector("#profile-nav-menu");
    let sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}