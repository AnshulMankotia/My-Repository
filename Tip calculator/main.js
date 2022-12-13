const usualTip=15;
const specialTip=20;

let x=275;

let tipCalc1=usualTip/100*x;
let tipCalc2=specialTip/100*x;

if(x>=50&&x<=300){
    console.log(tipCalc1)
}else{
    console.log(tipCalc2)
}

let totalBill=tipCalc1+x;

console.log(`The Bill was ${x},the tip was ${tipCalc1} and the total value ${totalBill}`)
