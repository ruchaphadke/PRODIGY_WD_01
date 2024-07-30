var con_view = document.getElementById("con_link");
con_view.onclick=function(){
    document.getElementById("contact").classList.remove("d-none");
    document.getElementById("home").classList.add("d-none");
    document.getElementById("services").classList.add("d-none");
    document.getElementById("about").classList.add("d-none");
}
var ab_view = document.getElementById("ab_link");
ab_view.onclick=function(){
    document.getElementById("contact").classList.add("d-none");
    document.getElementById("home").classList.add("d-none");
    document.getElementById("services").classList.add("d-none");
    document.getElementById("about").classList.remove("d-none");
}
var home_view = document.getElementById("home_link");
home_view.onclick=function(){
    document.getElementById("contact").classList.add("d-none");
    document.getElementById("home").classList.remove("d-none");
    document.getElementById("services").classList.add("d-none");
    document.getElementById("about").classList.add("d-none");
}
var ser_view = document.getElementById("ser_link");
ser_view.onclick=function(){
    document.getElementById("contact").classList.add("d-none");
    document.getElementById("home").classList.add("d-none");
    document.getElementById("services").classList.remove("d-none");
    document.getElementById("about").classList.add("d-none");
}
