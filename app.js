
const body = document.querySelector("#body");
const button = document.querySelector("#button");
const form = document.querySelector("#form");
const formInput = document.querySelector("#input");
const imageUrl = "https://live.staticflickr.com/";

button.addEventListener("click", e => {
    e.preventDefault();
    if (formInput.value === "") {
        // show error message
        errorHandler();
    }
    else {
        search(formInput.value);
        formInput.value = "";
    }
});

form.addEventListener("submit", e => {
    e.preventDefault();
    if (formInput.value === "") {
        errorHandler();
    }
    else {
        search(formInput.value);
        formInput.value = "";
    }
});

function search(keyword) {
    const queryUrl = `https://www.flickr.com/services/rest/?method=flickr.photos.search&
    api_key=ed2a2cba48899d60bb6a0f1905f5903a&safe_search=1&per_page=20&format=json&text=${keyword}`;
    // empty page after every search
    body.textContent = "";

    axios.get(queryUrl)
        .then(res => {
            const rawResponse = res.data
            // erasing non-json parts of the api response
            const trimmedResponse = rawResponse.split("jsonFlickrApi").pop();
            const jsonResponse = JSON.parse(trimmedResponse.substring(1, trimmedResponse.length - 1))
            const photos = jsonResponse.photos.photo;

            // append all pictures to the page
            photos.forEach(photo => {
                const image = document.createElement("img");
                image.setAttribute("src", `${imageUrl}${photo.server}/${photo.id}_${photo.secret}.jpg`);
                image.setAttribute("alt", photo.title);
                body.append(image);
            });
        }).catch(err => {
            if (err) throw err;
        });
}

function errorHandler() {
    const message = document.createElement("div");
    message.textContent = "Please fill in the blank";
    message.setAttribute("class", "alert alert-danger text-center");
    message.setAttribute("role", "alert");
    form.append(message);
    // after 2 seconds remove error message
    setTimeout(() => {
        form.removeChild(document.querySelector(".alert"))
    }, 2000)
}



