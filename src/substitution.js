// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  
  function isUnique(alphabet) {
   let uniqueAlpha = [];
    for (let i = 0; i < alphabet.length; i++) {
      if (uniqueAlpha.includes(alphabet[i])) {
        return false
      } else {
        uniqueAlpha.push(alphabet[i])
      }
    }
    return true
  }


  function substitution(input, alphabet, encode = true) {

    
    let realAlpha = "abcdefghijklmnopqrstuvwxyz"
    if (input === undefined || alphabet === undefined || alphabet.length !== 26 || !isUnique(alphabet)) {
      return false
    }
    let lowCapInput = input.toLowerCase();
    let lowCapAlpha = alphabet.toLowerCase();
    let indexResult = [];
    let result = [];
    
    if (encode) {
    for (let letter of lowCapInput) {
      const index = realAlpha.indexOf(letter)
      if (letter === ' ') {
        indexResult.push(letter)
      }
        indexResult.push(index)
      }
    console.log(indexResult)
    for (let i = 0; i < indexResult.length; i++) {
      if (indexResult[i] === ' ') {
          result.push(' ')
        }
      for (let j = 0; j < lowCapAlpha.length; j++) {
        
        if (j === indexResult[i]) {
          result.push(lowCapAlpha[j])
        }
      }
    }
    console.log(result)
    return result.join('')
   } else {
     //Finds the index at the made up alphabet
     for (let letter of lowCapInput) {
      const index = lowCapAlpha.indexOf(letter)
      if (letter === ' ') {
        indexResult.push(letter)
      }
        indexResult.push(index)
      }
     //Finds the index of the letter on the real Alphabet and returns that letter
     for (let i = 0; i < indexResult.length; i++) {
      if (indexResult[i] === ' ') {
          result.push(' ')
        }
      for (let j = 0; j < realAlpha.length; j++) {
        
        if (j === indexResult[i]) {
          
          result.push(realAlpha[j])
        }
      }
    }
     return result.join('')
   }
    
    
  }
  
    
    
  

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
