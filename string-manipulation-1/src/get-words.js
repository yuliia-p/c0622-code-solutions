/* exported getWords */
function getWords(string) {
  const result = [];
  if (!string) {
    return result;
  }
  return string.split(' ');
}
