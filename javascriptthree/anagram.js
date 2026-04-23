function anagram(string1,string2){

if(str1.length!=str2.length){
    return false;
}

let sort1=string1.split('').sort().join('')
let sort2=string2.split('').sort().join('')

return sort1===sort2;

}

let str1="spar"
let str2="rasp"

console.log(anagram(str1,str2))