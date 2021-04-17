document.getElementById("submitButton").onclick=function(){
    calculateTip();
};

function calculateTip(){
    let tip=document.getElementById("tipAmount").value;
    let bill=document.getElementById("billAmount").value;
    console.log(tip);
    console.log(bill);
    let tipTotal=(bill * (tip/100));
    tipTotal=Math.round(tipTotal * 100) / 100;
    document.getElementById("calculatedTip").textContent=tipTotal;
    console.log(tipTotal);

}
