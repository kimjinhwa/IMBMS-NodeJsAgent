"use strict";
//모듈
const express = require("express");
const app = express();
// 라우팅
const home = require("./src/routes/home");//  경로에 있는 자바스크립트를 불러와라.
app.use("/",home);

//웹 세팅
app.set('views','./src/views');
//VIEW 엔진을 ejs로 설정해 준다 
app.set('view engine','ejs');

module.exports = app;