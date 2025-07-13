/*
Create a function that takes a string and returns dashes on the left and right side of every vowel (a e i o u).

Examples

dashed("Carpe Diem") ➞ "C-a-rp-e- D-i--e-m"

dashed("Fight for your right to party!") ➞ "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!"
Notes
A string can contain uppercase and lowercase vowels.
*/

function dashed( str ) {
  //your code
  const newStr = ``;
  const vowels = [`a`, `o`, `i`, `e`, `u`];
  if (str === "") return '';
  for(let char of str){
    if (vowels.includes(char.toLowerCase())) newStr += `-` + char + `-`;
    else newStr += char;
  }
  return newStr;
}

exports.solution = dashed;