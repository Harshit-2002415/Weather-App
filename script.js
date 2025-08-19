const API= "ae6738fec06f8f6433369655edb74522"
const inputsection= document.getElementById("city-input")
const buttonclick=document.getElementById("get-weather-btn")
buttonclick.addEventListener("click",function(){
    if(inputsection.value===""){
        alert(("please enter city name"))
    }
    else{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputsection.value}&appid=${API}&units=metric`;
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data)  
            document.getElementById("weather-info").innerHTML=
            `City: ${data.name} <br>
             Temperature: ${data.main.temp} °C <br> 
             Weather: ${data.weather[0].description} 
             <br> sunrise:${new Date(data.sys.sunset * 1000).toTimeString().slice(0, 8)}
             <br> wind:${data.wind.speed}km/h`   
        })
        .catch(error=>console.error("data not found",error))
    }}
)




    // <br> sunrise:${Date((data.sys.sunset)*1000)}

    // const API = "ae6738fec06f8f6433369655edb74522"; 

    // const inputsection = document.getElementById("city-input");
    // const buttonclick = document.getElementById("get-weather-btn");
    // const weatherDiv = document.getElementById("weather-info");

    // buttonclick.addEventListener("click", function () {
    //   if (inputsection.value === "") {
    //     alert("please enter city name");
    //   } else {
    //     const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputsection.value}&appid=${API}&units=metric`;

    //     fetch(url)
    //       .then((res) => {
    //         if (!res.ok) {
    //           throw new Error("City not found");
    //         }
    //         return res.json();
    //       })
    //       .then((data) => {
    //         weatherDiv.innerHTML =
    //           `City: ${data.name} <br>
    //            Temperature: ${data.main.temp} °C <br>
    //            Weather: ${data.weather[0].description}`;
    //       })
    //       .catch(error => {
    //         weatherDiv.innerHTML = `<span style="color:red;">Error: ${error.message}</span>`;
    //         console.error("data not found", error);
    //       });
    //   }
    // });
 























