let inputNum=document.getElementById("input-num")
const convertBtn=document.getElementById("convert-btn")
const lengthInfo=document.getElementById("length-info")
const volumeInfo=document.getElementById("volume-info")
const massInfo=document.getElementById("mass-info")

console.log(volumeInfo)


convertBtn.addEventListener("click", function(){
    lengthContainer()
    volumeConvert()
})

function lengthContainer(){
    let input=inputNum.value
    let feet= input* 3.28084
    let meters=input*0.3048 
    let result=`${input} meters= ${feet.toFixed(3)} feet | ${input} feet= ${meters.toFixed(3)} meters `
    lengthInfo.textContent=result
}

function volumeConvert(){
    let input=inputNum.value
    let gallons= input*0.264
    let litters=input*3.785
    let result=`${input} liters= ${gallons.toFixed(3)} gallons | ${input} gallons= ${litters.toFixed(3)} liters `
    volumeInfo.textContent=result
}