// const url="http://api.weatherapi.com/v1/current.json?key=d382858a4c164f42b0c62410232505&q=Jaipur&aqi=no"
const city=document.querySelector("#s2");
const search=document.querySelector("#s3");
const temp=document.querySelector("#temp")
const image=document.querySelector("#image")
const nature=document.querySelector("#nature")
const jagah=document.querySelector("#city")
const day=document.querySelector("#day")
const clock=document.querySelector("#time")
const wheather=async(place)=>{
   try{
    const url=`http://api.weatherapi.com/v1/current.json?key=d382858a4c164f42b0c62410232505&q=${place}&aqi=no`
    const response=await fetch(url)
    const data= await response.json()
    // console.log(data,"SUCESSES")
    // console.log(data.location.name)
    let name1=data.location.name;
    temp.innerHTML=data.current.temp_c+ " °C"
    // console.log(data.current.temp_c)
    image.src=data.current.condition.icon
    // console.log(data.current.condition.text)
    nature.innerHTML=data.current.condition.text
    // console.log(data.current.condition.icon)
    jagah.innerHTML="COUNTRY :"+`<br>`+data.location.country+`<br>`+"REGION:"+`<br>`+`<br>`+data.location.region  
    console.log(data.location.localtime)
    const datetime=data.location.localtime
    const datesplit=datetime.split(" ")[0]
    const  timesplit=datetime.split(" ")[1]
    // console.log(timesplit)
    const currentday=new Date(datesplit).getDay()
    if(currentday===0){
        day.innerHTML="Day: sunday";
    }
    else if(currentday===1){
        day.innerHTML="Day: monday";
    } 
    else if(currentday===2){
        day.innerHTML="Day: tuesday"
    }
    else if(currentday===3){
        day.innerHTML="Day: wednesday"
    }
    else if(currentday===4){
        day.innerHTML=" Day: thrusday"
    }
    else if(currentday===5){
        day.innerHTML="Day: friday"
    }
    else if(currentday===6){
        day.innerHTML="Day: saturday"
    }
   let time=parseInt(timesplit,10)
   console.log(time)
   const a=timesplit.charAt(3)
   const b=timesplit.charAt(4)
   if(time>12){
    let t=time-12
    // let a=timesplit.charAt(3)
    // let b=timesplit.charAt(4)
    clock.innerHTML=`Time is: ${t}:${a}${b} NIGHT`
   }
   else{
    clock.innerHTML=`Time is: ${time}:${a}${b} DAY`
    console.log(a)
   }
   update(name1);
   
}

   catch(err){
     console.log(err)
     Container.innerHTML="please enter correct city name"
   }
}   
const update=(name1)=>{
console.log(name1)
}

// wheather();
// console.log(data.location.localtime)
function map(e){
    e.preventDefault()
    const target=city.value
    wheather(target);
    // update(name1);
    // console.log(name1)
  }  
// console.log(name1)
search.addEventListener("click",map,update);
//    const place=city.value;


// wheather(target);
// console.log(data.location.localtime)
// const datetime=data.location.localtime
//     const datesplit=datetime.split(" ")[0]
//     const  timesplit=datetime.split(" ")[1]
//     const currentday=new Date(datesplit).getDay() 
let timeout=setTimeout(()=>{
    // console.log("90")
},4000)
city.addEventListener(("click"),()=>{
    console.log("city clicked")
})
