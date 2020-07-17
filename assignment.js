//feetToMile****************************

function feetToMile(feet){
    var miles=feet/5280
    return miles
}

var myfeet=feetToMile(356)
console.log(myfeet)

var theirfeet=[456,787898,2820]
var yourfeet=feetToMile(theirfeet[1])
console.log(yourfeet)

//woodCalculator*************************

function woodCalculator(chair,table,bed){
    var result = 0;

    chair *= 1;
    table *= 3;
    bed *= 5;

    result = chair + table + bed;
    return result
}
console.log(woodCalculator(14,2,2))

//brickCalculator*************************

function brickCalculator(floor){
    var totalBrick = 0

    if(floor<11){
        var totalFeet = floor*15;
        totalBrick = totalFeet*1000;
        return totalBrick;
    }
    else if(floor>10 && floor<=20){
        var remainFloor = floor - 10;
        var remainFloorFeet = remainFloor*12;

        totalFeet = 10*15 + remainFloorFeet;

        totalBrick = totalFeet*1000;

        return totalBrick;
    }
    else{
        remainFloor = floor - 20;
        remainFloorFeet = remainFloor*10;

        totalFeet = (10*15) + (10*12) +remainFloorFeet;

        totalBrick = totalFeet*1000;

        return totalBrick
    }
}


console.log(brickCalculator(15))

//tinyfriends****************************

var array = []
function tinyFriends(arr){

    if(arr == ''){
        return 'empty array'
    }
    
    else{
        var smallFriend = arr[0]
        for(var i = 0; i<arr.length; i++){
            var elements = arr[i]
            if(elements.length<smallFriend.length && elements[i]!=' '){
                smallFriend = arr[i]
            }
        }
        return smallFriend
    }
}
console.log(tinyFriends(array))