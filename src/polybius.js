// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  function polybius(input, encode = true) {
    
    let lowCap = input.toLowerCase();
    const square = [

    ['a', 'b', 'c', 'd', 'e'],
    ['f', 'g', 'h', 'i/j', 'k'],
    ['l', 'm', 'n', 'o', 'p' ],
    ['q', 'r', 's', 't', 'u'],
    ['v', 'w', 'x', 'y', 'z']
    
  ];


  if (encode) {
    let result = [];
    //establishes the numerical value for each letter by looping through the input
    for (let letter of lowCap) {

      switch (letter) {

      case 'a':
        result.push(11);
        break;
      case 'b':
        result.push(21);
        break;
      case 'c':
        result.push(31);
        break;
      case 'd':
        result.push(41);
        break;
      case 'e':
         result.push(51);
        break;
      case 'f':
        result.push(12);
        break;
      case 'g':
        result.push(22);
        break;
      case 'h':
        result.push(32);
        break;
      case 'i':
      case 'j':
        result.push(42);
        break;
      case 'k':
        result.push(52)
        break;
      case 'l':
        result.push(13);
        break;
      case 'm':
        result.push(23);
        break;
      case 'n':
        result.push(33);
        break;
      case 'o':
        result.push(43);
        break;
      case 'p':
        result.push(53);
        break;
      case 'q':
        result.push(14);
        break;
      case 'r':
        result.push(24);
        break;
      case 's':
        result.push(34);
        break;
      case 't':
        result.push(44);
        break;
      case 'u':
        result.push(54);
        break;
      case 'v':
        result.push(15);
        break;
      case 'w':
        result.push(25);
        break;
      case 'x':
        result.push(35);
        break;
      case 'y':
        result.push(45);
        break;
      case 'z':
        result.push(55);
        break;
      case ' ':
        result.push(' ');
    }
  }

  let message = result.reduce((start, result) => {
    return start + result
  },'');
  
  
  return message
} else {
  
  if (input.replace(" ", "").length % 2 > 0) return false;
  
  let pairs = [];
  
  for (let i = 0; i < input.length; i+=2) {
    if (input[i] === ' ') {
      pairs.push(input[i]);
      i = i + 1;
    }
    pairs.push(Number(input[i] + input[i + 1]));
  }
  
  
  let result = []

  for (let numbers of pairs) {

  switch (numbers) {

    case 11:
      result.push('a');
      break;
    case 21:
      result.push('b');
      break;
    case 31:
      result.push('c');
      break;
    case 41:
      result.push('d');
      break;
    case 51:
       result.push('e');
      break;
    case 12:
      result.push('f');
      break;
    case 22:
      result.push('g');
      break;
    case 32:
      result.push('h');
      break;
    case 42:
      result.push('i/j');
      break;
    case 52:
      result.push('k')
      break;
    case 13:
      result.push('l');
      break;
    case 23:
      result.push('m');
      break;
    case 33:
      result.push('n');
      break;
    case 43:
      result.push('o');
      break;
    case 53:
      result.push('p');
      break;
    case 14:
      result.push('q');
      break;
    case 24:
      result.push('r');
      break;
    case 34:
      result.push('s');
      break;
    case 44:
      result.push('t');
      break;
    case 54:
      result.push('u');
      break;
    case 15:
      result.push('v');
      break;
    case 25:
      result.push('w');
      break;
    case 35:
      result.push('x');
      break;
    case 45:
      result.push('y');
      break;
    case 55:
      result.push('z');
      break;
    case ' ':
      result.push(' ');
  }
  }

  let message = result.reduce((start, result) => {
    return start + result
  },'');
  return message 
} 
  

    

  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
