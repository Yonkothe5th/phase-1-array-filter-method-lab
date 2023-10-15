// Code your solution here

function findMatching(driversArr,string){
 return driversArr.filter(item=>item.toLowerCase() ===  string.toLowerCase());
}

function fuzzyMatch(driversArr,string){
    return driversArr.filter(item => item.charAt(0) === string.charAt(0));
}

function matchName(driversArr,string){
    return driversArr.filter(item => item.name === string);
}