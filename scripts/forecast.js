const key = 'FlMxMzxKyc6zIg6BkqbSmhn4pzJZHcOp';

//get weather info

const getWeather = async (locId) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query = `${locId}?apikey=${key}`;

    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];
}

//get city information
const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base+query);
    const data = await response.json();

    return data[0];

};

// getCity("Manchester")
//     .then(data => {
//         return getWeather(data.Key)
//     }).then(data => console.log(data))
//     .catch(err => console.log(err));

