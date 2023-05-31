

let maara = 0;
let kerroin = 1;

function lisaa(){
    maara += kerroin;
    document.getElementById("clickmaara").innerHTML =  maara;
}

function ostaKerroin() {
    if (maara >= 100) {
        maara -= 100;
        kerroin = kerroin * 3;
        document.getElementById("clickmaara").innerHTML = maara;
    }   
}