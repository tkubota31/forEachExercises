//doubleValues
function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(value){
        newArr.push(value*2);
    });
    return newArr;
}

//onlyEvenValues
function onlyEvenValues(arr){
    let newArr=[];
    arr.forEach(function(value){
        if(value % 2 ===0){
            newArr.push(value);
        }
    });
    return newArr;
}

//showFirstAndLast
function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(value){
        newArr.push(value[0] + value[value.length-1]);
    });
    return newArr;
}

//addKeyAndValue
function addKeyAndValue(arr, key, val){
    arr.forEach(function(value){
        value[key] = val;
    });
    return arr;
}

//vowelCount
function vowelCount(str){
    let obj = {};
    let vowels = "aeiou";
    let splitStr = str.split("");

    splitStr.forEach(function(letter){
        let lowerCase = letter.toLowerCase();
        if (vowels.indexOf !== -1){
            if(obj[lowerCase]){
                obj[lowerCase]++;
            } else{
                obj[lowerCase] = 1;
            }
        }
    });
    return obj;

}

//doubleValuesWithMap
function doubleValuesWithMap(arr){
    let newArr = arr.map(function(val){
        return val * 2;
    });
}

//valTimesIndex
function valTimesIndex(arr){
    let newArr = arr.map(function(val,index){
        return val * index;
    });
}

//extractKey
function extractKey(arr , key){
    let newArr = arr.map(function(val){
        return val[key];
    });
}

//extractFullName
function extractFullName(arr){
    let newArr = arr.map(function(val){
        return val.first + " " + val.last;
    });
}

//filterByValue
function filterByValue(arr,key){
    let newArr = arr.filter(function(val){
        return val[key] !== undefined;
    });
}

//findInObj
function findInIbj(arr, key, val){
    let newArr = arr.filter(function(value){
        return value[key] === val;
    });
}

//removeVowels
function removeVowels(str){
    let vowels ='aeiou';
    let newStr = str.toLowerCase();
    splitStr = newStr.split("");
    let removedStr = splitStr.filter(function(val){
        return vowels.indexOf(val) === -1;
    }) .join("");
}

//doubleOddNumbers
function doubleOddNumbers (arr){
    let newArr = arr.filter(function(val){
        return val % 2 !== 0;
    })
    newArr.map(function(val){
        return val * 2;
    });
}
