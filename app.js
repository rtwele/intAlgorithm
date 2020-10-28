//Steamroller Challenge
function steamrollArray(arr) {
var oneArray = [];
flatten(arr);
function flatten(arr){
    arr.forEach(function(arr2){
        if (!Array.isArray(arr2)) {
            oneArray.push(arr2);
        } else{
            flatten(arr2);
        }
    });
}
return oneArray;
}
console.log(steamrollArray([1, [2], [3, [[4]]]]));
console.log(steamrollArray([1, [], [3, [[4]]]]));

//Drop It Challenge
function drop(arr, func) {
while(!func(arr[0])){
    arr.shift();
}
return arr;
}
console.log(drop([1, 2, 3, 4], function(n) {return n >= 3;}));

// Arguments Optional Challenge
function addTogether() {
var params = [].slice.call(arguments);
if (!params.every(function(param){
    return typeof param === 'number';
})) {
    return undefined;
}
if (params.length === 2){
    return params[0] + params[1];
} else {
    var firstParam = params[0];
    var addOneMore = function(secondParam) {
        return addTogether(firstParam,secondParam)
    };
    return addOneMore;
}
}
console.log(addTogether("http://bit.ly/IqT6zt"));
console.log(addTogether(5)(7));
console.log(addTogether(2, "3"));
console.log(addTogether(23, 30));