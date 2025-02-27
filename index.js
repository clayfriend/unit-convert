let inputNum=document.getElementById("input-num")
const convertBtn=document.getElementById("convert-btn")
const cleanBtn=document.getElementById("clean-btn")
const lengthInfo=document.getElementById("length-info")
const volumeInfo=document.getElementById("volume-info")
const massInfo=document.getElementById("mass-info")



cleanBtn.addEventListener("dblclick",function(){
    inputNum.value=""
    lengthInfo.textContent=""
    volumeInfo.textContent=""
    massInfo.textContent=""
})

convertBtn.addEventListener("click", function(){
    lengthContainer()
    volumeConvert()
    massConvert()
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

function massConvert(){
    let input=inputNum.value
    let pounds= input*2.20462
    let kilogram=input*0.453592
    let result=`${input} kilos= ${pounds.toFixed(3)} pounds | ${input} pounds= ${kilogram.toFixed(3)} kilos `
    massInfo.textContent=result
}