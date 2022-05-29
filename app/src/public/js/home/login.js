"use strict"

const userId = document.querySelector("#userId");
const passwd= document.querySelector("#passwd");
const button = document.querySelector("#submit");

button.addEventListener("click",login);

function login(){
    const req = {
        userId : userId.value,
        passwd : passwd.value
    }
    console.log(req);
}
