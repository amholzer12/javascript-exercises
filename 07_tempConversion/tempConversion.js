const ftoc = function(f) {
  answer = (f -32) * (5/9);
  roundedAnswer = Math.round(answer * 10) / 10
  return roundedAnswer
};

const ctof = function(c) {
  answer = c * 1.8 + 32;
  roundedAnswer = Math.round(answer * 10) / 10
  return roundedAnswer
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
