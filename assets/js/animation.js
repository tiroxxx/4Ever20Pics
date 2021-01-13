body.addEventListener("scroll", () => {
    console.log("worked?");
    console.log(body.scrollTop);
    if (body.scrollTop > 10) {
        console.log("scrolling");
    }
})