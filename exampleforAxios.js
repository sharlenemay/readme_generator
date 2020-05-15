const axios = require("axios");

const queryUrl = `https://api.github.com/users/${data.username}/repos?per_page=100`;
axios.get(queryUrl)
.then(function(res){
    console.log(res.data);
});
