var langDirectory;

try 
{
    var userLang = navigator.language || navigator.userLanguage;
    langDirectory = userLang.split("-")[0] === "de" ? "de" : "en";
}
catch
{
     langDirectory = "en";
}

$(document).ready(function() {
    if(langDirectory === "en") {
        $("#side_usage").text("Usage");
    }
    $("#content").load("./"+langDirectory+"/start.txt");
});

$("#side_usage").click(function() {
   $("#content").text("./"+langDirectory+"/usage.txt");
});

$("#side_inst").click(function() {
    $("#content").text("./"+langDirectory+"/installation.txt");
});

$("#side_features").click(function() {
    $("#content").text("./"+langDirectory+"/features.txt");
});

$("#side_start").click(function() {
    $("#content").text("./"+langDirectory+"/start.txt");
});

$("#side_dl").click(function() {
    $("#content").html("./"+langDirectory+"/download.txt");
});