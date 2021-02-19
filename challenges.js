/* Two Sum
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

function twoSum(nums, target){
  let idxArr = []
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      console.log(nums[i] + nums[j])
      if (nums[i] + nums[j] === target){
        idxArr.push(i, j)
      }
    }
  } return idxArr
}

// twoSum([1, 2, 7, 10], 9)

/* Longest Word
Return the length of the longest word in the provided sentence.

Your response should be a number.

e.g.

getLongestWord("over the garden wall.") // 6

*/

function getLongestWord(str){
  let longestWord = 0
  let count = 0
  for(let i = 0; i < str.length; i++){
    let char = str[i]
    if (char === " " || i === str.length - 1){
      if (count > longestWord) longestWord = count
      count = 0
      continue
    } else {
      count++
    }
  } return longestWord
}

// getLongestWord("over the gardennnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn walllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll")

/*Titleize a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
*/

function titleize(str){
  newStr = str[0].toUpperCase()
  let skipCount
  for(let i = 0; i < str.length; i++){
    let char = str[i]
    if (char === " "){
      newStr += " " + str[i + 1].toUpperCase()
      skipCount = i + 1
    } else if (i === 0 || i === skipCount){
      continue
    } else {
      newStr += char
    }
  } return newStr
}

titleize("oh, potatoes and molasses!")