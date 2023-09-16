// src/sum.ts
var sum = function(a, b) {
  return a + b;
};
var sum_default = sum;
// src/subtract.ts
var subtract = function(a, b) {
  return a - b;
};
var subtract_default = subtract;
export {
  sum_default as sum,
  subtract_default as subtract
};
