fetch('https://dog.ceo/api/breeds/image/random')
.then(function(response){
    return response.json();
})
.then(function(myJson) {
    //do something with our JSON data ;
});