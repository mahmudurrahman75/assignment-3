

// feetToMile

function feetToMile(feet) {
    const mile = feet/5280;
    return mile;
}
    let totalMile1 = feetToMile(633600);
    console.log(totalMile1);
    let totalMile2 = feetToMile(1108800);
    console.log(totalMile2);
    let totalMile3 = feetToMile(1848000);
    console.log(totalMile3);





// woodCalculator

    function woodCalculator (chair,table,khat) {
        const chairCount = chair * 1;
        const tableCount = table * 3;
        const khatCount = khat * 5;
        let totalWood = chairCount + tableCount + khatCount;
        return totalWood;
    }
    let woodResult = woodCalculator(30,18,15);
    console.log(woodResult);



   
// tinyFriend

function tinyFriend(name){
    var smallest = name[0];
    for(i=0; i<name.length;i++){
        var element=name[i];
        if(element<smallest){
            smallest=element;
        }
    }
    return smallest;
}
var small=tinyFriend(["mahmud","maostafiz","mizanur","efti",]);
console.log(small);




// brickCalculator

function brickCalculator(floor){
    var feet=1000;
    var step1;
    var step2;
    var step3;
    if(floor<=10){
        var step1=feet*15*floor;
        return step1;
    }
    else if(floor>=11 && floor <=20){
        var step2=feet*12*floor;
        return step1+step2;
    }
    else (floor>=21){
        var step3=feet*10*floor;
        return step1+step2+step3;
    }
}
var result=brickCalculator(15);
console.log(result);






