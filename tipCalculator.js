

document.getElementById("submitButton").onclick=function(){
    calculateTip();
};

function calculateTip(){
    let tip=document.getElementById("tipAmount").value;
    let bill=document.getElementById("billAmount").value;
    console.log(tip);
    console.log(bill);
    console.log(bill * (tip/100));
}
