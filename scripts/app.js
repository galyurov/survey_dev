fetch ('http://api.openweathermap.org/data/2.5/weather?q=Odesa,ua')
    .then (function (resp) {
        return resp.json() //convert data to json
    })
    .then ( function (data) {
        console.log(data);
    })
    .catch (function(){
        // catch any errors
    })