const SUBMIT_BUTTON = document.querySelector(".button")

SUBMIT_BUTTON.addEventListener("click", fetchApi)

function fetchApi() {
//     const INPUT = document.getElementById("domTextElement");
//     const INPUT_VALUE = document.getElementById("domTextElement").value;
//     let ADDRESS=document.getElementById("ip_address");
//     let TIME_ZONE=document.getElementById("time_zone");;
//     let LOCATION=document.getElementById("country");;
//     let ISP=document.getElementById("service_provider");;
//     INPUT.focus();
//     function json(url) {
//         return fetch(url).then(res => res.json());
//     }
    
//     let apiKey = 'at_lg02rITh2dpDsdaFkG9eFQeVbf5LC';


//     json(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${INPUT_VALUE}`).then(data => {
//     console.log(data);
//     console.log(data.ip);
//     console.log(data.isp);
//     console.log(data.location.country);
//     console.log(data.location.region);
//     console.log(data.location.lat);
//     console.log(data.location.lng);
//     console.log(data.location.timezone);
//     ADDRESS.innerHTML = data.ip;
//     TIME_ZONE.innerHTML = data.location.timezone;
//     LOCATION.innerHTML = data.location.country;
//     ISP.innerHTML = data.isp;

//     // map code
//     var map = L.map('map').setView([data.location.lat, data.location.lng], 13);
//     L.tileLayer('https://{s}tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 19,
//         attribution: '© OpenStreetMap'
//     }).addTo(map);
//     });
    
    console.log("works")
}


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
    console.log(data);
    ADDRESS.innerHTML = data.ip;
    TIME_ZONE.innerHTML = data.location.timezone;
    LOCATION.innerHTML = data.location.country;
    ISP.innerHTML = data.isp;
});

