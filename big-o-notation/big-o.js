/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1) // constant time
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n) // property acsses and comperison - linear time
    i++                             // 2 * n = O(2n) // + and assigment - linear time
  ) {
    const word = words[i];          // 2 * n = O(2n) // index acsses and assigment, inside loop and n times - linear time
    if (!seen[word]) {              // 3 * n = O(3n)
      seen[word] = true;            // 2 * n = O(2n)
      unique[unique.length] = word; // 3 * n = O(3n)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 2 * n = O(2n)
    let isUnique = true;            // 1 * n = O(n)
    for (                           // NESTED LOOP!!!
      let c = 0;                    // 1 * n = O(n)
      c < i;                        // 2 * n * n = O(2n^2) // quadractic time
      c++                           // 2 * n * n = O(2n^2) // quadractic time
    ) {
      const comparing = words[c];   // 2 * n * n = O(2n^2)
      if (comparing === word) {     // 1 * n * n = O(n^2)
        isUnique = false;           // 1 * n * n = O(n^2)
      }
    }
    if (isUnique) {                 // 1 * n = O(n)
      unique[unique.length] = word; // 3 * n = O(3n^2)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
