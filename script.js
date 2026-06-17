let water = localStorage.getItem("water") || 0;

document.getElementById("waterCount").innerHTML =
water + " Glasses";

function addWater(){

     water++;

    localStorage.setItem(
        "water",
        water
    );

    document.getElementById(
        "waterCount"
    ).innerHTML =
    water + " Glasses";


    document.getElementById(
"summary"
).innerHTML =
"Water Intake: " + water;

}

function addExercise(){

let exercise =
document.getElementById(
"exercise"
).value;

let li =
document.createElement("li");

li.innerText = exercise;

document.getElementById(
"exerciseList"
).appendChild(li);

}


function saveMedicine(){

let medicine =
document.getElementById(
"medicine"
).value;

let time =
document.getElementById(
"time"
).value;

alert(
medicine +
" reminder set for "
+
time
);

}


localStorage.setItem(
"water",
water
);