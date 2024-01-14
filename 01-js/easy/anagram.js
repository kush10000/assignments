/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length != str2.length)
    return false;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  let arr1 = str1.split('');
  let arr2 = str2.split('');
  for(let i=0;i<str1.length;i++)
  {
    let temp = 0;
    for(let j=0;j<str2.length;j++)
    {
      if(arr1[i] == arr2[j]){
        arr2[j]=null;
        temp =1;
        break;
      }
    }
    if(temp == 0)
    return false;
  }
  return true;
}

module.exports = isAnagram;
