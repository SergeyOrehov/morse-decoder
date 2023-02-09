const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  let newStr = "";
  let wordDecoder = "";
  for (let i = 0; i < expr.length; i++) {
    if (i % 10 == 0 && i != 0) {
      newStr = newStr + " ";
    }
    newStr = newStr + expr[i];
  }
  const arr = newStr.split(" ");

  for (let k = 0; k < arr.length; k++) {
    if (arr[k] == "**********") {
      wordDecoder += " ";
      continue;
    }
    let elem = fun(arr[k]);
    let wordMorse = "";
    elem.forEach((item) => {
      if (item == "10") wordMorse += ".";
      if (item == "11") wordMorse += "-";
    });
    for (let item in MORSE_TABLE) {
      if (item == wordMorse) wordDecoder += MORSE_TABLE[item];
    }
  }

  return arr;
}

const fun = (str) => {
  let newStr1 = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0 && i != 0) {
      newStr1 = newStr1 + " ";
    }
    newStr1 = newStr1 + str[i];
  }
  const arr1 = newStr1.split(" ");

  return arr1;
};

module.exports = {
  decode,
};

console.log(
  decode("00101010100000000010001011101000101110100000111111**********")
);
