/* eslint-disable no-prototype-builtins */
/* exported defaults */
// target - Any JavaScript Object
// source - Any JavaScript Object
// assigns properties of source ==> target
// loop sourse for properties
// check if target doesnt have the same property
// assign it to target obj with value
function defaults(target, source) {
  for (var key in source) {
    if (!target.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
}
