var url = 'https://developers.zomato.com/api/v2.1/categories';
fetch(url, {
    method: 'GET', // or 'PUT' // data can be `string` or {object}!
    headers: {
        'user-key': 'b96a53c69f87a1662e5a25f4bf4c3e71'
    }
}).then(function (response) {
    return response.json();
}).then(function (tomato) {
    //        console.log(tomato);
})
