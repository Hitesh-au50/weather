const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_val = document.getElementById('temp_real_val');
const datahide = document.querySelector('.middle_layer')

const getInfo = async (event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `plz write the name before search`;
        datahide.classList.add('data_hide')
    } else {
        try {
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=9d9fda917c376e1778bfde1c254a307c`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            
            city_name.innerText = `${arrData[0].name} , ${arrData[0].sys.country}`
            temp_real_val.innerText = arrData[0].main.temp;
            // temp_status.innerText = arrData[0].weather[0].main;
            
            const tempMood =  arrData[0].main.temp;
            // condition to check sunny or cloudy
            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i> ";
            }
            else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i> ";
            }
            else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i> ";
            }
            else {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i> ";
            }
            datahide.classList.remove('data_hide')
        } catch {
            city_name.innerText = `plz enter the city name properly`;
            datahide.classList.add('data_hide')
        }
    }
}


submitBtn.addEventListener('click', getInfo);