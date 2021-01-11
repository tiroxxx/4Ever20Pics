let queryUrl = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=ed2a2cba48899d60bb6a0f1905f5903a&safe_search=1&per_page=20&format=json&text=dog";

axios.get(queryUrl)
.then(res => {
    const body = document.querySelector("#body");
    let str = res.data
    let string = str.split("jsonFlickrApi").pop();
    let result = string.substring(1, string.length-1);
    console.log(JSON.parse(result));


})

