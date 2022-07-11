/* exported getWords */
// Assign an empty array to variable
// Check if the value given is not a string
// If its not a string return an empty array
// Return result of a string with split() method with ‘ ‘ argument
function getWords(string) {
  const result = [];
  if (!string) {
    return result;
  }
  return string.split(' ');
}
