"use strict";
let result = "";
function generateColorCode(){
    var colorCodeDigits = ["黒","茶","赤","橙","黄","緑","青","紫","灰","白"];
    var colorCodeMultiplier = ["金","黒","茶","赤","橙","黄","緑","青","紫","灰","白"];
    var colorCodeAccuracy = ["金","銀","無","茶","赤","緑"];
    result = `${colorCodeDigits[Math.floor(Math.random() * 9 + 1)]}${colorCodeDigits[Math.floor(Math.random() * 10)]}${colorCodeMultiplier[Math.floor(Math.random() * 9)]} ${colorCodeAccuracy[Math.floor(Math.random() * 5)]}`;
    document.getElementById("question").innerText = result;
    changeColorBar()
    document.getElementById("answer").innerText = "";
};
function changeColorBar(){
    for (let i = 0; i < 5; i++){
        switch (result[i]) {
            case "黒":
                document.getElementById(`code${i+1}`).style.color = "black";
                console.log("black");
                break;
            case "茶":
                document.getElementById(`code${i+1}`).style.color = "brown";
                console.log("brown");
                break;
            case "赤":
                document.getElementById(`code${i+1}`).style.color = "red";
                break;
            case "橙":
                document.getElementById(`code${i+1}`).style.color = "orange";
                break;
            case "黄":
                document.getElementById(`code${i+1}`).style.color = "yellow";
                break;
            case "緑":
                document.getElementById(`code${i+1}`).style.color = "green";
                break;
            case "青":
                document.getElementById(`code${i+1}`).style.color = "blue";
                break;
            case "紫":
                document.getElementById(`code${i+1}`).style.color = "purple";
                break;
            case "灰":
                document.getElementById(`code${i+1}`).style.color = "gray";
                break;
            case "白":
                document.getElementById(`code${i+1}`).style.color = "white";
                break;
            case "金":
                document.getElementById(`code${i+1}`).style.color = "gold";
                break;
            case "銀":
                document.getElementById(`code${i+1}`).style.color = "silver";
                break;
            case "無":
                document.getElementById(`code${i+1}`).style.color = "#f8ce8f";
                break;
        }
    }
}
function showAnswer(){
    let resistanceValue;
    let resistanceValueString;
    var colorCodeDigitsValue = {"黒":0, "茶":1, "赤":2, "橙":3, "黄":4, "緑":5, "青":6, "紫":7, "灰":8, "白":9 };
    var colorCodeMultiplierValue = {"金": 1e-1, "黒": 1e0, "茶": 1e1, "赤": 1e2, "橙": 1e3, "黄": 1e4, "緑": 1e5, "青": 1e6, "紫": 1e7, "灰": 1e8, "白": 1e9};
    resistanceValue = ((colorCodeDigitsValue[result[0]]*10 + colorCodeDigitsValue[result[1]])*colorCodeMultiplierValue[result[2]]);
    switch (result[2]) {
        case "金":
            resistanceValueString = `${(resistanceValue).toFixed(1)}`;
            break;
        case "赤":
            resistanceValueString = `${(resistanceValue/1000).toFixed(1)}k`;
            break;
        case "橙":
        case "黄":
            resistanceValueString = `${(resistanceValue/1000)}k`;
            break;
        case "緑":
            resistanceValueString = `${(resistanceValue/1000000).toFixed(1)}M`;
            break;
        case "青":
        case "紫":
            resistanceValueString = `${(resistanceValue/1000000)}M`;
            break;
        default:
            resistanceValueString = `${resistanceValue}`
    }
    switch (result[4]) {
        case "金":
            resistanceValueString = resistanceValueString + "Ω±5%"
            break;
        case "銀":
            resistanceValueString = resistanceValueString + "Ω±10%"
            break;
        case "無":
            resistanceValueString = resistanceValueString + "Ω±20%"
            break;
        case "茶":
            resistanceValueString = resistanceValueString + "Ω±1%"
            break;
        case "赤":
            resistanceValueString = resistanceValueString + "Ω±2%"
            break;
        case "緑":
            resistanceValueString = resistanceValueString + "Ω±0.5%"
            break;
    }
    document.getElementById("answer").innerText = resistanceValueString;
}
