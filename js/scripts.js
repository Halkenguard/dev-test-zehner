import header from "./header.js";

function renderDom(){

    var headerHtml = header();

    document.getElementById("header").innerHTML = headerHtml;
};

window.onload = renderDom();