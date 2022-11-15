export const stringLength = (string) => {

  if(string.length > 0 && string.length < 10){
    return string.length;
  }

  else if(string.length >= 10) {
    throw new Error('String length more than 10');
  }

  else if(string.length <= 0) {
    throw new Error('String length less than 1');
  }
}

export const reverseString = (string) => {

  return string.split('').reverse().join('');

};

class Calculator {
  static add = ( num1, num2 ) => {
    return num1 + num2;
  }

  static subtract = ( num1, num2 ) => {
    return num1 - num2;
  }

  static devide = ( num1, num2 ) => {
    return num1 / num2;
  }

  static multiply = ( num1, num2 ) => {
    return num1 * num2;
  }
}

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default Calculator;