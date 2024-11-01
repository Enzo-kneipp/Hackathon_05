async function fetchWeather() {
    try {
        const url = "http://api.weatherapi.com/v1/current.json?key=7421e2fbc9e54b8b97334619243110&q=Winnipeg&aqi=no";
        const dataUrl = await fetch(url);

        if (!dataUrl.ok) {
            throw new Error(`HTTP Error! status: ${dataUrl.status}`);
        };

        return dataUrl.json();
       
    } catch (error) {
        console.error('You got an error: ', error);
    }
    
    
}

fetchWeather().then(result => {
    console.log(result);
})