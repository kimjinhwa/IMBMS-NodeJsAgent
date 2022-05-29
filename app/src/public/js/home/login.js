"use strict"

const { post } = require("../../../routes/home");

const userId = document.querySelector("#userId");
const passwd= document.querySelector("#passwd");
const button = document.querySelector("#submit");

button.addEventListener("click",login);

function login(){
    const req = {
        userId : userId.value,
        passwd : passwd.value
    };

    fetch("/login",{
        method: "POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify(req)
    });
}
