// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  

  function caesar(input, shift, encode = true) {
    
    // let alpha = [
    //   'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 
    //   'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    // ];
    

    if (shift === 0 || shift > 25 || shift < -25) return false; 
    // lower case message,create new array for message,create and spread alphabet 
    let lowCap = input.toLowerCase(); 
    const message = []; 
    const alpha = "abcdefghijklmnopqrstuvwxyz"; 
    const spreadAlpha = [...alpha, ...alpha, ...alpha];
    console.log(spreadAlpha) 
    
  // not sure why it only works with repeated alpha spread? only solution i found for the issue. 
  shift = encode ? shift : shift * -1;

for (letter of lowCap) {
  const letShift = alpha.indexOf(letter);
  if (!alpha.includes(letter)) {
    message.push(letter);
  } else {
    message.push(spreadAlpha[letShift + 26 + shift]);
  }
}
console.log(message)
return message.join("");      
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
