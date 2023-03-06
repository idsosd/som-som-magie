//de inputvelden hebben een property value
let cel11 = document.getElementById('inp_11');
let cel14 = document.getElementById('inp_14');
let cel24 = document.getElementById('inp_24');
let cel34 = document.getElementById('inp_34');
let cel42 = document.getElementById('inp_42');
let cel43 = document.getElementById('inp_43');
//de oplossingscellen hebben geen property value maar wel een property innerText
let cel22 = document.getElementById('opl_22');
let cel23 = document.getElementById('opl_23');
let cel32 = document.getElementById('opl_32');
let cel33 = document.getElementById('opl_33');
let card = document.getElementById('uitlegcard');

function solvePuzzle() {
    let opl22 = 0;
    let opl23 = 0;
    let opl32 = -1;
    let opl33 = 0;
    let i = 0;
    //er zijn maar liefst 6 voorwaarden waaraan moet worden voldaan: 2 kolommen, 2 rijen en 2 diagonalen
    //1e is eerste kolom, 2e is tweede kolom, 3e is eerste rij, 4e is tweede rij, 5e is 1e diagonaal, 6e is 2e diagonaal
    while (opl23 + opl33 != cel43.value || opl22 + opl33 != cel11.value || opl32 + opl23 != cel14.value) {
        opl32++;
        opl22 = cel42.value - opl32;
        opl23 = cel24.value - opl22;
        opl33 = cel34.value - opl32;
    }
    cel22.innerText = opl22;
    cel23.innerText = opl23;
    cel32.innerText = opl32;
    cel33.innerText = opl33;
}

function toggleUitlegcard() {
    if(card.style.display === "none")
        card.style.display = "block";
    else
        card.style.display = "none";
}