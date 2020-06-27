
const str ='';
const result = re.exec(str);
console.log(resutl);

function reTest(re, str){
    if(re.test(str)){
        console.log(`${str} Matched ${re.source}`);

    } else {
        console.log(`${str} does NOT match ${re.source}`);
    }
}