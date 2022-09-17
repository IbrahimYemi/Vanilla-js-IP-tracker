const SUBMIT_BUTTON = document.querySelector(".button")

SUBMIT_BUTTON.addEventListener("click", fetchApi)

function fetchApi() {
    const INPUT = document.getElementById("domTextElement");
    const INPUT_VALUE = document.getElementById("domTextElement").value;
    let ADDRESS=document.getElementById("ip_address");
    let TIME_ZONE=document.getElementById("time_zone");;
    let LOCATION=document.getElementById("country");;
    let ISP=document.getElementById("service_provider");;
    INPUT.focus();
    function json(url) {
        return fetch(url).then(res => res.json());
    }
    
    let apiKey = 'at_lg02rITh2dpDsdaFkG9eFQeVbf5LC';


    json(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${INPUT_VALUE}`).then(data => {
    console.log(data.ip);
    console.log(data.isp);
    console.log(data.location.country);
    console.log(data.location.region);
    console.log(data.location.timezone);
    ADDRESS.innerHTML = data.ip;
    TIME_ZONE.innerHTML = data.location.timezone;
    LOCATION.innerHTML = data.location.country;
    ISP.innerHTML = data.isp
    });
}


// const API_URL = "https://geo.ipify.org/api/v2/country,city?apiKey=at_lg02rITh2dpDsdaFkG9eFQeVbf5LC&ipAddress=";
// const API_CODE = Number(8.8.5.7).ip;
// const COMPLETE_URL = API_URL+API_CODE;
// console.log("button clicked")
// console.log(INPUT_VALUE)
// console.log(COMPLETE_URL)
