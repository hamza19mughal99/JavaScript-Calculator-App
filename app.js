
function getNum(number) {

    var num = document.getElementById("putNum");
    num.value += number;
}

function clearResult(){
    var num = document.getElementById("putNum");
   
    num.value = " ";
}

function getResult() {
    var num = document.getElementById("putNum");
    num.value = eval(num.value);
}
function getdel() {
    var num = document.getElementById("putNum"); 
    num.value = num.value.slice(0,num.value.length - 1);
}
