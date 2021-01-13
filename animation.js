const main = document.querySelector("#main");

main.addEventListener("scroll", e => {
    console.log("worked?");
    console.log(main.scrollTop);
    if (main.scrollTop > 10) {
        console.log("scrolling");
    }
})