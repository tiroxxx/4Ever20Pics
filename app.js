const body = document.querySelector("#body");
const imageUrl = "https://live.staticflickr.com/"
const queryUrl = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=ed2a2cba48899d60bb6a0f1905f5903a&safe_search=1&per_page=20&format=json&text=dog";

axios.get(queryUrl)
    .then(res => {
        const rawResponse = res.data
        // erasing non-json parts of the api response
        const trimmedResponse = rawResponse.split("jsonFlickrApi").pop();
        const jsonResponse = JSON.parse(trimmedResponse.substring(1, trimmedResponse.length - 1))
        const photos = jsonResponse.photos.photo;
        console.log(photos);

        photos.forEach(photo => {
            const image = document.createElement("img");
            image.setAttribute("src", `${imageUrl}${photo.server}/${photo.id}_${photo.secret}.jpg`);
            image.setAttribute("alt", photo.title);
            body.append(image);
        });
    })

