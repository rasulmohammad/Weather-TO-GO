let airQualityDiv=document.getElementById('airQuality')
let airInput=document.getElementById('airInput')
let airSubmitBtn=document.getElementById('airSubmit')
let goodDiv = document.getElementById("good")
let fairDiv = document.getElementById("fair")
let moderateDiv = document.getElementById("moderate");
let poorDiv = document.getElementById("poor")
let veryPoorDiv = document.getElementById("very_poor")

//   Upon clicking on the submit button, the value of the text box is for use in the latitude and longitude API
airSubmitBtn.onclick=function(event){
    event.preventDefault()
    let airZip=airInput.value
    getLatLon(airZip)
}

const getLatLon=async(airZip='11692')=>{
    const latLonAPI='https://api.openweathermap.org/geo/1.0/zip?zip='+airZip+',US&appid=8e61a85e3b57bba628d9d4ef2f4c94c7'
    const latLonResponse=await fetch(latLonAPI)
    const latLonData=await latLonResponse.json()
    let lat=latLonData.lat
    let lon=latLonData.lon
  //   The returned latitude and longitude values will be used in the air quality API
    getAirQuality(lat,lon,airZip)
}

const getAirQuality=async(lat,lon,airZip)=>{
    const airQualityAPI=`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=8e61a85e3b57bba628d9d4ef2f4c94c7`
    const airQualityResponse=await fetch(airQualityAPI)
    const airQualityData=await airQualityResponse.json()
  
   let{list}=airQualityData
    airQualityDiv.innerHTML=""
    
    let zipCodeHeader=document.createElement('h3')
    zipCodeHeader.innerHTML=airZip
    
    let aqi=document.createElement('h1')
    aqi.innerHTML=list[0].main.aqi

    let severity=document.createElement('h3')
    let description=document.createElement('p')
    description.className="airDesc"
    
    let status=[
      'Good',
      'Fair',
      'Moderate',
      'Poor',
      'Very Poor'
    ]
    
    let advice=[
      'Air pollution poses little to no risk.',
      'Air pollution may cause risks to sensitive groups.',
      'Members of sensitive groups may experience health effects. General groups are less likely to be affected.',
      'Members of general groups may experience health effects. Sensitive groups may experience more serious effects.',
      'Health Alert: The risk of health effects are greater for all groups.'
    ]
    
    airQualityDiv.append(zipCodeHeader,aqi)
    // The text and border color of each displayed index on the bottom is reset each time the function runs
    airQualityDiv.style.color="black"
    aqi.style.color="black"
    goodDiv.style.border="2px black solid"
    fairDiv.style.border="2px black solid"
    moderateDiv.style.border="2px black solid"
    poorDiv.style.border="2px black solid"
    veryPoorDiv.style.border="2px black solid"
    
    // Depending on the returned AQI value, a specific condition and description is appended to the webpage, along with its corresponding index being highlighted in a green border.
    if(aqi.innerHTML==1){
      severity.append(status[0])
      description.append(advice[0])
      airQualityDiv.style.backgroundColor="lightgreen"
      goodDiv.style.border = "7px solid green"
    }
    else if(aqi.innerHTML==2){
      severity.append(status[1])
      description.append(advice[1])
      airQualityDiv.style.backgroundColor="yellow"
      fairDiv.style.border = "7px solid green"
    }
    else if(aqi.innerHTML==3){
      severity.append(status[2])
      description.append(advice[2])
      airQualityDiv.style.backgroundColor="orange"
      moderateDiv.style.border = "7px solid green"
    }
    else if(aqi.innerHTML==4){
      severity.append(status[3])
      description.append(advice[3])
      airQualityDiv.style.backgroundColor="red"
      poorDiv.style.border = "7px solid green"
    }
    else{
      severity.append(status[4])
      description.append(advice[4])
      airQualityDiv.style.backgroundColor="purple"
      airQualityDiv.style.color="white"
      aqi.style.color="white"
      veryPoorDiv.style.border = "7px solid green"
    }
    airQualityDiv.append(severity,description)
}

getLatLon()
// This initializes upon opening the page to display the current weather for default zip code: 11692
