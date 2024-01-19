
document.onkeydown = function(e) {
    if (e.ctrlKey && e.shiftKey && e.keyCode === 105) {//easteregg
        alert("NON APRIRE LA CONSOLE DIO PORCO!!!")
    }
    return false;
};
document.addEventListener('contextmenu', function(event) {
    // Impedisci il comportamento predefinito del menu di contesto
    event.preventDefault();

});
var isConsoleOpen = false;

// Funzione per controllare lo stato della console


// Controlla lo stato della console periodicamente
setInterval(checkConsole, 1000);




print=function(){}
//console.log(console)
ctx=console
ctx.log('ciaoao')
console.log=function(){}
