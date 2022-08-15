// https://github.com/rahsunk/vettedAPIs

let zipInput=document.getElementById('zipInput')
let zipSubmit=document.getElementById('zipSubmit')
let currWeatherDiv=document.getElementById('currWeatherDiv')
let timelineList=document.getElementsByClassName('newTimeDivs')
let timeline=timelineList[0]

let timeLength=document.getElementById('timeLength')
let timeRange=document.getElementById('timeRange')

let zipCode=zipInput.value

zipSubmit.onclick=function(event){
//   Upon clicking on the submit button, the value of the text box is used and reset for use in the latitude and longitude API
  event.preventDefault()
  zipCode=zipInput.value
  
  getLatLon(zipCode)
  }

const getLatLon=async(zipCode='11692')=>{
//   This function uses the user's inputted zip code as the parameter for this latitude and longitude API
  const latLonAPI='https://api.openweathermap.org/geo/1.0/zip?zip='+zipCode+',US&appid=8e61a85e3b57bba628d9d4ef2f4c94c7'
  const latLonResponse=await fetch(latLonAPI)
  const latLonData=await latLonResponse.json()
  console.log(latLonData)
  let lat=latLonData.lat
  let lon=latLonData.lon
//   The returned latitude and longitude values will be used in the current weather API
  getCurrWeather(lat,lon,zipCode)
  
  let length=timeLength.value
  let range=timeRange.value
  
  initTimeline(length,range,lat,lon)
  }

const getCurrWeather=async(lat,lon,zipCode)=>{
//   This function uses the latitude and longutude as the parameters for this current weather API
  const currWeatherAPI='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=8e61a85e3b57bba628d9d4ef2f4c94c7'
  const currWeatherResponse=await fetch(currWeatherAPI)
  const currWeatherData=await currWeatherResponse.json()
  console.log(currWeatherData)
//   Properties of the returned current weather API
  let{weather,main}=currWeatherData
  
//   The displayed current weather is cleared so that it can display the new current weather
  currWeatherDiv.innerHTML=""
  
  let zipCodeHeader=document.createElement('h3')
  zipCodeHeader.innerHTML=zipCode
  
  let condition=document.createElement('p')
  condition.innerHTML=`Weather: ${weather[0].main}`
  
  let desc=document.createElement('p')
  desc.innerHTML=`Description: ${weather[0].description}`
  
  let temp=document.createElement('p')
  temp.innerHTML=`Temperature: ${kelvinConvert(main.temp)}`
  
  let feelsLike=document.createElement('p')
  feelsLike.innerHTML=`Feels Like: ${kelvinConvert(main.feels_like)}`
  
  let lowest=document.createElement('p')
  lowest.innerHTML=`Lowest: ${kelvinConvert(main.temp_min)}`
  
  let highest=document.createElement('p')
  highest.innerHTML=`Highest: ${kelvinConvert(main.temp_max)}`
  
  let humidity=document.createElement('p')
  humidity.innerHTML=`Humidity: ${main.humidity}%`
  
  currWeatherDiv.append(zipCodeHeader,condition,desc,temp,feelsLike,lowest,highest,humidity)
}

const kelvinConvert=(kelvin)=>{
//   This function takes the parameter kelvin, which are the returned temperature values in the current weather API, and returns their Fahrenheit equivalent.
  let fahrenheit= String(1.8*(kelvin-273) + 32)
//   The fahrenheit value is rounded to the first 5 characters (including the decimal point) and is appended with a degree Fahrenheit symbols.
  return `${fahrenheit.substr(0,5)}\u00B0F`
}

const celciusConvert=(celcius)=>{
  let fahrenheit=String(1.8*(celcius)+32)
  return `${fahrenheit.substr(0,5)}\u00B0F`
}


const initTimeline=async(length="Hourly",range="Next 5",lat=40.5923,lon=-74.0071)=>{
  if(length=="Hourly"){
    // let timelineAPI=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${lon}/${yesterday.substr(11,4)}-${monthConvert(yesterday.substr(4,3))}-${yesterday.substr(8,2)}/${tomorrow.substr(11,4)}-${monthConvert(tomorrow.substr(4,3))}-${tomorrow.substr(8,2)}?unitGroup=metric&key=YDNN75VCHAT3KXK3HVC5RV6PV&contentType=json`
    // let timelineResponse=await fetch(timelineAPI)
    // let timelineData=await timelineResponse.json()
    let timelineData=hourlySample
    console.log(timelineData)
    getTimeline(timelineData,length,range)
  }
  else if(length=="Daily"){
    // let timelineAPI=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${lon}/${dayLowerLimit.substr(11,4)}-${monthConvert(dayLowerLimit.substr(4,3))}-${dayLowerLimit.substr(8,2)}/${dayUpperLimit.substr(11,4)}-${monthConvert(dayUpperLimit.substr(4,3))}-${dayUpperLimit.substr(8,2)}?unitGroup=metric&key=YDNN75VCHAT3KXK3HVC5RV6PV&contentType=json`
    // let timelineResponse=await fetch(timelineAPI)
    // let timelineData=await timelineResponse.json()
    let timelineData=dailySample
    console.log(timelineData)
    getTimeline(timelineData,length,range)
  }
  else{
    if(range=="Last 5"){
        // let timelineAPI1=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${lon}/${yearBack4}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}/${yearBack4}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}?unitGroup=metric&key=YDNN75VCHAT3KXK3HVC5RV6PV&contentType=json`
        // let timelineResponse1=await fetch(timelineAPI1)
        // let timelineData1=await timelineResponse1.json()
        
        // let timelineAPI2=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${lon}/${yearBack3}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}/${yearBack3}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}?unitGroup=metric&key=YDNN75VCHAT3KXK3HVC5RV6PV&contentType=json`
        // let timelineResponse2=await fetch(timelineAPI2)
        // let timelineData2=await timelineResponse2.json()
        
        // let timelineAPI3=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${lon}/${yearBack2}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}/${yearBack2}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}?unitGroup=metric&key=YDNN75VCHAT3KXK3HVC5RV6PV&contentType=json`
        // let timelineResponse3=await fetch(timelineAPI3)
        // let timelineData3=await timelineResponse3.json()

        // let timelineAPI4=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${lon}/${yearBack1}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}/${yearBack1}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}?unitGroup=metric&key=YDNN75VCHAT3KXK3HVC5RV6PV&contentType=json`
        // let timelineResponse4=await fetch(timelineAPI4)
        // let timelineData4=await timelineResponse4.json()
        
        // let timelineAPI5=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${lon}/${today.substr(11,4)}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}/${today.substr(11,4)}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}?unitGroup=metric&key=YDNN75VCHAT3KXK3HVC5RV6PV&contentType=json`
        // let timelineResponse5=await fetch(timelineAPI5)
        // let timelineData5=await timelineResponse5.json()
        // let timelineData=[timelineData1,timelineData2,timelineData3,timelineData4,timelineData5]
        let timelineData=annualBackSample
        console.log(timelineData)
        getTimeline(timelineData,length,range)
    }
    else{
        // let timelineAPI1=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${lon}/${today.substr(11,4)}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}/${today.substr(11,4)}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}?unitGroup=metric&key=YDNN75VCHAT3KXK3HVC5RV6PV&contentType=json`
        // let timelineResponse1=await fetch(timelineAPI1)
        // let timelineData1=await timelineResponse1.json()
        
        // let timelineAPI2=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${lon}/${yearForward1}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}/${yearForward1}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}?unitGroup=metric&key=YDNN75VCHAT3KXK3HVC5RV6PV&contentType=json`
        // let timelineResponse2=await fetch(timelineAPI2)
        // let timelineData2=await timelineResponse2.json()
        
        // let timelineAPI3=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${lon}/${yearForward2}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}/${yearForward2}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}?unitGroup=metric&key=YDNN75VCHAT3KXK3HVC5RV6PV&contentType=json`
        // let timelineResponse3=await fetch(timelineAPI3)
        // let timelineData3=await timelineResponse3.json()

        // let timelineAPI4=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${lon}/${yearForward3}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}/${yearForward3}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}?unitGroup=metric&key=YDNN75VCHAT3KXK3HVC5RV6PV&contentType=json`
        // let timelineResponse4=await fetch(timelineAPI4)
        // let timelineData4=await timelineResponse4.json()
        
        // let timelineAPI5=`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat}%2C${lon}/${yearForward4}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}/${yearForward4}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}?unitGroup=metric&key=YDNN75VCHAT3KXK3HVC5RV6PV&contentType=json`
        // let timelineResponse5=await fetch(timelineAPI5)
        // let timelineData5=await timelineResponse5.json()
        // let timelineData=[timelineData1,timelineData2,timelineData3,timelineData4,timelineData5]
        let timelineData=annualForwardSample
        console.log(timelineData)
        getTimeline(timelineData,length,range)
    }
  }
  
    
}

const getTimeline=(timelineData,length,range)=>{
    console.log('cleared')
    timeline.innerHTML=""
    if(length=="Annually"){
        console.log(timelineData)
        timeline.id=""
        timelineData.forEach((yearVal)=>{
            let newDiv=document.createElement("div")
            newDiv.className="timelineSegment"
            
            let newYear=document.createElement('h3')
            newYear.innerHTML=yearVal.days[0].datetime

            let newConditions=document.createElement('p')
            newConditions.innerHTML=`Weather: ${yearVal.days[0].conditions}`

            let newTemp=document.createElement('p')
            newTemp.innerHTML=`Temperature: ${celciusConvert(yearVal.days[0].temp)}`

            let newHumidity=document.createElement('p')
            newHumidity.innerHTML=`Humidity: ${yearVal.days[0].humidity}%`

            newDiv.append(newYear,newConditions,newTemp,newHumidity)
            timeline.append(newDiv)
        })
        
    }
    else if(length=="Daily"){
        if(range=="Next 5"){
          timeline.id=""
            for(let i=4;i<timelineData.days.length;i++){
                let newDiv=document.createElement("div")
                newDiv.className="timelineSegment"
            
                let newYear=document.createElement('h3')
                newYear.innerHTML=timelineData.days[i].datetime

                let newConditions=document.createElement('p')
                newConditions.innerHTML=`Weather: ${timelineData.days[i].conditions}`

                let newTemp=document.createElement('p')
                newTemp.innerHTML=`Temperature: ${celciusConvert(timelineData.days[i].temp)}`

                let newHumidity=document.createElement('p')
                newHumidity.innerHTML=`Humidity: ${timelineData.days[i].humidity}%`

                newDiv.append(newYear,newConditions,newTemp,newHumidity)
                timeline.append(newDiv)
            }
        }
        else{
          timeline.id=""
            for(let i=0;i<5;i++){
                let newDiv=document.createElement("div")
                newDiv.className="timelineSegment"
            
                let newYear=document.createElement('h3')
                newYear.innerHTML=timelineData.days[i].datetime

                let newConditions=document.createElement('p')
                newConditions.innerHTML=`Weather: ${timelineData.days[i].conditions}`

                let newTemp=document.createElement('p')
                newTemp.innerHTML=`Temperature: ${celciusConvert(timelineData.days[i].temp)}`

                let newHumidity=document.createElement('p')
                newHumidity.innerHTML=`Humidity: ${timelineData.days[i].humidity}%`

                newDiv.append(newYear,newConditions,newTemp,newHumidity)
                timeline.append(newDiv)
            }
        }
    }
        
    else{
        if(range=="Next 5"){
            let currHour=parseInt(today.substr(16,2))
            let currDay=1
            timeline.id=""
            let{days}=timelineData
            for(let i=0;i<5;i++){

                let newDiv=document.createElement("div")
                newDiv.className="timelineSegment"
                            
                let newHour=document.createElement('h3')
                newHour.innerHTML=days[currDay].hours[currHour].datetime

                let newConditions=document.createElement('p')
                newConditions.innerHTML=`Weather: ${days[currDay].hours[currHour].conditions}`
              
                let newTemp=document.createElement('p')
                newTemp.innerHTML=`Temperature: ${celciusConvert(days[currDay].hours[currHour].temp)}`

                let newHumidity=document.createElement('p')
                newHumidity.innerHTML=`Humidity: ${days[currDay].hours[currHour].humidity}%`

                newDiv.append(newHour,newConditions,newTemp,newHumidity)
                timeline.append(newDiv)

                currHour++
                if(currHour>23){
                    currHour=0
                    currDay=2
                }
            }               
            
        }
        else{
            let currHour=parseInt(today.substr(16,2))
            let currDay=1
            console.log('')
            timeline.id="reverseTimeDivs"
            let{days}=timelineData
            for(let i=5;i>0;i--){

                let newDiv=document.createElement("div")
                newDiv.className="timelineSegment"
                            
                let newHour=document.createElement('h3')
                newHour.innerHTML=days[currDay].hours[currHour].datetime

                let newConditions=document.createElement('p')
                newConditions.innerHTML=`Weather: ${days[currDay].hours[currHour].conditions}`
              
                let newTemp=document.createElement('p')
                newTemp.innerHTML=`Temperature: ${celciusConvert(days[currDay].hours[currHour].temp)}`

                let newHumidity=document.createElement('p')
                newHumidity.innerHTML=`Humidity: ${days[currDay].hours[currHour].humidity}%`

                newDiv.append(newHour,newConditions,newTemp,newHumidity)
                timeline.append(newDiv)

                currHour--
                if(currHour<0){
                    currHour=23
                    currDay=0
                }
            }     
        }
    }
}



// getLatLon()
// This initializes upon opening the page to display the current weather for default zip code: 11692
// (The function is commented for now to reduce the chance of getting locked out of API requests)


let today = new Date()

let tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

let yesterday = new Date(today)
yesterday.setDate(yesterday.getDate() - 1)

let dayLowerLimit=new Date(today)
dayLowerLimit.setDate(dayLowerLimit.getDate() - 4)

let dayUpperLimit=new Date(today)
dayUpperLimit.setDate(dayUpperLimit.getDate() + 4)

let yearBack4=(today.getFullYear()-4)
let yearBack3=(today.getFullYear()-3)
let yearBack2=(today.getFullYear()-2)
let yearBack1=(today.getFullYear()-1)
let yearForward1=(today.getFullYear()+1)
let yearForward2=(today.getFullYear()+2)
let yearForward3=(today.getFullYear()+3)
let yearForward4=(today.getFullYear()+4)

today=String(today)
tomorrow=String(tomorrow)
yesterday=String(yesterday)
dayLowerLimit=String(dayLowerLimit)
dayUpperLimit=String(dayUpperLimit)

yearBack4=String(yearBack4)
yearBack3=String(yearBack3)
yearBack2=String(yearBack2)
yearBack1=String(yearBack1)
yearForward1=String(yearForward1)
yearForward2=String(yearForward2)
yearForward3=String(yearForward3)
yearForward4=String(yearForward4)

console.log(today)
console.log(tomorrow)
console.log(yesterday)
console.log(dayLowerLimit)
console.log(dayUpperLimit)


// Sat Aug 13 2022 01:02:12 GMT-0400 (Eastern Daylight Time)

const monthConvert=month=>{
  if(month=="Jan"){
    return "01"
  }
  else if(month=="Feb"){
    return "02"
  }
  else if(month=="Mar"){
    return "03"
  }
  else if(month=="Apr"){
    return "04"
  }
  else if(month=="May"){
    return "05"
  }
  else if(month=="June"){
    return "06"
  }
  else if(month=="July"){
    return "07"
  }
  else if(month=="Aug"){
    return "08"
  }
  else if(month=="Sep"){
    return "09"
  }
  else if(month=="Oct"){
    return "10"
  }
  else if(month=="Nov"){
    return "11"
  }
  else{
    return "12"
  }
}

// Year
console.log(`${yesterday.substr(11,4)}`) 
// Day
console.log(`${yesterday.substr(8,2)}`)
// Month
console.log(`${monthConvert(yesterday.substr(4,3))}`)

console.log(`${yesterday.substr(11,4)}-${monthConvert(yesterday.substr(4,3))}-${yesterday.substr(8,2)}`)
console.log(`${today.substr(11,4)}-${monthConvert(today.substr(4,3))}-${today.substr(8,2)}`)

console.log(`${today.substr(16,8)}`)
console.log(`${today.substr(16,2)}`)

getLatLon()